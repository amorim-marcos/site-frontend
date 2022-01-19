import { Text, TextProps } from '@chakra-ui/react'

export type ProductTextProps = {
  content: string | Array<string>
  paragraph?: boolean
}

const TextSyle: TextProps = {
  fontSize: {
    base: '7px',
    sm: '8px',
    md: '11px',
    lg: '14px',
    xl: '17px',
    '2xl': '20px'
  },
  color: 'green.900',
  width: '43%',
  zIndex: 'docked',
  marginBottom: '80px'
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
            i === content.length - 1 ? '80px' : paragraph ? '50px' : '0px'
          }
        >
          {p}
        </Text>
      ))}
    </>
  )
}
