import { useState } from 'react'
import Form from './components/Form'
import Info from './components/Info'
import Logo from './components/Logo'
import { WEATHER_KEY } from './constants'

export interface WeatherData {
  temperature: number
  description: string
  humidity: number
  windSpeed: number
  city: string
  main: string
  country: string
}

function App() {
  const [data, setData] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const getWeather = async (e: any) => {
    e.preventDefault()

    const { cityInput } = e.target.elements
    const cityValue = cityInput.value

    if (cityValue) {
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${WEATHER_KEY}`
      setLoading(true)
      const response = await fetch(API_URL)

      if (response.status == 404) {
        setLoading(false)
        setError('The city has not been found')
      } else {
        setLoading(false)
        setError(null)
        const data = await response.json()
        setData({
          main: data.weather[0].main,
          temperature: data.main.temp,
          description: data.weather[0].description,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          city: data.name,
          country: data.sys.country,
        })
      }
    } else {
      setError('Please enter a specific city in the input')
    }
  }
  return (
    <main className="h-screen flex flex-col justify-center items-center md:flex-row">
      <div className="sm:w-1/3">
        <div className="border w-96 h-72 flex items-center flex-col">
          <Logo />
          <Form getWeather={getWeather} loading={loading} />
        </div>
        {error && (
          <div className="bg-red-200 w-96 text-center py-3 px-8 mt-4">
            {error}
          </div>
        )}
      </div>
      <div className="sm:w-1/3 md:mt-0 mt-4">
        <div className="border w-96 h-72 flex items-center flex-col">
          <Info data={data} />
        </div>
      </div>
    </main>
  )
}

export default App
