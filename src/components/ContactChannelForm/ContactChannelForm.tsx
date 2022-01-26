import { Box, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react"
import FormInput from "@components/FormInput"

export type ContactChannelFormProps = {
  channel_name: string,
  service_code: string
}
export const ContactChannelForm = ({ channel_name, service_code }: ContactChannelFormProps) => {
  return (
    <Flex width="full" flexDirection="column" paddingLeft="80px" paddingRight="80px">
      <form>
        <Box flex="1">
          <FormControl>
            <FormLabel>*Nome</FormLabel>
            <FormInput placeholder="*Nome" />
          </FormControl>   
        </Box>
      </form>
    </Flex>
  )
}
