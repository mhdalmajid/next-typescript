import { Story, Meta } from '@storybook/react'
import Text, { TextProps } from './Text'

export default {
  title: 'Elements/Text',
  component: Text,
  args: {
    text: 'someText',

    sm: false,
    lg: false,
    xl: false,
    xl3: false,
    xl5: false,
    xl8: false,

    inline: false,
    block: false,
    inlineBlock: false,

    right: false,
    left: false,
    center: false,

    bold: false,
    semibold: false,

    stroke: false,

    gray: false,
    green: false,
    purple: false,
    yellow: false,
    red: false,
  },
} as Meta

const Template: Story<TextProps> = (args) => <Text {...args} />

export const Normal = Template.bind({})
Normal.args = {}

export const Bold = Template.bind({})
Bold.args = {
  bold: true,
}

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

export const CenterWithBlock = Template.bind({})
CenterWithBlock.args = {
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
