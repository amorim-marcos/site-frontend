import { Story, Meta } from '@storybook/react'
import { Main, MainProps } from './Main'

export default {
  title: 'Main',
  component: Main
} as Meta

export const Default: Story<MainProps> = (args) => <Main {...args} />
