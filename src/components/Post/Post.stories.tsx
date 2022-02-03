import { Story, Meta } from '@storybook/react'
import { Post, PostProps } from './Post'

export default {
  title: 'Post',
  component: Post
} as Meta

export const Default: Story<PostProps> = (args) => <Post {...args} />
