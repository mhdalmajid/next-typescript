import { Story, Meta } from '@storybook/react'
import Nav, { NavProps } from './Nav'

export default {
  title: 'Elements/Nav',
  component: Nav,
} as Meta

const Template: Story<NavProps> = (args) => <Nav {...args} />

export const Normal = Template.bind({})
Normal.args = {}

export const ActiveAvatar = Template.bind({})
ActiveAvatar.args = {
  avatar: '/assets/image.jpg',
  active: 'avatar',
}

export const FlankBack = Template.bind({})
FlankBack.args = {
  active: 'FlankBack',
}

export const FlankLaunch = Template.bind({})
FlankLaunch.args = {
  active: 'FlankLaunch',
}
export const FlankPact = Template.bind({})
FlankPact.args = {
  active: 'FlankPact',
}
