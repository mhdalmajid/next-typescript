import { Story, Meta } from '@storybook/react'
import Anchor, { AnchorProps } from './Anchor'

export default {
  title: 'Elements/Anchor',
  component: Anchor,
} as Meta

const Template: Story<AnchorProps> = (args) => <Anchor {...args} />

export const Normal = Template.bind({})
Normal.args = {
  text: 'forgot?',
  gray: true,
  sm: true,
  underline: true,
  block: true,
  center: true,
}

export const Uppercase = Template.bind({})
Uppercase.args = {
  text: 'sing up',
  uppercase: true,
  gray: true,
  sm: true,
  underline: true,
  block: true,
  center: true,
}

export const Patreon = Template.bind({})
Patreon.args = {
  text: 'patreon',
  uppercase: true,
  white: true,
  xl: true,
  center: true,
  block: true,
  className: 'mt-2 tracking-widest',
}
