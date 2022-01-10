import { Story, Meta } from '@storybook/react'
import { PageSection, PageSectionProps } from './PageSection'

export default {
  title: 'PageSection',
  component: PageSection
} as Meta

export const Default: Story<PageSectionProps> = (args) => <PageSection {...args} />
