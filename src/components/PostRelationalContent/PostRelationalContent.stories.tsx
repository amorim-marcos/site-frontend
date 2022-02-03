import { Story, Meta } from '@storybook/react'
import { PostRelationalContent, PostRelationalContentProps } from './PostRelationalContent'

export default {
  title: 'PostRelationalContent',
  component: PostRelationalContent
} as Meta

export const Default: Story<PostRelationalContentProps> = (args) => <PostRelationalContent {...args} />
