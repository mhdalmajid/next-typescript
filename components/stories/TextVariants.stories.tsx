import { Story, Meta } from '@storybook/react'
import { Text, Span } from '../elements'
import { TextProps } from '../elements/Text/Text'

export default {
  title: 'Variants/Text',
  component: Text,
  args: {
    text: 'someText',

    sm: false,
    lg: false,
    xl: false,
    xl3: false,
    xl5: false,

    inline: false,
    inlineBlock: false,

    right: false,
    left: false,
    center: false,

    bold: false,

    gray: false,
    green: false,
    purple: false,
  },
} as Meta

const Template: Story<TextProps> = (args) => <Text {...args} />

// Will be used for signup, login and lunch pages
export const ConfirmationLG = Template.bind({})
ConfirmationLG.args = {
  text: `flankenstains, it's boogie time`,
  lg: true,
  center: true,
  semibold: true,
  purple: true,
}

// Will be used for confirmation pages
export const ConfirmationXL = Template.bind({})
ConfirmationXL.args = {
  text: 'Sure you want to delete your flank with @griselda?',
  xl: true,
  center: true,
  semibold: true,
  purple: true,
}

// Will be used for back and pact pages
export const DirectionLabel = Template.bind({})
DirectionLabel.args = {
  text: 'to:',
  lg: true,
  left: true,
  semibold: true,
  gray: true,
}

// Will be used for pact page
export const HistoryMessageSM = Template.bind({})
HistoryMessageSM.args = {
  text: '30th March 2021',
  sm: true,
  left: true,
  gray: true,
}

// Will be used for pact page
export const HistoryMessageLG = Template.bind({})
HistoryMessageLG.args = {
  text: '@griselda just pledged £20',
  lg: true,
  left: true,
  gray: true,
}

// Will be used for back and confirmation pages
export const InfoTitle = Template.bind({})
InfoTitle.args = {
  text: 'tracking flanks',
  lg: true,
  center: true,
  gray: true,
}

// Will be used for back and confirmation pages
export const LoanTitle = () => (
  <>
    <Text left purple xl5>
      griselda witch
    </Text>
    <Text left purple xl5>
      <Span bold text="+ " />
      me
    </Text>
  </>
)

// Will be used for signup, login and filled profile pages
export const Paragraph = Template.bind({})
Paragraph.args = {
  text: 'Login with your email',
  sm: true,
  center: true,
  gray: true,
}

// Will be used for back page
export const Speed = Template.bind({})
Speed.args = {
  text: 'lightspeed',
  lg: true,
  right: true,
  semibold: true,
  green: true,
}

// Will be used for homepage
export const Subtitle = Template.bind({})
Subtitle.args = {
  text: 'so we can just be friends',
  xl3: true,
  center: true,
  semibold: true,
  green: true,
  stroke: true,
}

// Will be used for back and pact pages
export const Username = Template.bind({})
Username.args = {
  text: '@moegogo',
  lg: true,
  left: true,
  semibold: true,
  purple: true,
}

// Will be used for back and pact pages
export const WhyWeExist = Template.bind({})
WhyWeExist.args = {
  text: 'why we exist',
  lg: true,
  center: true,
  green: true,
}

// Will be used for back and confirmation pages
export const HomeLong = () => (
  <>
    <Text left green xl3 stroke>
      flank is for friends who can count on each other
      <Span yellow> like when you borrow 5 for chips at midnight or </Span>
      <Span red>when you lend a friend 40 coz sister owes them 80</Span>
    </Text>
    <Text left green xl3 stroke>
      flank is for giving without losing again
    </Text>
    <Text left yellow xl3 stroke>
      we flank so we can just be friends
    </Text>
  </>
)
