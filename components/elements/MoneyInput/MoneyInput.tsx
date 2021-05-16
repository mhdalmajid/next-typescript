import { InputHTMLAttributes } from 'react'
import classnames from 'classnames'

export interface MoneyInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

const baseStyle =
  'rounded-lg border-2 w-16 h-16 border-flank-purple outline-none text-center font-lg font-bold text-flank-grey' // TODO: Width should be 66px = 4.125rem (w-16 = 4rem). Margin should be 15px = 0.9375rem (ml-4 = 1rem)

const MoneyInput = ({ name, disabled, ...otherProps }: MoneyInputProps) => {
  return (
    <input
      type="text"
      id={name}
      name={name}
      className={classnames(baseStyle, { 'border-none bg-flank-gray-light': disabled })}
      disabled={disabled}
      // value={disabled ? '-' : ''}
      {...otherProps}
    />
  )
}

MoneyInput.defaultProps = {}
export default MoneyInput
