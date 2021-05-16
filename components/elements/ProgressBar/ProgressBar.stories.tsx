import { Story, Meta } from '@storybook/react'
import ProgressBar, { ProgressBarProps } from './ProgressBar'

export default {
  title: 'Elements/ProgressBar',
  component: ProgressBar,
} as Meta

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />

export const Normal = Template.bind({})
Normal.args = {
  percent: '80',
}

export const P100 = Template.bind({})
P100.args = {
  percent: '100',
}
export const P0 = Template.bind({})
P0.args = {
  percent: '0',
}

export const Group = () => (
  <>
    <ProgressBar percent="0" />
    <br />
    <ProgressBar percent="5" />
    <br />
    <ProgressBar percent="10" />
    <br />
    <ProgressBar percent="15" />
    <br />
    <ProgressBar percent="20" />
    <br />
    <ProgressBar percent="50" />
    <br />
    <ProgressBar percent="70" />
    <br />
    <ProgressBar percent="75" />
    <br />
    <ProgressBar percent="80" />
    <br />
    <ProgressBar percent="85" />
    <br />
    <ProgressBar percent="90" />
    <br />
    <ProgressBar percent="95" />
    <br />
    <ProgressBar percent="100" />
  </>
)
