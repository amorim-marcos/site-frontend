import { Story, Meta } from '@storybook/react'
import { PlusInfoTable, PlusInfoTableProps } from './PlusInfoTable'

export default {
  title: 'PlusInfoTable',
  component: PlusInfoTable
} as Meta

export const Default: Story<PlusInfoTableProps> = (args) => <PlusInfoTable {...args} />
