import { Container } from '@components/layouts'
import { Text, Span } from '@components/elements'
import tw from 'twin.macro'
import { Peach, Mouse, Parrot, ShakeItOf, TapThat } from '@components/assets'
import { CSSProperties, FC, useEffect, useState } from 'react'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IntroProps {
  callback?: (state: boolean) => void
}

export const Intro: FC<IntroProps> = ({ callback }) => {
  const [count, setcount] = useState<number>(0)

  useEffect(() => {
    let mounted = true

    if (callback) callback(count >= 4)

    return () => {
      mounted = false
    }
  }, [count])

  const images = [
    <>
      <Peach />
      <TapThat />
    </>,
    <Mouse />,
    <Parrot />,
    <ShakeItOf />,
  ]
  const handleClick = () => {
    setcount((prev) => prev + 1)
  }

  return (
    <section style={IntroBg} onClick={handleClick}>
      <Container noNav extraStyle="relative pt-9">
        {/*
         * ********************************
         *   Render Images depend on click
         * ********************************
         * */}
        {count <= 3 && images[count]}
        {/** ****************************** */}
        <Text left green xl3 stroke>
          flank is for friends who can count on each other
          <Span yellow hidden={count < 1}>
            &nbsp;like when you borrow 5 for chips at midnight or{' '}
          </Span>
          <Span red hidden={count < 2}>
            when you lend a friend 40 coz sister owes them 80
          </Span>
        </Text>
        <Text left green xl3 stroke hidden={count < 3}>
          flank is for giving without losing again
        </Text>
        <Text left yellow xl3 stroke style={{ marginTop: '35px' }} hidden={count < 4}>
          we flank so we can just be friends
        </Text>
        <div className="font-thin text-center animate-bounce text-flank-green" hidden={count < 4}>
          <FontAwesomeIcon icon={faAngleDown} size="6x" />
        </div>
      </Container>
    </section>
  )
}

// const Main = tw.div`flex flex-col h-screen mx-auto pt-9 w-80 relative`

const IntroBg: CSSProperties = {
  position: 'relative',
  background: `
   linear-gradient(
      346.29deg,
      rgba(254, 0, 101, 0.2) 11.66%,
      hsla(0, 0%, 100%, 0.112) 37.63%,
      hsla(0, 0%, 100%, 0.106) 95.28%
    ),
    linear-gradient(
      11.28deg,
      rgba(115, 4, 255, 0.5) 23.66%,
      rgba(101, 37, 225, 0.5) 51.04%,
      rgba(115, 4, 255, 0.5) 72.07%
    ),
    #7304ff`,
}
