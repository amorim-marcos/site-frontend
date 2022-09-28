import {
  Box,
  Button,
  Flex,
  FlexProps,
  FormControl,
  Input,
  Text
} from '@chakra-ui/react'
import FormInput from '@components/FormInput'
import FormSelect from '@components/FormSelect'
import FormTextArea from '@components/FormTextArea'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ContactChannelFormLabel from './ContactChannelFormLabel'
import ContactChannelInfoInput from './ContactChannelInfoInput'

export type ContactChannelFormProps = FlexProps & {
  channel_name: string
  contact_channel_id: string | number
}

export const ContactChannelForm = ({
  channel_name,
  contact_channel_id,
  ...props
}: ContactChannelFormProps) => {
  const intialFormData = {
    name: '',
    email: '',
    phone: '',
    city: '',
    state: '*Estado',
    company: '',
    message: ''
  }
  const [formData, setFormData] = useState({ ...intialFormData })
  const [status, setStatus] = useState<number | null>(null)
  const [sendButtonEnabled, setSendButtonEnabled] = useState<Boolean>(true)

  async function submitForm(
    formData: any,
    contact_channel_id: string | number
  ) {
    try{
      const url = `${process.env.NEXT_PUBLIC_API_URL}/contact-channels/${contact_channel_id}/sendForm`

      // Disable send button to avoid duplicates.
      setSendButtonEnabled(false)
  
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
  
      // Reset form
      setFormData({...intialFormData})
      setStatus(response.status)
  
      // Enable send button
      setSendButtonEnabled(true)
    }catch(e){
      setSendButtonEnabled(true)
      console.log(e)
    }
  }

  useEffect(() => {
    setFormData({ ...intialFormData })
    setStatus(null)
  }, [contact_channel_id])

  const componentsLabels = useTranslation('components')

  return (
    <Flex width="full" flexDirection="column" {...props}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          submitForm(formData, contact_channel_id)
        }}
      >
        <Box flex="1">
          <FormControl
            as="fieldset"
            _focusWithin={{
              label: {
                visibility: 'visible'
              }
            }}
            isRequired
          >
            <ContactChannelFormLabel visibility="hidden" htmlFor="name">
              *{componentsLabels.t('contactChannelForm.name')}
            </ContactChannelFormLabel>
            <FormInput
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value })
              }}
              name="name"
              value={formData.name}
              placeholder={`*${componentsLabels.t('contactChannelForm.name')}`}
            />
          </FormControl>
        </Box>
        <Box mt="10px" flex="1">
          <FormControl
            as="fieldset"
            _focusWithin={{
              label: {
                visibility: 'visible'
              }
            }}
            isRequired
          >
            <ContactChannelFormLabel visibility="hidden" htmlFor="email">
              *{componentsLabels.t('contactChannelForm.email')}
            </ContactChannelFormLabel>
            <FormInput
              type="email"
              name="email"
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value })
              }}
              value={formData.email}
              placeholder={`*${componentsLabels.t('contactChannelForm.email')}`}
            />
          </FormControl>
        </Box>
        <Box mt="10px" flex="1">
          <FormControl
            as="fieldset"
            _focusWithin={{
              label: {
                visibility: 'visible'
              }
            }}
            isRequired
          >
            <ContactChannelFormLabel visibility="hidden" htmlFor="phone">
              *{componentsLabels.t('contactChannelForm.phone')}
            </ContactChannelFormLabel>
            <FormInput
              type="phone"
              name="phone"
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value })
              }}
              value={formData.phone}
              placeholder={`*${componentsLabels.t('contactChannelForm.phone')}`}
            />
          </FormControl>
        </Box>
        <Flex flexDirection={{ base: 'column', md: 'row' }} flex="1" mt="10px">
          <FormControl
            as="fieldset"
            mr="20px"
            _focusWithin={{
              label: {
                visibility: 'visible'
              }
            }}
            isRequired
          >
            <ContactChannelFormLabel visibility="hidden" htmlFor="city">
              *{componentsLabels.t('contactChannelForm.city')}
            </ContactChannelFormLabel>
            <FormInput
              name="city"
              onChange={(e) => {
                setFormData({ ...formData, city: e.target.value })
              }}
              value={formData.city}
              placeholder={`*${componentsLabels.t('contactChannelForm.city')}`}
            />
          </FormControl>

          <FormControl
            as="fieldset"
            _focusWithin={{
              label: {
                visibility: 'visible'
              }
            }}
            isRequired
          >
            <ContactChannelFormLabel visibility="hidden" htmlFor="state">
              *{componentsLabels.t('contactChannelForm.uf')}
            </ContactChannelFormLabel>
            <FormSelect
              name="state"
              onChange={(e) => {
                setFormData({ ...formData, state: e.target.value })
              }}
              value={formData.state}
            >
              <option
                disabled
                value={`*${componentsLabels.t('contactChannelForm.uf')}`}
              >
                *Estado
              </option>
              {brazilianStates.map((state, i) => (
                <option key={i} value={state.code}>
                  {state.name} [{state.code}]
                </option>
              ))}
            </FormSelect>
          </FormControl>
        </Flex>
        <Box mt="10px" flex="1">
          <FormControl
            as="fieldset"
            _focusWithin={{
              label: {
                visibility: 'visible'
              }
            }}
          >
            <ContactChannelFormLabel visibility="hidden" htmlFor="company">
              {componentsLabels.t('contactChannelForm.company')}
            </ContactChannelFormLabel>
            <FormInput
              name="company"
              onChange={(e) => {
                setFormData({ ...formData, company: e.target.value })
              }}
              value={formData.company}
              placeholder={componentsLabels.t('contactChannelForm.company')}
            />
          </FormControl>
        </Box>
        <Box mt="10px" flex="1">
          <FormControl as="fieldset">
            <ContactChannelFormLabel visibility="hidden" htmlFor="service">
              {componentsLabels.t('contactChannelForm.contactChannelType')}
            </ContactChannelFormLabel>
            <ContactChannelInfoInput value={channel_name} />
          </FormControl>
        </Box>
        <Box mt="10px" flex="1">
          <FormControl
            as="fieldset"
            _focusWithin={{
              label: {
                visibility: 'visible'
              }
            }}
          >
            <ContactChannelFormLabel visibility="hidden" htmlFor="message">
              {componentsLabels.t('contactChannelForm.message')}
            </ContactChannelFormLabel>
            <FormTextArea
              name="message"
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value })
              }}
              value={formData.message}
              placeholder={componentsLabels.t('contactChannelForm.message')}
            ></FormTextArea>
          </FormControl>
        </Box>
        <Flex mt="5px">
          <Text variant={'body' as any} color="gray.300">
            *{componentsLabels.t('contactChannelForm.requireFields')}
          </Text>
        </Flex>
        <Flex mt="10px" direction={{ base: 'column', md: 'row' }}>
          <Box
            w="100%"
            h="100%"
            display={status === null ? 'none' : 'block'}
            order={{ base: 2, md: 1 }}
            textAlign={{ base: 'center', md: 'left' }}
          >
            {status === 200 ? (
              <Text paddingTop="30px" color="green.550">
                {componentsLabels.t('contactChannelForm.messageAcknowledgment')}
              </Text>
            ) : (
              <Text paddingTop="25px" color="red.100">
                {componentsLabels.t('contactChannelForm.errorMessage')}
              </Text>
            )}
          </Box>

          <Button
            type="submit"
            w={{ base: '100%', lg: '240px' }}
            marginLeft={{ base: 'normal', lg: 'auto' }}
            order={{ base: 1, md: 2 }}
            disabled={!sendButtonEnabled}
          >
            {componentsLabels.t('contactChannelForm.send')}
          </Button>
        </Flex>
      </form>
    </Flex>
  )
}

const brazilianStates = [
  {
    name: 'Acre',
    code: 'AC'
  },
  {
    name: 'Alagoas',
    code: 'AC'
  },
  {
    name: 'Acre',
    code: 'AL'
  },
  {
    name: 'Amapá',
    code: 'AP'
  },
  {
    name: 'Amazonas',
    code: 'AM'
  },
  {
    name: 'Bahia',
    code: 'BA'
  },
  {
    name: 'Acre',
    code: 'AC'
  },
  {
    name: 'Ceará',
    code: 'CE'
  },
  {
    name: 'Distrito Federal',
    code: 'DF'
  },
  {
    name: 'Espírito Santo',
    code: 'ES'
  },
  {
    name: 'Goiás',
    code: 'GO'
  },
  {
    name: 'Maranhão',
    code: 'MA'
  },
  {
    name: 'Mato Grosso',
    code: 'MT'
  },
  {
    name: 'Mato Grosso do Sul',
    code: 'MS'
  },
  {
    name: 'Minas Gerais',
    code: 'MG'
  },
  {
    name: 'Pará',
    code: 'PA'
  },
  {
    name: 'Paraíba',
    code: 'PB'
  },
  {
    name: 'Paraná',
    code: 'PR'
  },
  {
    name: 'Pernambuco',
    code: 'PE'
  },
  {
    name: 'Piaí',
    code: 'PI'
  },
  {
    name: 'Rio de Janeiro',
    code: 'RJ'
  },
  {
    name: 'Rio Grande do Norte',
    code: 'RN'
  },
  {
    name: 'Rio Grande do Sul',
    code: 'RS'
  },
  {
    name: 'Roraima',
    code: 'RR'
  },
  {
    name: 'Santa Catarina',
    code: 'SC'
  },
  {
    name: 'São Paulo',
    code: 'SP'
  },
  {
    name: 'Tocantins',
    code: 'TO'
  }
]
