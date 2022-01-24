import { Story, Meta } from '@storybook/react'
import { TecaInfo, TecaInfoProps } from './TecaInfo'

export default {
  title: 'TecaInfo',
  component: TecaInfo
} as Meta

export const Default: Story<TecaInfoProps> = (args) => <TecaInfo {...args} />
