import { Story, Meta } from '@storybook/react'
import { Signup } from './Signup'

export default {
  title: 'Pages/Signup',
  component: Signup,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Normal = () => <Signup />
