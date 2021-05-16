import { Text, ProgressBar } from '@components/elements'
import { FC, ReactNode } from 'react'
// import { speed } from '/data'

interface CardProps {
  data: any
  infoTitle: string
  directionLabel: string
  speed: ReactNode[]
  speedText: string[]
}

export const Card: FC<CardProps> = ({ data, infoTitle, directionLabel, speed, speedText }) => {
  return (
    <div className="mt-8">
      <Text center gray lg text={infoTitle} />
      <Text gray left lg semibold text={directionLabel} />
      {data.map((item) => (
        <div className="flex flex-col w-full mt-1" key={item.username}>
          <div className="flex justify-between w-full">
            <Text lg purple semibold text={item.username} />
            <div className="flex">
              <div className="flex items-center mr-4">
                {speed[item.speed]}
                <Text lg gray semibold text={speedText[item.speed]} />
              </div>
              <Text lg purple bold text={item.amount} />
            </div>
            <Text lg purple bold text={item.amount} />
          </div>
          <ProgressBar percent={item.percent} />
        </div>
      ))}
    </div>
  )
}
