import { Box } from '@chakra-ui/react'
import Main from '@components/Main'
import Pagebar from '@components/Pagebar'
import WhereWeAre from '@components/WhereWeAre'

export const About = () => {
  return (
    <Box>
      <Pagebar
        paths={[
          {
            title: 'Somos BERNECK®',
            url: 'somos-berneck'
          }
        ]}
      />

      <Main title="Somos Berneck" />

      {/* <WhereWeAre /> */}
    </Box>
  )
}
