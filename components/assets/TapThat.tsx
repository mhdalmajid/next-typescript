import Image, { ImageProps } from 'next/image'

export const TapThat = () => {
  return (
    <div className="absolute right-0 inline top-16">
      <Image src="/assets/tapthat.png" alt="tap that" width="130" height="144" />
    </div>
  )
}
