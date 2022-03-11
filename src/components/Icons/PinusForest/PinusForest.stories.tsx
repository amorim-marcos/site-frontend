import { Story, Meta } from '@storybook/react'
import { PinusForest, PinusForestProps } from './PinusForest'

export default {
  title: 'PinusForest',
  component: PinusForest
} as Meta

const Template: Story<PinusForestProps> = (args) => <PinusForest {...args} />

export const Default = Template.bind({})
Default.args = {
  color: '#5t6444',
  height: '22px',
  width: '22px'
}
