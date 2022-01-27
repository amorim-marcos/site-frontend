import { Story, Meta } from '@storybook/react'
import { FormSelect, FormSelectProps } from './FormSelect'

export default {
  title: 'FormSelect',
  component: FormSelect
} as Meta

export const Default: Story<FormSelectProps> = (args) => <FormSelect {...args} />
