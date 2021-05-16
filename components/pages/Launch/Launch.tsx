import { Container } from '@components/layouts'
import { Text, Title, Button, Input, Anchor, Nav, Select } from '@components/elements'
import { FormEvent, useState, useEffect } from 'react'
import { Lightspeed, Joyride, Slownsteady } from '@components/elements/Icon'

const options = [
  { value: 'lightspeed', label: 'lightspeed', Icon: Lightspeed },
  { value: 'joyride', label: 'joyride', Icon: Joyride },
  { value: 'slownsteady', label: 'slownsteady', Icon: Slownsteady },
]

const defaultValue = { value: '', label: 'repayment speed' }

export const Launch = () => {
  const [selectedOption, setSelectedOption] = useState(null)

  const setValue = (value) => {
    setSelectedOption(value)
    console.log(value)
  }

  return (
    <>
      <Nav active="FlankLaunch" />
      <Container>
        <form>
          <Title text="launch" />
          <Text center gray lg>
            i’m returning money to
          </Text>
          <Input placeholder="email" purple />
          <Text center gray lg>
            all up the total comes to
          </Text>
          <Input placeholder="amount" purple />
          <Text center gray lg>
            and i want to go
          </Text>
          <Select defaultValue={defaultValue} options={options} getValue={setValue} />
          <Text center lg purple semibold>
            arethra flanklins get it krankin’
          </Text>
          <Button label="Launch" purple />
        </form>
      </Container>
    </>
  )
}
