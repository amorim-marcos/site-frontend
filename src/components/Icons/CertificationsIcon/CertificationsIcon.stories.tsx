import { Story, Meta } from '@storybook/react'
import { CertificationsIcon, CertificationsIconProps } from './CertificationsIcon'

export default {
  title: 'CertificationsIcon',
  component: CertificationsIcon
} as Meta

const Template: Story<CertificationsIconProps> = (args) => <CertificationsIcon {...args} />

export const Default = Template.bind({})
Default.args = {
  stroke1: '#59993f',
  stroke2: '#144835',
  height: '50',
  width: '30'
}