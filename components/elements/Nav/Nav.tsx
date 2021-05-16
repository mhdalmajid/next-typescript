import classnames from 'classnames'
import { FC } from 'react'
import tw, { styled } from 'twin.macro'
import Anchor from '../Anchor/Anchor'
import Avatar from '../Avatar/Avatar'
import { FlankBack, FlankLaunch, FlankPact } from '../Icon'

export interface NavProps {
  active?: 'avatar' | 'FlankLaunch' | 'FlankBack' | 'FlankPact'
  avatar?: string
}

// const Wrap = styled.div(({  }) => [tw`text-3xl`, active && tw`text-flank-green`])

const Wrap: FC<any> = ({ active, children }) => {
  const style = classnames('text-3xl', {
    'text-flank-green': active,
    'text-flank-gray': !active,
  })

  return <div className={style}>{children}</div>
}

const Nav: FC<NavProps> = (props) => {
  const { active, avatar } = props
  return (
    <div className="flex flex-row justify-between w-full p-nav">
      <Wrap>
        <Anchor href="/">
          <Avatar
            small
            gray={!(active === 'avatar')}
            src={avatar || undefined}
            green={active === 'avatar'}
          />
        </Anchor>
      </Wrap>
      <Wrap active={active === 'FlankLaunch'}>
        <Anchor href="/launch">
          <FlankLaunch />
        </Anchor>
      </Wrap>
      <Wrap active={active === 'FlankBack'}>
        <Anchor href="/flankback">
          <FlankBack />
        </Anchor>
      </Wrap>
      <Wrap active={active === 'FlankPact'}>
        <Anchor href="/flankpact">
          <FlankPact />
        </Anchor>
      </Wrap>
    </div>
  )
}

export default Nav
