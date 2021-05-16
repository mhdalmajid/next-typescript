import { Story, Meta } from '@storybook/react'
import { Profile } from './Profile'

export default {
  title: 'Pages/Profile',
  component: Profile,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Normal = () => <Profile />
