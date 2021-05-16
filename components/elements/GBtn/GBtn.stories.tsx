import { Story, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import GBtn, { GBtnProps } from './GBtn'

export default {
  title: 'Elements/Google Btn',
  component: GBtn,
  args: {
    onClick: action('clicked as'),
  },
} as Meta

const Template: Story<GBtnProps> = (args) => <GBtn {...args} />

export const Normal = Template.bind({})
Normal.args = {}

export const Disable = Template.bind({})
Disable.args = {
  disabled: true,
}
