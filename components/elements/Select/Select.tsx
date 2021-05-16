import React, { FC, MouseEvent, useState } from 'react'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const optionStyle = 'option py-4 text-lg text-center flex justify-center items-center'
// 'option' class used for almost full width borders, styled via pseudo class in /core/style/global.css

function Option({ children, value, ...otherProps }) {
  return (
    <div className={optionStyle} data-value={value} {...otherProps}>
      {children}
    </div>
  )
}

export interface SelectProps {
  options?: { label: string; value: string }[]
  defaultValue: { label: string; value: string }
  getValue?: (value: string | null) => void
}

const baseStyle =
  'select-none my-2 py-4 text-lg text-center cursor-pointer border-2 border-flank-purple text-flank-purple'
const arrowStyle = 'absolute text-flank-purple inset-y-0 right-0 mr-4'

const Select: FC<SelectProps> = ({ options, getValue, defaultValue }) => {
  const [selectedLabel, setSelectedLabel] = useState<string | null>(defaultValue.label)
  const [selectedOption, setSelectedOption] = useState<string | null>(defaultValue.value)
  const [showList, setshowList] = useState(false)

  const listStyle = classnames('w-full text-center select-none border-flank-purple top-full', {
    hidden: !showList,
  })
  const handleClick = () => setshowList((prev) => !prev)

  function setValueOnClick(e: MouseEvent) {
    const value = e.currentTarget.getAttribute('data-value')
    const lable = e.currentTarget.textContent
    setSelectedOption(value)
    setSelectedLabel(lable)
    if (getValue) getValue(selectedOption)
  }

  const renderOptions = (option) => {
    const { value, label, Icon } = option
    return (
      <Option value={value} key={value} onClick={setValueOnClick}>
        {Icon && <Icon />}
        {label}
      </Option>
    )
  }

  const parentStyle = classnames(baseStyle, {
    'rounded-full': !showList,
    'rounded-4xl shadow pb-0': showList,
  })

  return (
    <div className={parentStyle} onClick={handleClick}>
      <div className={showList ? 'border-b-2 border-flank-purple pb-4 relative' : 'relative'}>
        {selectedLabel}
        <FontAwesomeIcon
          className={arrowStyle}
          icon={faAngleDown}
          size="2x"
          viewBox="0 50 320 512"
        />
      </div>
      <div className={listStyle}>{options && options.map(renderOptions)}</div>
    </div>
  )
}

export default Select
