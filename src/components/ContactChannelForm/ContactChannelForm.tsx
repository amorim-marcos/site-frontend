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
import { useState } from 'react'
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
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "*Estado",
    company: "",
    message: ""
  }
  const [formData, setFormData] = useState({ ...intialFormData })
  const [status, setStatus] = useState<number|null>(null)

  async function submitForm(formData:any){
    const url = `${process.env.NEXT_PUBLIC_API_URL}/contact-channels/${contact_channel_id}/sendForm`

    const response = await fetch(url, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    const responseContent = await response.json()

    setStatus(response.status)
  }

  return (
    <Flex width="full" flexDirection="column" {...props}>
      <form>
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
              *Nome
            </ContactChannelFormLabel>
            <FormInput onChange={(e)=>{ setFormData({...formData, name: e.target.value })}} name="name" value={formData.name} placeholder="*Nome" />
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
              *E-mail
            </ContactChannelFormLabel>
            <FormInput type="email" name="email" onChange={(e)=>{ setFormData({...formData, email: e.target.value })}} value={formData.email} placeholder="*E-mail" />
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
              *Telefone
            </ContactChannelFormLabel>
            <FormInput type="phone" name="phone" onChange={(e)=>{ setFormData({...formData, phone: e.target.value })}} value={formData.phone} placeholder="*Telefone" />
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
              *Cidade
            </ContactChannelFormLabel>
            <FormInput name="city" onChange={(e)=>{ setFormData({...formData, city: e.target.value })}} value={formData.city} placeholder="*Cidade" />
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
              *Estado
            </ContactChannelFormLabel>
            <FormSelect name="state" onChange={(e)=>{ setFormData({...formData, state: e.target.value })}} value={formData.state}>
              <option disabled value="*Estado">
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
              Empresa
            </ContactChannelFormLabel>
            <FormInput name="company" onChange={(e)=>{ setFormData({...formData, company: e.target.value })}}value={formData.company} placeholder="Empresa" />
          </FormControl>
        </Box>
        <Box mt="10px" flex="1">
          <FormControl as="fieldset">
            <ContactChannelFormLabel visibility="hidden" htmlFor="service">
              Tipo de Canal de Contato
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
              Mensagem
            </ContactChannelFormLabel>
            <FormTextArea name="message" onChange={(e)=>{ setFormData({...formData, message: e.target.value })}} value={formData.message} placeholder="Mensagem"></FormTextArea>
          </FormControl>
        </Box>
        <Flex mt="5px">
          <Text variant={'body' as any} color="gray.300">
            *Campos obrigatórios
          </Text>
        </Flex>
        <Flex mt="10px">
          <Box 
            h="100%"
            display={(status === null) ? "none" : "block"}
            paddingTop="30px"
          >
            {
              (status !== 200) ? <Text color="green.550">Agradecemos a sua mensagem</Text> : <Text color="red.100">Alguma coisa aconteceu de errado. Por favor, tente novamente.</Text>
            }
          </Box>

          <Button
            w={{ base: '100%', lg: '240px' }}
            marginLeft={{ base: 'normal', lg: 'auto' }}
            onClick={() => {
              submitForm(formData)
            }}
          >
            ENVIAR
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
