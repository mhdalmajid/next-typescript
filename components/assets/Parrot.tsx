import Image, { ImageProps } from 'next/image'

export const Parrot = () => {
  return (
    <div className="absolute inline right-2 top-80">
      <Image src="/assets/bouncing-parrot.gif" alt="bouncing parrot" width="68" height="72" />
    </div>
  )
}
