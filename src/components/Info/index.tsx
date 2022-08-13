import { BsCloud, BsCloudDrizzle, BsCloudRain, BsSun } from 'react-icons/bs'
import { IoMdWater } from 'react-icons/io'
import { FiWind } from 'react-icons/fi'

import { WeatherData } from '../../App'

const NOTIFICATION_STATES = {
  clouds: <BsCloud className="w-20 h-20 fill-stroke text-sky-400" />,
  drizzle: <BsCloudDrizzle className="w-20 h-20 fill-stroke text-gray-200" />,
  clear: <BsSun className="w-20 h-20 fill-stroke text-yellow-400" />,
  rain: <BsCloudRain className="w-20 h-20 fill-stroke text-gray-600" />,
}

interface InfoProps {
  data: WeatherData | null
}

const Info = ({ data }: InfoProps) => {
  return (
    <div className="flex flex-col h-full items-center justify-center w-full">
      {data && <InfoWithData {...data} />}
    </div>
  )
}

const InfoWithData = (data: WeatherData) => {
  return (
    <>
      <div>
        <h2 className="font-bold text-2xl text-gray-600 text-center">
          {data.city}, {data.country}
        </h2>
      </div>
      <div className="my-6">
        <div className="flex flex-row space-x-4">
          <div className="flex flex-col w-full items-center">
            <span>{NOTIFICATION_STATES[data.main.toLocaleLowerCase()]}</span>
            <span className="mt-2 font-bold">{data.main}</span>
          </div>
          <div className="flex flex-col">
            <h4 className="text-4xl">
              {(data.temperature! - 273.15).toFixed(2)}°C
            </h4>
            <p className="text-gray-500">{data.description}</p>
            <p className=" text-gray-500 text-sm flex flex-row items-center">
              <IoMdWater className="mx-1" />
              Humidity: {data.humidity}
            </p>
            <p className=" text-gray-500 text-sm flex flex-row items-center">
              <FiWind className="mx-1" />
              Wind Speed: {data.windSpeed}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Info
