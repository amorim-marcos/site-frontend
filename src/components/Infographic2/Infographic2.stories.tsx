import { Story, Meta } from '@storybook/react'
import { Infographic2, Infographic2Props } from './Infographic2'

export default {
  title: 'Infographic2',
  component: Infographic2
} as Meta

const Template: Story<Infographic2Props> = (args) => <Infographic2 {...args} />

export const Default = Template.bind({})
Default.args = {
  
  iconName: 'CarbonIcon',

  titleSuperscript1Text:'Superscript1 Text',
  titleSuperscript1Display: 'flex',
  titleSuperscript1Color: 'green.600',

  titleSuperscript2Text:'Superscript2 Text',
  titleSuperscript2Display: 'flex',
  titleSuperscript2Color: 'green.800',

  content1Text: '3,2',
  content1Display: 'flex',
  content1Color: 'green.600',

  content2Text: 'millhões de tCO2e',
  content2Display: 'flex',
  content2Color: 'green.600',
}