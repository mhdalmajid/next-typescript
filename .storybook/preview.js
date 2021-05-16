import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
import { addDecorator } from '@storybook/react'
import * as nextImage from 'next/image'
import '../core/style/globals.css';

// addDecorator(Story => <Story />)

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />
})


const customViewports = {
  custom1: {
    name: 'large mobile',
    styles: {
      width: '600px',
      height: '963px'
    }
  },
  custom2: {
    name: 'flank',
    styles: {
      width: '375px',
      height: '667px'
    }
  }
}


export const parameters = {
  // actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...customViewports
    }
    // defaultViewport: 'iphonex'
  }
}
