import { Story, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button, { ButtonProps } from './Button'

export default {
  title: 'Elements/Button',
  component: Button,
  parameters: {
    component: Button,
    componentSubtitle: 'An Button is a .......',
    docs: {
      description: {
        component: 'Some description',
      },
    },
  },
  args: {
    onClick: action('clicked as'),
  },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Normal = Template.bind({})
Normal.args = {
  label: 'submit',
}
Normal.parameters = {
  docs: {
    description: {
      story: `This is a normal submit button`,
    },
  },
}

export const Green = Template.bind({})
Green.args = {
  label: 'Green',
  green: true,
}
export const Purple = Template.bind({})
Purple.args = {
  label: 'Green',
  purple: true,
}

export const Gray = Template.bind({})
Gray.args = {
  label: 'Green',
  gray: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Disabled',
  disabled: true,
}
