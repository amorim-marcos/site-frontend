import { Story, Meta } from '@storybook/react'
import { Infographic, InfographicProps } from './Infographic'

export default {
  title: 'Infographic',
  component: Infographic
} as Meta

const Template: Story<InfographicProps> = (args) => <Infographic {...args} />

export const Default = Template.bind({})
Default.args = {
  titleSuperscript1Text: 'Superscript Text 1',
  titleSuperscript1Display: 'flex',
  titleSuperscript1Color: 'green.600',
  
  titleSuperscript2Text: 'Superscript Text 2',
  titleSuperscript2Display: 'flex',
  titleSuperscript2Color: 'green.400',
  
  content1Text: '+',
  content1Color: 'green.600',

  content1Display: 'flex',
  content1DisplayIcon: 'yes',
  content1IconName: 'energy',
 

  content2Text: '850',
  content2Display: 'flex',
  content2Color: 'green.800',

  content3Text: 'TEUCs / Mês',
  content3Display: 'flex',
  content3Color: 'green.800',

  content4Text: '%',
  content4Display: 'none',
  content4Color: 'green.300',

  titleSubscript1Text: 'Subscript Text with long text',
  titleSubscript1Display: 'flex',
  titleSubscript1Color: 'green.600',


}
