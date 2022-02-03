import { Story, Meta } from '@storybook/react'
import { PostBody, PostBodyProps } from './PostBody'

export default {
  title: 'PostBody',
  component: PostBody
} as Meta

export const Default: Story<PostBodyProps> = (args) => <PostBody {...args} />
