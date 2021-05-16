// import classnames from 'classnames'

// export interface Props {
//   hidden?: boolean
//   className?: string
//   children?: any
//   bg?: string
//   height?: 'auto' | 'screen'
//   screen?: 'sm' | 'lg' | 'xl' | '2xl'
//   z?: string
// }

// const BaseStyle = '  w-screen h-screen min-h-screen  sm:hidden overflow-hidden '

// export function Container(props: Props) {
//   const { className, children, hidden, bg, z } = props
//   const style = classnames(BaseStyle, className, bg, z, { hidden })

//   return <div className={style}>{children}</div>
// }

import classnames from 'classnames'

interface ContainerProps {
  children?: any
  noNav?: boolean
  verticalCenter?: boolean
  extraStyle?: string
}

const baseStyle = 'flex flex-col px-6 pb-6 sm:hidden'

export const Container = (props: ContainerProps) => {
  const { children, noNav, verticalCenter, extraStyle } = props
  const style = classnames(baseStyle, extraStyle, {
    'min-h-screen': noNav,
    'overflow-y-scroll h-navScreen': !noNav,
    'justify-center': verticalCenter,
  })
  return <div className={style}>{children}</div>
}
