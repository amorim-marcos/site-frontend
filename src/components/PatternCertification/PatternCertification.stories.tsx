import { Story, Meta } from '@storybook/react'
import { PatternCertification, PatternCertificationProps } from './PatternCertification'

export default {
  title: 'PatternCertification',
  component: PatternCertification
} as Meta

export const Default: Story<PatternCertificationProps> = (args) => <PatternCertification {...args} />
