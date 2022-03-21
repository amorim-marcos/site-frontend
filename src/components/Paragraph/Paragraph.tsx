import parser from 'react-html-parser'
export type ParagraphProps = {
  children: string
}

export const Paragraph = (props: ParagraphProps) => {
  return props.children.replaceAll ? (
    <>{parser(props.children.replaceAll('\n', '<br>'))}</>
  ) : (
    <p></p>
  )
}
