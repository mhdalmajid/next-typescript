import { Story, Meta } from '@storybook/react'
import { Flankback } from './Flankback'

export default {
  title: 'Pages/Flankback',
  component: Flankback,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Normal = () => <Flankback />
