import classnames from 'classnames'
import { FC } from 'react'

export interface ProgressBarProps {
  percent: string | number
}

const rightBaseStyle =
  'w-full h-16 rounded-lg bg-flank-purple-light text-lg font-extrabold text-right text-white text-right flex justify-between items-center' // 25px padding will be added to container

const leftBaseStyle =
  'h-full rounded-lg bg-flank-purple text-left text-flank-green flex items-center'

const ProgressBar: FC<ProgressBarProps> = ({ percent }) => {
  const rightText = 100 - +percent
  const isLeftTextHidden = +percent <= 10
  const isRightTextHidden = rightText <= 10

  const leftStyle = classnames(leftBaseStyle, { 'pl-4': !isLeftTextHidden })
  const rightStyle = classnames(rightBaseStyle, { 'pr-4': !isRightTextHidden })

  return (
    <div className={rightStyle}>
      <div style={{ width: `${percent}%` }} className={leftStyle}>
        {!isLeftTextHidden && `${percent}%`}
      </div>
      {!isRightTextHidden && `${rightText}%`}
    </div>
  )
}

export default ProgressBar
