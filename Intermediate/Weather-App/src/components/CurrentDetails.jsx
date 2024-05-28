import { useWeather } from "../Context/useWeather"
import { IoIosSpeedometer } from "react-icons/io";
import { GoEye } from "react-icons/go";
import { IoWaterOutline } from "react-icons/io5";
import { MdAir } from "react-icons/md";
import { IoUmbrellaOutline } from "react-icons/io5";
import { LuSunrise } from "react-icons/lu";
import { LuSunset } from "react-icons/lu";

const CurrentDetails = () => {
    const weather = useWeather();
    const weatherData = weather.data;
  return (
    <div className="extra-weather-details ml-20 mt-5 flex gap-6">
        <div className="aqi-index border-2 rounded-lg bg-white p-5">
            <h1 className="flex flex-col justify-center gap-4 items-center text-xl text-black font-lg">AQI Index<br/><IoIosSpeedometer className="text-2xl"/><b className="text-amber-500">{weatherData ? weatherData?.current?.air_quality['us-epa-index'] : ""}</b></h1>
        </div>
        <div className="border-2 bg-amber-300 rounded-xl p-5">
           <ul className="flex gap-32 px-5">
            <li className="flex flex-col justify-center gap-4 items-center"><span className="text-lg">Visibility</span> <GoEye className="text-2xl"/> <b>{weatherData ? weatherData.current.vis_km:""}km</b></li>
            <li className="flex flex-col justify-center gap-4 items-center"><span className="text-lg">Humidity</span> <IoWaterOutline className="text-2xl"/> <b>{weatherData ? weatherData.current.humidity:""}%</b></li>
            <li className="flex flex-col justify-center gap-4 items-center"><span className="text-lg">Wind Speed</span> <MdAir className="text-2xl"/> <b>{weatherData ? weatherData.current.wind_kph:""}km/h</b></li>
            <li className="flex flex-col justify-center gap-4 items-center"><span className="text-lg">Rain</span> <IoUmbrellaOutline className="text-2xl"/> <b>{weatherData ? weatherData.forecast.forecastday[0].day.daily_chance_of_rain:""}%</b></li>
            <li className="flex flex-col justify-center gap-4 items-center"><span className="text-lg">Sunrise</span> <LuSunrise className="text-2xl"/> <b>{weatherData ? weatherData.forecast.forecastday[0].astro.sunrise:"Am"}</b></li>
            <li className="flex flex-col justify-center gap-4 items-center"><span className="text-lg">Sunset</span> <LuSunset className="text-2xl"/> <b>{weatherData ?  weatherData.forecast.forecastday[0].astro.sunset:"Pm"}</b></li>
           </ul>
        </div>

    </div>
  )
}

export default CurrentDetails