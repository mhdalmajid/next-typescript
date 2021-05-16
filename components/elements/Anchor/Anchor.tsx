import classnames from 'classnames'
import { FC, AnchorHTMLAttributes } from 'react'
import Link from 'next/link'

export interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text?: string
  uppercase?: boolean
  underline?: boolean

  sm?: boolean
  xl?: boolean

  gray?: boolean
  white?: boolean

  center?: boolean

  bold?: boolean

  block?: boolean
}

const Anchor: FC<AnchorProps> = (props, _ref) => {
  const {
    text,
    uppercase,
    block,
    href = '/',
    gray,
    white,
    sm,
    xl,
    bold,
    center,
    underline,
    className,
    children,
    ...otherProps
  } = props

  return (
    <Link href={href}>
      <a
        {...otherProps}
        className={classnames(className, {
          'uppercase ': uppercase,
          'underline ': underline,
          'text-sm': sm,
          'text-xl': xl,
          'text-flank-gray ': gray,
          'text-gray-50 ': white,
          'block ': block,
          'text-center ': center,
          'font-bold ': bold,
        })}>
        {text || children}
      </a>
    </Link>
  )
}

export default Anchor
