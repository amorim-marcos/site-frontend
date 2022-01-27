import { Story, Meta } from '@storybook/react'
import { SponsoredProjects, SponsoredProjectsProps } from './SponsoredProjects'

export default {
  title: 'SponsoredProjects',
  component: SponsoredProjects
} as Meta

export const Default: Story<SponsoredProjectsProps> = (args) => <SponsoredProjects {...args} />
