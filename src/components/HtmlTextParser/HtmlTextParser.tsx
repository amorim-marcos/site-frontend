import DOMPurify from 'dompurify'
import parser from 'react-html-parser'
export type HtmlTextParserProps = {
  children?: string
}

export const HtmlTextParser = (props: HtmlTextParserProps) => {
  return props.children && props.children.replaceAll ? (
    <>{parser(DOMPurify.sanitize(props.children.replaceAll('\n', '<br>')))}</>
  ) : (
    <p></p>
  )
}
