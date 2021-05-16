import Image, { ImageProps } from 'next/image'

export const Mouse = () => {
  return (
    <div className="absolute inline right-8 top-48">
      <Image src="/assets/mouse.gif" alt="mouse eating cheese" width="140" height="140px" />
    </div>
  )
}
