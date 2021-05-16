import { Story, Meta } from '@storybook/react'
import Title, { TitleProps } from './Title'

export default {
  title: 'Elements/Title',
  component: Title,
} as Meta

const Template: Story<TitleProps> = (args) => <Title {...args} />

export const Normal = Template.bind({})
Normal.args = {
  text: 'text',
}

export const CustomText = Template.bind({})
CustomText.args = {
  text: '@custom',
}
