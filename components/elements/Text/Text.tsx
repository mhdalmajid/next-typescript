import classnames from 'classnames'
import { FC, HTMLAttributes } from 'react'

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  sm?: boolean
  lg?: boolean
  xl?: boolean
  xl3?: boolean
  xl5?: boolean
  xl8?: boolean

  purple?: boolean
  gray?: boolean
  green?: boolean
  yellow?: boolean
  red?: boolean

  inline?: boolean
  block?: boolean
  inlineBlock?: boolean

  center?: boolean
  left?: boolean
  right?: boolean

  bold?: boolean
  semibold?: boolean

  stroke?: boolean

  text?: string

  span?: string
}

const Text: FC<TextProps> = ({
  sm,
  lg,
  xl,
  xl3,
  xl5,
  xl8,
  right,
  left,
  center,
  purple,
  gray,
  green,
  yellow,
  red,
  inline,
  block,
  inlineBlock,
  bold,
  semibold,
  stroke,
  text,
  children,
  ...otherProps
}) => {
  const style = classnames({
    'text-sm': sm,
    'text-lg': lg,
    'text-xl': xl,
    'text-3xl': xl3,
    'text-5xl': xl5,
    'text-8xl': xl8,

    'text-flank-purple': purple,
    'text-flank-gray': gray,
    'text-flank-green': green,
    'text-flank-yellow': yellow,
    'text-flank-red': red,

    'inline ': inline,
    'block ': block,
    'inline-block': inlineBlock,

    'text-center': center,
    'text-left': left,
    'text-right': right,

    'text-stroke': stroke,

    'font-bold': bold,
    'font-semibold ': semibold,

    'z-10': true,
  })
  return (
    <p className={style} {...otherProps}>
      {text || children}
    </p>
  )
}

export default Text
