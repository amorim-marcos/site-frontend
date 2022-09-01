import { Text, TextProps } from '@chakra-ui/react'
import Paragraph from '@components/Paragraph'

export type ProductTextProps = {
  content: string | Array<string>
  paragraph?: boolean
}

const TextSyle: TextProps = {
  color: 'green.900',
  width: {
    base: '95%',
    md: '50%'
  },
  zIndex: 'docked'
}

export const ProductText = ({
  content,
  paragraph = false
}: ProductTextProps) => {
  return typeof content === 'string' ? (
    <Text {...TextSyle}>
      <Paragraph>{content}</Paragraph>
    </Text>
  ) : (
    <>
      {content &&
        content.map((p, i) => (
          <Text
            key={i}
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
            <Paragraph>{p}</Paragraph>
          </Text>
        ))}
    </>
  )
}
