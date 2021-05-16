import { Story, Meta } from '@storybook/react'
import Logo, { LogoProp } from './Logo'

export default {
  title: 'Elements/Logo',
  component: Logo,
  args: {
    text: 'flank',
    larg: false,
    inline: false,
    inlineBlock: false,
    block: false,
    center: false,
  },
} as Meta

const Template: Story<LogoProp> = (args) => <Logo {...args} />

export const Normal = Template.bind({})
Normal.args = {}

export const Larg = Template.bind({})
Larg.args = {
  xl8: true,
  stroke: true,
}

export const Center = Template.bind({})
Center.args = {
  center: true,
  block: true,
}

export const Inline = Template.bind({})
Inline.args = {
  inline: true,
}

export const Block = Template.bind({})
Block.args = {
  block: true,
}

export const InlineBlock = Template.bind({})
InlineBlock.args = {
  inlineBlock: true,
}

export const CustomText = Template.bind({})
CustomText.args = {
  text: 'custom Text',
}
