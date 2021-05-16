import { Story, Meta } from '@storybook/react'
import MoneyInput, { MoneyInputProps } from './MoneyInput'

export default {
  title: 'Elements/MoneyInput',
  component: MoneyInput,
  args: {
    name: 'name',
  },
} as Meta

const Template: Story<MoneyInputProps> = (args) => <MoneyInput {...args} />

export const Normal = Template.bind({})
Normal.args = {}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}
