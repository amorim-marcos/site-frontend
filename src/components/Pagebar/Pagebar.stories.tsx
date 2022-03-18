import { Story, Meta } from '@storybook/react'
import { Pagebar, PagebarProps } from './Pagebar'

export default {
  title: 'Pagebar',
  component: Pagebar
} as Meta

const Template: Story<PagebarProps> = (args) => <Pagebar {...args} />

export const Default = Template.bind({})
Default.args = {
  paths: [
    {
      title: 'Canal BNK',
      url: '/'
    },
    {
      title: 'Inspiração sob medida',
      url: '/'
    }
  ]
}
