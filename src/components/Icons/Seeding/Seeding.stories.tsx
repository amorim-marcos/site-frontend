import { Story, Meta } from '@storybook/react'
import { Seeding, SeedingProps } from './Seeding'

export default {
  title: 'Seeding',
  component: Seeding
} as Meta

const Template: Story<SeedingProps> = (args) => <Seeding {...args} />

export const Default = Template.bind({})
Default.args = {
  color: '#5t6444',
  height: '22px',
  width: '22px'
}
