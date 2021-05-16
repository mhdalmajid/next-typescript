import { FC } from 'react'
import Span, { SpanProp } from '../Span/Span'

export interface LogoProp extends SpanProp {}

const Logo: FC<LogoProp> = ({ text, children, green, purple, gray, ...otherProps }) => {
  return (
    <Span bold {...otherProps} green={!(purple || gray)}>
      {text || children || 'flank'}
    </Span>
  )
}

Logo.defaultProps = {
  center: true,
  green: true,
}

export default Logo
