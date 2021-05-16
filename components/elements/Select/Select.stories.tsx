import { Story, Meta } from '@storybook/react'
import Select, { SelectProps } from './Select'

export default {
  title: 'Elements/Select',
  component: Select,
} as Meta

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

const Template: Story<SelectProps> = (args) => <Select {...args} />

export const Normal = Template.bind({})
Normal.args = {
  options,
  defaultValue: { value: 'defaultValue', label: 'defaultValue' },
  getValue: (value) => console.log(value),
}
