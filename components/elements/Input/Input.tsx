import { InputHTMLAttributes } from 'react'
import classnames from 'classnames'
import Text from '../Text/Text'
import { Wand } from '../Icon'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  wand?: boolean
  color?: 'green' | 'gray' | 'purple'
  error?: string | false
  label?: string
  disable?: boolean

  purple?: boolean
  green?: boolean
  gray?: boolean
}

const baseStyle =
  'rounded-full py-4 my-2 border-2 text-center outline-none w-full text-lg leading-6'

function Input({ wand, name, label, error, purple, gray, green, ...otherProps }: InputProps) {
  const Inputstyle = classnames(baseStyle, {
    'border-flank-purple ': purple,
    'border-flank-green ': green,
    'border-gray-500 ': gray,
    'border-flank-red text-flank-red': error && otherProps.value,
    'text-black': !error,
    'border-flank-green': !error && otherProps.value,
  })

  return (
    <div className="relative text-center">
      {/* <label
        htmlFor={name}
        className="absolute top-0 right-0 block w-full h-full pt-6 text-lg text-center text-flank-gray-light">
        {label}
      </label> */}
      <input id={name} name={name} className={Inputstyle} {...otherProps} />
      {wand && <Wand className="absolute text-2xl right-3 top-7" />}
      <Text center sm red semibold>
        {otherProps.value && error ? error : ''}
      </Text>
    </div>
  )
}

Input.defaultProps = {
  name: 'text',
  label: 'text',
  type: 'text',
  // placeholder: 'placeholder',
  error: false,
  wand: false,
}
export default Input
