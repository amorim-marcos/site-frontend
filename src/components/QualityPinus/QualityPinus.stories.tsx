import { Story, Meta } from '@storybook/react'
import { QualityPinus } from './QualityPinus'

export default {
  title: 'QualityPinus',
  component: QualityPinus
} as Meta

export const Default: Story = () => <QualityPinus items={[]} />
