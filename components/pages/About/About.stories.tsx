import { Meta } from '@storybook/react'
import { About } from './About'

export default {
  title: 'Pages/About',
  component: About,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Normal = () => <About />
