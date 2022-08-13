import { BsCloud, BsCloudDrizzle, BsCloudRain, BsSun } from 'react-icons/bs'

interface StatesProps {
  main: string
}

const States = ({ main }: StatesProps) => (
  <span>
    {
      {
        ['clouds']: <BsCloud className="w-20 h-20 fill-stroke text-sky-400" />,
        ['drizzle']: (
          <BsCloudDrizzle className="w-20 h-20 fill-stroke text-gray-200" />
        ),
        ['clear']: <BsSun className="w-20 h-20 fill-stroke text-yellow-400" />,
        ['rain']: (
          <BsCloudRain className="w-20 h-20 fill-stroke text-gray-600" />
        ),
      }[main.toLocaleLowerCase()]
    }
  </span>
)

export default States
