import { Story, Meta } from '@storybook/react'
import { EnergyIcon, EnergyIconProps } from './EnergyIcon'

export default {
  title: 'EnergyIcon',
  component: EnergyIcon
} as Meta

export const Default: Story<EnergyIconProps> = (args) => <EnergyIcon {...args} />
