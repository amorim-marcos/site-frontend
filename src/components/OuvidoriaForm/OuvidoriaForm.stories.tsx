import { Story, Meta } from '@storybook/react'
import { OuvidoriaForm, OuvidoriaFormProps } from './OuvidoriaForm'

export default {
  title: 'OuvidoriaForm',
  component: OuvidoriaForm,
  args: {
    channel_name: 'Ouvidoria',
    contact_channel_id: 1
  }
} as Meta

// Precisa do backend com OUVIDORIA_ENABLED=true e o canal com flow = ouvidoria.
export const Default: Story<OuvidoriaFormProps> = (args) => (
  <OuvidoriaForm {...args} />
)
