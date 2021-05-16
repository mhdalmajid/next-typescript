import { Story, Meta } from '@storybook/react'
import Input, { InputProps } from './Input'

export default {
  title: 'Elements/Input',
  component: Input,
  args: {
    type: 'text',
    name: 'name',
    placeholder: 'placeholder',
  },
} as Meta

const Template: Story<InputProps> = (args) => <Input {...args} />

export const Normal = Template.bind({})
Normal.args = {}

export const Purple = Template.bind({})
Purple.args = {
  purple: true,
}

export const Green = Template.bind({})
Green.args = {
  green: true,
}
export const Gray = Template.bind({})
Gray.args = {
  gray: true,
}
export const WandIcon = Template.bind({})
WandIcon.args = {
  type: 'text',
  name: 'email',
  // placeholder: 'email',
  wand: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  type: 'text',
  name: 'email',
  // placeholder: 'email',
  disabled: true,
}

export const Error = Template.bind({})
Error.args = {
  type: 'text',
  name: 'email',
  // placeholder: 'email',
  error: 'invalid',
}

export const Group = () => (
  <>
    <Input />
    <Input error="invalid" label="email is required" />
    <Input error="invalid" label="password must be 6 char" />
    <Input />
  </>
)
