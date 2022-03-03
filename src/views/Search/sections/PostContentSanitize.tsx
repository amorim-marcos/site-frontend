import DOMPurify from 'dompurify'
import parser from 'react-html-parser'

import { Wrapper } from '@components/PostBody/styles'

export default function PostContentSanitize(props: { content: string }) {
  return (
    <Wrapper>
      {props.content && parser(DOMPurify.sanitize(props.content))}
    </Wrapper>
  )
}
