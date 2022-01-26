import { Box, Flex, FormControl } from "@chakra-ui/react"
import FormInput from "@components/FormInput"
import FormSelect from "@components/FormSelect"
import FormTextArea from "@components/FormTextArea"
import ContactChannelFormLabel from "./ContactChannelFormLabel"

export type ContactChannelFormProps = {
  channel_name: string,
  service_code: string
}
export const ContactChannelForm = ({ channel_name, service_code }: ContactChannelFormProps) => {
  return (
    <Flex width="full" flexDirection="column" paddingLeft="80px" paddingRight="80px">
      <form>
        <Box flex="1">
          <FormControl
            as='fieldset'
            _focusWithin={{
              label: {
                visibility: "visible"
              }
            }}
            isRequired
          >
            <ContactChannelFormLabel visibility="hidden" htmlFor="name">*Nome</ContactChannelFormLabel>
            <FormInput name="name" placeholder="*Nome" />
          </FormControl>   
        </Box>
        <Box mt="12px" flex="1">
          <FormControl
            as='fieldset'
            _focusWithin={{
              label: {
                visibility: "visible"
              }
            }}
            isRequired
          >
            <ContactChannelFormLabel visibility="hidden" htmlFor="email">*E-mail</ContactChannelFormLabel>
            <FormInput type="email" name="email" placeholder="*E-mail" />
          </FormControl>   
        </Box>
        <Box mt="12px" flex="1">
          <FormControl
            as='fieldset'
            _focusWithin={{
              label: {
                visibility: "visible"
              }
            }}
            isRequired
          >
            <ContactChannelFormLabel visibility="hidden" htmlFor="tel">*Telefone</ContactChannelFormLabel>
            <FormInput type="tel" name="tel" placeholder="*Telefone" />
          </FormControl>   
        </Box>       
        <Flex flexDirection="row" flex="1" mt="12px">
          <FormControl
            as='fieldset'

            mr="20px"

            _focusWithin={{
              label: {
                visibility: "visible"
              }
            }}
            isRequired
          >
            <ContactChannelFormLabel visibility="hidden" htmlFor="city">*Cidade</ContactChannelFormLabel>
            <FormInput name="city" placeholder="*Cidade" />
          </FormControl>   

          <FormControl
            as='fieldset'
            _focusWithin={{
              label: {
                visibility: "visible"
              }
            }}
            isRequired
          >
            <ContactChannelFormLabel visibility="hidden" htmlFor="state">*Estado</ContactChannelFormLabel>
            <FormSelect name="state">
              <option disabled selected value="">*Estado</option>
              {brazilianStates.map((state)=> <option value={state.code}>{state.name} [{state.code}]</option>)}
            </FormSelect>
          </FormControl>   
        </Flex> 
        <Box mt="12px" flex="1">
          <FormControl
            as='fieldset'
            _focusWithin={{
              label: {
                visibility: "visible"
              }
            }}
          >
            <ContactChannelFormLabel visibility="hidden" htmlFor="enterprise">Empresa</ContactChannelFormLabel>
            <FormInput name="enterprise" placeholder="Empresa" />
          </FormControl>   
        </Box> 
        <Box mt="12px" flex="1">
          <FormControl
            as='fieldset'
            _focusWithin={{
              label: {
                visibility: "visible"
              }
            }}
          >
            <ContactChannelFormLabel visibility="hidden" htmlFor="message">Mensagem</ContactChannelFormLabel>
            <FormTextArea name="message" placeholder="Mensagem"></FormTextArea>
          </FormControl>   
        </Box> 
      </form>
    </Flex>
  )
}

const brazilianStates = [
  {
    name: "Acre",
    code: "AC"
  },
  {
    name: "Alagoas",
    code: "AC"
  },
  {
    name: "Acre",
    code: "AL"
  },
  {
    name: "Amapá",
    code: "AP"
  },
  {
    name: "Amazonas",
    code: "AM"
  },
  {
    name: "Bahia",
    code: "BA"
  },
  {
    name: "Acre",
    code: "AC"
  },
  {
    name: "Ceará",
    code: "CE"
  },
  {
    name: "Distrito Federal",
    code: "DF"
  },
  {
    name: "Espírito Santo",
    code: "ES"
  },
  {
    name: "Goiás",
    code: "GO"
  },
  {
    name: "Maranhão",
    code: "MA"
  },
  {
    name: "Mato Grosso",
    code: "MT"
  },
  {
    name: "Mato Grosso do Sul",
    code: "MS"
  },
  {
    name: "Minas Gerais",
    code: "MG"
  },
  {
    name: "Pará",
    code: "PA"
  },
  {
    name: "Paraíba",
    code: "PB"
  },
  {
    name: "Paraná",
    code: "PR"
  },
  {
    name: "Pernambuco",
    code: "PE"
  },
  {
    name: "Piaí",
    code: "PI"
  },
  {
    name: "Rio de Janeiro",
    code: "RJ"
  },
  {
    name: "Rio Grande do Norte",
    code: "RN"
  },
  {
    name: "Rio Grande do Sul",
    code: "RS"
  },
  {
    name: "Roraima",
    code: "RR"
  },
  {
    name: "Santa Catarina",
    code: "SC"
  },
  {
    name: "São Paulo",
    code: "SP"
  },
  {
    name: "Tocantins",
    code: "TO"
  } 
]
