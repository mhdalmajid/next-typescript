import { Container } from '@components/layouts'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLongPress } from '@core/hooks'
import { FC } from 'react'
import { Logo, Button, Text, Anchor } from '@components/elements'

const url = 'https://www.patreon.com/flank'

interface HomeProps {
  callback: Function
}

export const Home: FC<HomeProps> = ({ callback }) => {
  const onHoldingFlankLogo = useLongPress(callback)

  return (
    <Container noNav extraStyle="pt-4 bg-flank-home">
      <Logo xl3 block center stroke />
      <Anchor bold xl white center className="mt-2 tracking-widest" href={url}>
        PATREON
      </Anchor>

      <div className="flex flex-col justify-between h-64 m-auto">
        <Logo xl8 block center stroke {...onHoldingFlankLogo} />
        <div>
          <Text center green semibold xl3 stroke>
            so we can just be
          </Text>
          <Text center green semibold xl3 stroke>
            friends
          </Text>
        </div>
        <Link href="/signup" passHref>
          <Button label="Start" green />
        </Link>
      </div>

      <div>
        <Text lg green center>
          why we exist
        </Text>
        <div className="text-center animate-bounce text-flank-green">
          <FontAwesomeIcon icon={faAngleDown} size="6x" />
        </div>
      </div>
    </Container>
  )
}
