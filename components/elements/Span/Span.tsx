import classnames from 'classnames'
import { FC } from 'react'
import { TextProps } from '../Text/Text'

export interface SpanProp extends TextProps {}

const Span: FC<SpanProp> = (props) => {
  const {
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
    red,
    yellow,
    inline,
    inlineBlock,
    block,
    bold,
    semibold,
    stroke,
    text,
    children,
    ...otherProps
  } = props

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
    'semibold ': semibold,
  })

  return (
    <span className={style} {...otherProps}>
      {text || children}
    </span>
  )
}

Span.defaultProps = {
  block: false,
}

export default Span
