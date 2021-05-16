import { forwardRef, FC, ButtonHTMLAttributes } from 'react'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset'

  disabled?: boolean

  label?: string
  green?: boolean
  purple?: boolean
  gray?: boolean

  onClick?: () => void
}

const baseStyle =
  'block text-xl font-semibold border-2 mx-auto my-5 text-center focus:outline-none rounded-full uppercase px-7 py-2 tracking-wider'

const Button: FC<ButtonProps> = forwardRef((props, _ref) => {
  const { label, disabled, green, purple, gray, className, children, ...otherProps } = props

  const style = classnames(baseStyle, {
    'border-flank-purple text-flank-purple': purple && !green && !gray,
    'border-flank-green text-flank-green': green,
    'border-flank-gray text-flank-gray': gray,
    'cursor-wait': disabled,
  })

  return (
    <button className={style} disabled={disabled} type="button" {...otherProps}>
      {disabled && <FontAwesomeIcon icon={faSpinner} className=" animate-spin" />}
      {!disabled && (label || children)}
    </button>
  )
})

Button.defaultProps = {
  disabled: false,
  type: 'button',
}

export default Button
