import { Center, Text, Box, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { LanguageBtn } from './LanguageBtn/LanguageBtn'

export const LanguageSelector = () => {
  const [open, setOpen] = useState(false)

  return (
    <Center
      cursor="pointer"
      position="relative"
      zIndex="dropdown"
      borderBottom={open ? '5px solid' : ''}
      borderBottomColor={open ? 'green.600' : ''}
      onClick={() => setOpen(!open)}
      transition="0.2s"
    >
      <Box marginRight="15px">
        <svg xmlns="http://www.w3.org/2000/svg" width="25.849" height="25.886">
          <g data-name="Grupo 3">
            <g
              data-name="Grupo 2"
              fill="none"
              stroke="#59993f"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                data-name="Caminho 1"
                d="M12.925.535a12.424 12.424 0 1 0 12.424 12.424A12.438 12.438 0 0 0 12.925.535Z"
              />
              <g data-name="Grupo 1">
                <path
                  data-name="Caminho 2"
                  d="M4.576 3.77S2.531 6.25 3.208 8.827c.849 3.224 5.017 3.793 6.364 4.37.153.066.888.529.759 1-.15.549-1.275 1-1.036 1.892a9.062 9.062 0 0 0 1.19 1.232c.933.886.544 2.947-.4 4.536-.488.82.431 1.7 1.323.637a14.057 14.057 0 0 1 2.492-2.561c.959-.533 2.559-1.066 3.306-2.293s1.035-2.892-.107-3.04-1.547.533-1.973 0-.3-1.175-1.28-1.814a3.873 3.873 0 0 0-2.318-.475s-.6-.342-1.224-.777c-.871-.6-2.855-.994-2.774-1.828.061-.624.555-1.134 1.623-.762s2.02-1.032 2.4-2.24 1.828-.514 2.362-1.368-1.082-1.191-1.936-1.138-1.133-1.122-1.647-1c-.634.153-.964 1.083-1.808.839-.938-.271-.742-2.218.209-2.771"
                />
                <path
                  data-name="Caminho 3"
                  d="M20.979 3.509a6.888 6.888 0 0 0-.5 1.983c-.056 1.046.906.95 1.759 1.751s-.7 1.6-.4 3.367a2.883 2.883 0 0 0 2.08 2.24 4.014 4.014 0 0 0 1.362.113"
                />
                <path
                  data-name="Caminho 4"
                  d="M12.926.535a2.82 2.82 0 0 1 2.423 1.79c.127.452.435 1.482 1.287 1.652 1.088.22 2.65-1.418 1.225-2.42"
                />
              </g>
            </g>
          </g>
        </svg>
      </Box>
      <Text color="#FFF">Português</Text>

      <Box
        transition="0.3s"
        transform={open ? 'rotate(180deg)' : ''}
        marginLeft="15px"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="10.858" height="6.225">
          <path d="M0 0h10.858L5.429 6.225Z" fill="#59993f" />
        </svg>
      </Box>

      {open ? (
        <Flex
          width="100%"
          flexDir="column"
          position="absolute"
          top="calc(100% + 5px)"
        >
          <LanguageBtn title="English" />
          <LanguageBtn title="Español" />
          <LanguageBtn title="Mandarim" />
        </Flex>
      ) : null}
    </Center>
  )
}
