import { FC, forwardRef, Ref, useEffect, useState } from 'react'
import { Wand } from '../Icon'
import Avatar from './Avatar'

export interface AvatarPickerProps {
  disabled?: boolean
  center?: boolean
  getImage?: (Image) => void
}

const AvatarPicker: FC<AvatarPickerProps> = ({ disabled, center, getImage }) => {
  const [image, setImage] = useState<string | null>()

  useEffect(() => {
    let mounted = true

    if (getImage) {
      getImage(image)
    }

    return () => {
      mounted = false
    }
  }, [image])
  const onInputChange = (e) => {
    // convert image file to base64 string
    const file = e.target.files[0]
    const reader = new FileReader()

    if (file) {
      reader.readAsDataURL(file)
    }

    reader.addEventListener(
      'load',
      () => {
        setImage(reader.result as string)
      },
      false
    )
  }

  return (
    <Avatar src={image || undefined} center={center}>
      <label className="absolute top-0 z-10 block w-full h-full opacity-0" htmlFor="avatar">
        avatar
        <input
          id="avatar"
          name="avatar"
          type="file"
          accept="image/*"
          disabled={disabled}
          onChange={onInputChange}
        />
      </label>
      <div className="absolute z-50 m-auto text-2xl top-40 left-24 w-9 h-9">
        <Wand />
      </div>
    </Avatar>
  )
}

Avatar.defaultProps = {}

export default AvatarPicker
