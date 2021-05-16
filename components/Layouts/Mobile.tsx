import classnames from 'classnames'

export interface Props {
  hidden?: boolean
  className?: string
  children?: any
  bg?: string
  height?: 'auto' | 'screen'
  screen?: 'sm' | 'lg' | 'xl' | '2xl'
}

function Mobile(props: Props) {
  const { className, children } = props

  return (
    <div
      className={classnames(
        className,
        'flex flex-col w-72 h-screen min-h-screen   mx-auto relative'
      )}>
      {children}
    </div>
  )
}

export default Mobile
