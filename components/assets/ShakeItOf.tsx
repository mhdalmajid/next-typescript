import Image, { ImageProps } from 'next/image'
import { FC } from 'react'

export const ShakeItOf = () => {
  return (
    <div className="absolute inline right-2 top-80">
      <Image src="/assets/shake-it-off.gif" alt="ballerina" width="68" height="72" />
    </div>
  )
}
