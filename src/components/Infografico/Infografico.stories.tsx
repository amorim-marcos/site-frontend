import { Story, Meta } from '@storybook/react'
import { Infografico, InfograficoProps } from './Infografico'

export default {
  title: 'Infografico',
  component: Infografico
} as Meta

export const Default: Story<InfograficoProps> = (args) => <Infografico {...args} />
