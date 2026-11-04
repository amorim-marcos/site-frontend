import {
  Box,
  Button,
  Flex,
  FlexProps,
  FormControl,
  Icon,
  Progress,
  Text
} from '@chakra-ui/react'
import ContactChannelFormLabel from '@components/ContactChannelForm/ContactChannelFormLabel'
import ContactChannelInfoInput from '@components/ContactChannelForm/ContactChannelInfoInput'
import FormInput from '@components/FormInput'
import FormSelect from '@components/FormSelect'
import FormTextArea from '@components/FormTextArea'
import { useCallback, useEffect, useRef, useState } from 'react'
import { FiPaperclip, FiX } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import { brazilianStates } from 'utils/brazilianStates'
import {
  bytesToMb,
  errorKeyFor,
  fetchOuvidoriaConfig,
  FileErrorCode,
  getFieldErrors,
  getFileError,
  OuvidoriaConfig,
  OuvidoriaFields,
  sendOuvidoria,
  validationKeyFor
} from 'utils/ouvidoriaUpload'

export type OuvidoriaFormProps = FlexProps & {
  channel_name: string
  contact_channel_id: string | number
}

type Status =
  | { kind: 'idle' }
  | { kind: 'sending'; percent: number }
  | { kind: 'success' }
  | { kind: 'error'; key: string }

const emptyFields: OuvidoriaFields = {
  name: '',
  email: '',
  phone: '',
  city: '',
  state: '',
  company: '',
  message: ''
}

// O token do backend vale 60 min; renova antes de vencer.
const TOKEN_REFRESH_MS = 50 * 60 * 1000

const FILE_ERROR_KEYS: Record<FileErrorCode, string> = {
  FILE_TOO_LARGE: 'fileTooLarge',
  FILE_TYPE_NOT_ALLOWED: 'fileType',
  FILE_EMPTY: 'fileEmpty'
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const OuvidoriaForm = ({
  channel_name,
  contact_channel_id,
  ...props
}: OuvidoriaFormProps) => {
  const labels = useTranslation('components')
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || ''

  const [fields, setFields] = useState<OuvidoriaFields>({ ...emptyFields })
  const [honeypot, setHoneypot] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [fileError, setFileError] = useState<FileErrorCode | null>(null)
  const [invalidFields, setInvalidFields] = useState<string[]>([])
  const [config, setConfig] = useState<OuvidoriaConfig | null>(null)
  const [configFailed, setConfigFailed] = useState(false)
  const [status, setStatus] = useState<Status>({ kind: 'idle' })

  const configLoadedAt = useRef(0)
  const mounted = useRef(true)
  const fileInput = useRef<HTMLInputElement>(null)

  useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  }, [])

  const loadConfig = useCallback(async () => {
    try {
      const loaded = await fetchOuvidoriaConfig(apiUrl, contact_channel_id)
      if (!mounted.current) return null
      configLoadedAt.current = Date.now()
      setConfig(loaded)
      setConfigFailed(false)
      return loaded
    } catch (e) {
      if (mounted.current) setConfigFailed(true)
      return null
    }
  }, [apiUrl, contact_channel_id])

  useEffect(() => {
    setFields({ ...emptyFields })
    setFile(null)
    setFileError(null)
    setInvalidFields([])
    setStatus({ kind: 'idle' })
    setConfig(null)
    loadConfig()
  }, [contact_channel_id, loadConfig])

  const required = !config?.allowAnonymous
  const marker = required ? '*' : ''
  const maxMb = config ? bytesToMb(config.maxFileBytes) : 0
  const sending = status.kind === 'sending'

  function onFilePicked(event: React.ChangeEvent<HTMLInputElement>) {
    const picked = event.target.files?.[0] ?? null
    // Permite escolher o mesmo arquivo de novo depois de removê-lo.
    event.target.value = ''
    if (!picked || !config) return

    const error = getFileError(picked, config)
    setFileError(error)
    setFile(error ? null : picked)
    setStatus({ kind: 'idle' })
  }

  function removeFile() {
    setFile(null)
    setFileError(null)
  }

  async function submit() {
    if (!config || sending) return

    if (file) {
      const error = getFileError(file, config)
      if (error) {
        setFileError(error)
        return
      }
    }

    // Todos os campos de identificação são opcionais, mas o envio precisa ter conteúdo.
    if (!file && fields.message.trim() === '') {
      setStatus({ kind: 'error', key: 'emptySubmission' })
      return
    }

    const fieldErrors = getFieldErrors(fields)
    setInvalidFields(fieldErrors.map((item) => item.field))
    if (fieldErrors.length > 0) {
      setStatus({ kind: 'error', key: validationKeyFor(fieldErrors) })
      return
    }

    setStatus({ kind: 'sending', percent: 0 })

    let current = config
    if (Date.now() - configLoadedAt.current > TOKEN_REFRESH_MS) {
      const refreshed = await loadConfig()
      if (!refreshed) {
        if (mounted.current) setStatus({ kind: 'error', key: 'network' })
        return
      }
      current = refreshed
    }

    // O backend recusa tokens com menos de N segundos: espera o restante.
    const wait =
      current.minAgeSeconds * 1000 + 250 - (Date.now() - configLoadedAt.current)
    if (wait > 0) await sleep(wait)

    const result = await sendOuvidoria({
      apiUrl,
      channelId: contact_channel_id,
      token: current.token,
      fields,
      honeypot,
      file,
      onProgress: (percent) => {
        if (mounted.current) setStatus({ kind: 'sending', percent })
      }
    })

    if (!mounted.current) return

    if (result.ok) {
      setFields({ ...emptyFields })
      setFile(null)
      setFileError(null)
      setStatus({ kind: 'success' })
      return
    }

    const key = errorKeyFor(result)
    if (result.fields) setInvalidFields(result.fields.map((item) => item.field))
    setStatus({ kind: 'error', key })
    // Token vencido ou inválido: busca outro para o usuário reenviar.
    if (key === 'tokenExpired') await loadConfig()
  }

  const setField =
    (name: keyof OuvidoriaFields) =>
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      setFields({ ...fields, [name]: event.target.value })
      setInvalidFields(invalidFields.filter((field) => field !== name))
    }

  const focusStyle = { label: { visibility: 'visible' as const } }
  const invalidStyle = { border: '1px', borderColor: 'red.100' }

  const feedback = () => {
    if (fileError) {
      return (
        <Text paddingTop="25px" color="red.100">
          {labels.t(`ouvidoriaForm.errors.${FILE_ERROR_KEYS[fileError]}`, {
            maxMb
          })}
        </Text>
      )
    }
    if (configFailed) {
      return (
        <Text paddingTop="25px" color="red.100">
          {labels.t('ouvidoriaForm.errors.config')}
        </Text>
      )
    }
    if (status.kind === 'success') {
      return (
        <Text paddingTop="30px" color="green.550">
          {labels.t('ouvidoriaForm.success')}
        </Text>
      )
    }
    if (status.kind === 'error') {
      return (
        <Text paddingTop="25px" color="red.100">
          {labels.t(`ouvidoriaForm.errors.${status.key}`, { maxMb })}
        </Text>
      )
    }
    return null
  }

  return (
    <Flex width="full" flexDirection="column" {...props}>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          submit()
        }}
      >
        {/* Honeypot: invisível e fora da navegação; bots costumam preenchê-lo. */}
        <Box position="absolute" left="-9999px" aria-hidden="true">
          <label htmlFor="ouvidoria-website">Website</label>
          <input
            id="ouvidoria-website"
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
          />
        </Box>

        <Box flex="1">
          <FormControl
            as="fieldset"
            _focusWithin={focusStyle}
            isRequired={required}
          >
            <ContactChannelFormLabel visibility="hidden" htmlFor="name">
              {marker}
              {labels.t('contactChannelForm.name')}
            </ContactChannelFormLabel>
            <FormInput
              name="name"
              value={fields.name}
              onChange={setField('name')}
              placeholder={`${marker}${labels.t('contactChannelForm.name')}`}
            />
          </FormControl>
        </Box>
        <Box mt="10px" flex="1">
          <FormControl
            as="fieldset"
            _focusWithin={focusStyle}
            isRequired={required}
          >
            <ContactChannelFormLabel visibility="hidden" htmlFor="email">
              {marker}
              {labels.t('contactChannelForm.email')}
            </ContactChannelFormLabel>
            <FormInput
              type="email"
              name="email"
              value={fields.email}
              onChange={setField('email')}
              isInvalid={invalidFields.includes('email')}
              _invalid={invalidStyle}
              placeholder={`${marker}${labels.t('contactChannelForm.email')}`}
            />
          </FormControl>
        </Box>
        <Box mt="10px" flex="1">
          <FormControl
            as="fieldset"
            _focusWithin={focusStyle}
            isRequired={required}
          >
            <ContactChannelFormLabel visibility="hidden" htmlFor="phone">
              {marker}
              {labels.t('contactChannelForm.phone')}
            </ContactChannelFormLabel>
            <FormInput
              type="tel"
              name="phone"
              value={fields.phone}
              onChange={setField('phone')}
              isInvalid={invalidFields.includes('phone')}
              _invalid={invalidStyle}
              placeholder={`${marker}${labels.t('contactChannelForm.phone')}`}
            />
          </FormControl>
        </Box>
        <Flex flexDirection={{ base: 'column', md: 'row' }} flex="1" mt="10px">
          <FormControl
            as="fieldset"
            mr="20px"
            _focusWithin={focusStyle}
            isRequired={required}
          >
            <ContactChannelFormLabel visibility="hidden" htmlFor="city">
              {marker}
              {labels.t('contactChannelForm.city')}
            </ContactChannelFormLabel>
            <FormInput
              name="city"
              value={fields.city}
              onChange={setField('city')}
              placeholder={`${marker}${labels.t('contactChannelForm.city')}`}
            />
          </FormControl>
          <FormControl
            as="fieldset"
            _focusWithin={focusStyle}
            isRequired={required}
          >
            <ContactChannelFormLabel visibility="hidden" htmlFor="state">
              {marker}
              {labels.t('contactChannelForm.uf')}
            </ContactChannelFormLabel>
            <FormSelect
              id="state"
              name="state"
              value={fields.state}
              onChange={setField('state')}
              placeholder={`${marker}${labels.t('contactChannelForm.uf')}`}
            >
              {brazilianStates.map((state) => (
                <option key={state.code} value={state.code}>
                  {state.name} [{state.code}]
                </option>
              ))}
            </FormSelect>
          </FormControl>
        </Flex>
        <Box mt="10px" flex="1">
          <FormControl as="fieldset" _focusWithin={focusStyle}>
            <ContactChannelFormLabel visibility="hidden" htmlFor="company">
              {labels.t('contactChannelForm.company')}
            </ContactChannelFormLabel>
            <FormInput
              name="company"
              value={fields.company}
              onChange={setField('company')}
              placeholder={labels.t('contactChannelForm.company')}
            />
          </FormControl>
        </Box>
        <Box mt="10px" flex="1">
          <FormControl as="fieldset">
            <ContactChannelFormLabel visibility="hidden" htmlFor="service">
              {labels.t('contactChannelForm.contactChannelType')}
            </ContactChannelFormLabel>
            <ContactChannelInfoInput value={channel_name} />
          </FormControl>
        </Box>
        <Box mt="10px" flex="1">
          <FormControl as="fieldset" _focusWithin={focusStyle}>
            <ContactChannelFormLabel visibility="hidden" htmlFor="message">
              {labels.t('contactChannelForm.message')}
            </ContactChannelFormLabel>
            <FormTextArea
              name="message"
              value={fields.message}
              onChange={setField('message')}
              placeholder={labels.t('contactChannelForm.message')}
            />
          </FormControl>
        </Box>

        <Box mt="30px" flex="1">
          <input
            ref={fileInput}
            type="file"
            hidden
            data-testid="ouvidoria-file"
            aria-label={labels.t('ouvidoriaForm.attachment')}
            accept={config?.allowedExtensions.map((ext) => `.${ext}`).join(',')}
            onChange={onFilePicked}
          />
          {file ? (
            <Flex
              alignItems="center"
              backgroundColor="brown.100"
              border="1px solid"
              borderColor="green.600"
              color="brown.400"
              px="20px"
              h="38px"
            >
              <Icon as={FiPaperclip} boxSize="20px" color="green.600" />
              <Text ml="12px" flex="1" fontSize="16px" noOfLines={1}>
                {file.name}
              </Text>
              <Button
                variant="link"
                type="button"
                color="green.600"
                disabled={sending}
                leftIcon={<Icon as={FiX} />}
                onClick={removeFile}
              >
                {labels.t('ouvidoriaForm.removeFile')}
              </Button>
            </Flex>
          ) : (
            <Flex
              as="button"
              type="button"
              w="100%"
              alignItems="center"
              backgroundColor="brown.100"
              border="1px dashed"
              borderColor="brown.250"
              color="brown.300"
              px="20px"
              h="38px"
              textAlign="left"
              disabled={!config || sending}
              opacity={!config || sending ? 0.6 : 1}
              cursor={!config || sending ? 'not-allowed' : 'pointer'}
              _hover={{ borderColor: 'green.600' }}
              _focusVisible={{
                outline: '2px solid',
                outlineColor: 'green.600'
              }}
              onClick={() => fileInput.current?.click()}
            >
              <Icon as={FiPaperclip} boxSize="20px" color="green.600" />
              <Text ml="12px" flex="1" fontSize="18px">
                {labels.t('ouvidoriaForm.attachment')}
              </Text>
              <Text fontSize="14px" fontWeight="bold" color="green.600">
                {labels.t('ouvidoriaForm.chooseFile')}
              </Text>
            </Flex>
          )}
        </Box>

        {required && (
          <Flex mt="5px">
            <Text variant={'body' as never} color="gray.300">
              *{labels.t('contactChannelForm.requireFields')}
            </Text>
          </Flex>
        )}

        <Flex mt="25px" direction={{ base: 'column', md: 'row' }}>
          <Box
            w="100%"
            h="100%"
            order={{ base: 2, md: 1 }}
            textAlign={{ base: 'center', md: 'left' }}
            role="status"
            aria-live="polite"
          >
            {sending && (
              <Box paddingTop="25px">
                <Text fontSize="14px">
                  {labels.t('ouvidoriaForm.sending', {
                    percent: status.kind === 'sending' ? status.percent : 0
                  })}
                </Text>
                <Progress
                  mt="5px"
                  size="xs"
                  colorScheme="green"
                  value={status.kind === 'sending' ? status.percent : 0}
                />
              </Box>
            )}
            {!sending && feedback()}
          </Box>

          <Button
            type="submit"
            w={{ base: '100%', lg: '240px' }}
            marginLeft={{ base: 'normal', lg: 'auto' }}
            order={{ base: 1, md: 2 }}
            disabled={sending || !config}
          >
            {labels.t('contactChannelForm.send')}
          </Button>
        </Flex>
      </form>
    </Flex>
  )
}
