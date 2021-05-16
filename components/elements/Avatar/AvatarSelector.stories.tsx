import { Story, Meta } from '@storybook/react'
import AvatarPicker, { AvatarPickerProps } from './AvatarPicker'

export default {
  title: 'Elements/AvatarPicker',
  component: AvatarPicker,
} as Meta

const Template: Story<AvatarPickerProps> = (args) => <AvatarPicker {...args} />

export const Normal = Template.bind({})
Normal.args = {}
