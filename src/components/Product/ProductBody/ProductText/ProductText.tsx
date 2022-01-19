import { Text, TextProps } from '@chakra-ui/react'

export type ProductTextProps = {
  content: string | Array<string>
  paragraph?: boolean
}

const TextSyle: TextProps = {
  fontSize: {
    base: '14px',
    sm: '8px',
    md: '11px',
    lg: '14px',
    xl: '17px',
    '2xl': '20px'
  },
  color: 'green.900',
  width: {
    base: '100%',
    sm: '43%'
  },
  zIndex: 'docked'
}

export const ProductText = ({
  content,
  paragraph = false
}: ProductTextProps) => {
  return typeof content === 'string' ? (
    <Text {...TextSyle}>{content}</Text>
  ) : (
    <>
      {content?.map((p, i) => (
        <Text
          key={p}
          {...TextSyle}
          marginBottom={
            i !== content.length - 1 && paragraph
              ? {
                  base: '7px',
                  sm: '10px',
                  md: '20px',
                  lg: '30px',
                  xl: '40px',
                  '2xl': '50px'
                }
              : '0px'
          }
        >
          {p}
        </Text>
      ))}
    </>
  )
}
