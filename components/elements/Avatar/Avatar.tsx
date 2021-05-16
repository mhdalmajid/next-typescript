import { FC } from 'react'
import Image from 'next/image'
import classnames from 'classnames'
import { Center } from '../Logo/Logo.stories'

export interface AvatarProps {
  src?: string
  small?: boolean
  large?: boolean
  green?: boolean
  gray?: boolean
  purple?: boolean
  active?: boolean
  center?: boolean
}

const baseStyle = 'rounded-full  overflow-hidden relative  border-2  bg-gray-200 '

const Avatar: FC<AvatarProps> = (props) => {
  const { src, small, large, gray, green, purple, active, center, children } = props

  const style = classnames(baseStyle, {
    'border-flank-purple': purple,
    'border-flank-green': green || active,
    'border-flank-gray': gray,
    'w-56 h-56': !small,
    'w-8 h-8': small,
    'mx-auto': center,
  })

  // const imageSize = small ? '32' : '220'

  return (
    <div className={style}>
      {src && <Image src={src} alt="avatar" layout="fill" className="block w-full h-full" />}
      {children}
    </div>
  )
}

Avatar.defaultProps = {}

export default Avatar
