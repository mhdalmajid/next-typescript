import { Container } from '@components/layouts'
import { Logo } from '@components/elements'
import { FC } from 'react'

function XX() {
  return (
    <p>
      [fláŋk]&nbsp;<em>/n/v/!?!</em>
    </p>
  )
}

export const About: FC = () => {
  return (
    <Container noNav extraStyle="fixed top-0 z-20 select-none bg-flank-about text-flank-purple">
      <Logo text="Flank" purple block />
      <h2 className="font-serif text-6xl font-bold">flank</h2>
      <div className="font-serif text-2xl">
        <p>
          [fláŋk]&nbsp;<em>/n/v/!?!</em>
        </p>
        <p>
          <strong>1</strong>&nbsp;a chill appy thing dedicated to helping people lend, borrow and
          give money with their friends and family
        </p>
        <p>
          <strong>2</strong>&nbsp;the rise of the generosity economy
        </p>
        <p>
          <strong>3</strong>&nbsp;“oh flank that feels so good”{' '}
          <span className="text-xl">- Your wildest dreams</span>
        </p>
      </div>
    </Container>
  )
}
