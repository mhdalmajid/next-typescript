import { Story, Meta } from '@storybook/react'
import { Launch } from './Launch'

export default {
  title: 'Pages/Launch',
  component: Launch,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Normal = () => <Launch />
