import { Story, Meta } from '@storybook/react'
import { HeaderTitle, HeaderTitleProps } from './HeaderTitle'

export default {
  title: 'HeaderTitle',
  component: HeaderTitle
} as Meta

export const Default: Story<HeaderTitleProps> = (args) => <HeaderTitle {...args} />
