import { Story, Meta } from '@storybook/react'
import Avatar, { AvatarProps } from './Avatar'

export default {
  title: 'Elements/Avatar',
  component: Avatar,
} as Meta

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />

export const Normal = Template.bind({})
Normal.args = {}

export const Purple = Template.bind({})
Purple.args = {
  purple: true,
  large: true,
}

export const Gray = Template.bind({})
Gray.args = {
  gray: true,
  large: true,
}

export const Green = Template.bind({})
Green.args = {
  green: true,
  large: true,
}

export const Small = Template.bind({})
Small.args = {
  small: true,
  gray: true,
}

export const SmallWithPhoto = Template.bind({})
SmallWithPhoto.args = {
  small: true,
  src: '/assets/image.jpg',
  green: true,
}

export const smallActive = Template.bind({})
smallActive.args = {
  small: true,
  active: true,
  green: true,
}

export const Large = Template.bind({})
Large.args = {
  large: true,
}

export const LargeWithPhoto = Template.bind({})
LargeWithPhoto.args = {
  large: true,
  src: '/assets/image.jpg',
}
