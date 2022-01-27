import { Story, Meta } from '@storybook/react'
import { FormInput, FormInputProps } from './FormInput'

export default {
  title: 'FormInput',
  component: FormInput
} as Meta

export const Default: Story<FormInputProps> = (args) => <FormInput {...args} />
