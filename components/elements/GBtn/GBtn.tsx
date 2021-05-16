import { ButtonHTMLAttributes } from 'react'
import classnames from 'classnames'
import { Google } from '../Icon'

export interface GBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean

  label?: string

  onClick?: () => void
}

const baseStyle =
  'border-gray-400 my-3 text-gray-500 text-xl font-semibold border-2 mx-auto w-full text-center focus:outline-none rounded-full px-7 py-3 block'

function GBtn({ label, disabled, ...props }: GBtnProps) {
  const style = classnames(baseStyle, {
    'opacity-70 cursor-default  ': disabled,
  })

  return (
    <button type="button" className={style} disabled={disabled} {...props}>
      <Google className="inline " />
      {label}
    </button>
  )
}
GBtn.defaultProps = {
  label: ' Sign up with Google',
}
export default GBtn
