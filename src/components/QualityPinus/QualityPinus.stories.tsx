import { Story, Meta } from '@storybook/react'
import { QualityPinus, QualityPinusProps } from './QualityPinus'

export default {
  title: 'QualityPinus',
  component: QualityPinus
} as Meta

export const Default: Story<QualityPinusProps> = () => <QualityPinus />
