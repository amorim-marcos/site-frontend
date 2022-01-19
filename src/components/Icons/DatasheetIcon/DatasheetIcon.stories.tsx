import { Story, Meta } from '@storybook/react'
import { DatasheetIcon, DatasheetIconProps } from './DatasheetIcon'

export default {
  title: 'DatasheetIcon',
  component: DatasheetIcon
} as Meta

export const Default: Story<DatasheetIconProps> = (args) => <DatasheetIcon {...args} />
