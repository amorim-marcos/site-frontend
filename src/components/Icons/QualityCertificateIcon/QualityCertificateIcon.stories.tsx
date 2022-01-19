import { Story, Meta } from '@storybook/react'
import { QualityCertificateIcon, QualityCertificateIconProps } from './QualityCertificateIcon'

export default {
  title: 'QualityCertificateIcon',
  component: QualityCertificateIcon
} as Meta

export const Default: Story<QualityCertificateIconProps> = (args) => <QualityCertificateIcon {...args} />
