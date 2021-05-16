import { Story, Meta } from '@storybook/react'
import { Signin } from './Signin'

export default {
  title: 'Pages/Signin',
  component: Signin,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Normal = () => <Signin />
