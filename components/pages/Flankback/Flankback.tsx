import { Container } from '@components/layouts'
import { Button, Text, Title, Input, ProgressBar, MoneyInput, Nav } from '@components/elements'
import { Lightspeed, Joyride, Slownsteady } from '@components/elements/Icon'
import { numberSchema } from '@core/validation/'
import {
  useValidatedInput,
  useValidatedInputProps,
} from '@core/hooks/useInputValidation/useInputValidation'
import { borrowed, lent, finished } from './data'
import { Card } from './Card'

const speed = [<Lightspeed />, <Joyride />, <Slownsteady />]

const speedText = ['lightspeed', 'joyride', 'slownsteady']

// TODO: To get all flanks for current user -> GET /api/Loans/user/{id}
// To select only unfinished -> totalAmount === paidAmount, accepted === true
// Weight is speed - number from 1 to 10

const amountInitialProps: useValidatedInputProps = {
  schema: numberSchema,
  errorText: 'amount invalid',
  name: 'amount',
  type: 'text',
  placeholder: 'total amount i can return',
}

export const Flankback = () => {
  const [amountProps, amountError] = useValidatedInput(amountInitialProps)
  return (
    <>
      <Nav active="FlankBack" />
      <Container>
        <Title text="back" />
        <div>
          <Text gray center lg text="this week i have" />
          <Input purple {...amountProps} />
          <Text gray left lg semibold text="to:" />

          {borrowed.map((item, index) => {
            return (
              // eslint-disable-next-line max-len
              // TODO: Probably username shouldn't be used as a key because there can be several loans from the same user
              <div className="flex items-end justify-between mt-1" key={item.username}>
                <div className="flex flex-col w-full">
                  <div className="flex justify-between w-full">
                    <Text lg purple semibold text={item.username} />
                    <div className="flex items-center">
                      {speed[item.speed]}
                      <Text lg gray semibold text={speedText[item.speed]} />
                    </div>
                  </div>
                  <ProgressBar percent={item.percent} />
                </div>
                <div className="flex flex-col items-center ml-2.5">
                  {index === 0 && <Text lg gray semibold text="$" />}
                  {/* eslint-disable-next-line max-len */}
                  {/* TODO: Add validation for this input. We should check that sum of all money inputs equal to total */}
                  <MoneyInput name={item.username} />
                </div>
              </div>
            )
          })}
          <Button purple label="Pledge" />
        </div>

        <Card
          data={lent}
          infoTitle="tracking flanks"
          directionLabel="from:"
          speed={speed}
          speedText={speedText}
        />

        <Card
          data={finished}
          infoTitle="finished flanks"
          directionLabel="with:"
          speed={speed}
          speedText={speedText}
        />
      </Container>
    </>
  )
}
