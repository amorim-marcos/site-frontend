import { Story, Meta } from '@storybook/react'
import { CustomLink, CustomLinkProps } from './CustomLink'

export default {
  title: 'CustomLink',
  component: CustomLink
} as Meta

export const Default: Story<CustomLinkProps> = (args) => <CustomLink {...args} />
