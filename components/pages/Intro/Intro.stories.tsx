import { Story, Meta } from '@storybook/react'
import { Intro } from './Intro'

export default {
  title: 'Pages/Intro',
  component: Intro,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Normal = () => <Intro />
