import { render, screen } from '@testing-library/react'

import PostBody from '.'

describe('<PostBody />', () => {
  it('should render the component', () => {
    const { container } = render(
      <PostBody categoryId={0} postSlug="" category="" categoryColor="" />
    )
  })
})
