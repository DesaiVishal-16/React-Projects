
import { useEffect } from "react"
import { useWeather } from "../Context/useWeather"
import Header from "./Header"
import TodayWeather from "./TodayWeather"
import CurrentDetails from "./CurrentDetails"
import Forecast from "./Forecast"


const WeatherApp = () => {
    const weather = useWeather()
  
    useEffect(()=>{
      weather.fetchDataUserCurrentLocation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <div className="flex flex-col bg-zinc-200 ">
     <Header/>
     <TodayWeather/>
     <CurrentDetails/>
     <Forecast/>
    </div>
  )
}

export default WeatherApp