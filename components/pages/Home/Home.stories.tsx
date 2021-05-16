import { Meta } from '@storybook/react'
import { Home } from './Home'

export default {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Normal = () => <Home callback={() => false} />
