import { Story, Meta } from '@storybook/react'
import { CustomModal, CustomModalProps } from './CustomModal'

export default {
  title: 'CustomModal',
  component: CustomModal
} as Meta

export const Default: Story<CustomModalProps> = (args) => (
  <CustomModal {...args} />
)
