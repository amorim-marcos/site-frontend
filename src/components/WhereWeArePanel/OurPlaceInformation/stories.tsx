import { mockObject } from 'components/WhereWeAre/WhereWeAre'
import { Story, Meta } from '@storybook/react'
import OurPlaceInformation from '.'

export default {
  title: 'OurPlaceInformation',
  component: OurPlaceInformation
} as Meta

export const Default: Story = () => (
  <OurPlaceInformation {...mockObject.ourPlaceInformation} />
)
