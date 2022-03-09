import { Story, Meta } from '@storybook/react'
import { AppError, AppErrorProps } from './AppError'

export default {
  title: 'AppError',
  component: AppError
} as Meta

export const Default: Story<AppErrorProps> = (args) => <AppError {...args} />
