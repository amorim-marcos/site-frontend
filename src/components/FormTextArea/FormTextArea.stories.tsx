import { Story, Meta } from '@storybook/react'
import { FormTextArea, FormTextAreaProps } from './FormTextArea'

export default {
  title: 'FormTextArea',
  component: FormTextArea
} as Meta

export const Default: Story<FormTextAreaProps> = (args) => <FormTextArea {...args} />
