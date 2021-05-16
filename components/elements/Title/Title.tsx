import classnames from 'classnames'
import { FC } from 'react'
import Logo from '../Logo/Logo'
import Span from '../Span/Span'

export interface TitleProps {
  text?: string
  xl3?: boolean
}

const Title: FC<TitleProps> = ({ text }) => {
  return (
    <h1 className="mx-auto my-3 text-center">
      <Logo inline xl5 />
      <Span purple text={text} bold xl5 />
    </h1>
  )
}

Title.defaultProps = {}

export default Title
