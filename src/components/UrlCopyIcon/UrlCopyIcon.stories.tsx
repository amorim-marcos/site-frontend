import { Story, Meta } from '@storybook/react'
import { UrlCopyIcon, UrlCopyIconProps } from './UrlCopyIcon'

export default {
  title: 'UrlCopyIcon',
  component: UrlCopyIcon
} as Meta

export const Default: Story<UrlCopyIconProps> = (args) => <UrlCopyIcon {...args} />
