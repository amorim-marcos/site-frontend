import { Box } from '@chakra-ui/react'

import Pagebar from '@components/Pagebar'
import { Intro, Videos, Downloads, Connect } from './sections'

export default function CanalBNK() {
  return (
    <Box>
      <Pagebar
        paths={[
          {
            title: 'Canal Bnk',
            url: '/canal-bnk'
          }
        ]}
      />

      <Intro />
      <Videos />
      <Downloads />
      <Connect />
    </Box>
  )
}
