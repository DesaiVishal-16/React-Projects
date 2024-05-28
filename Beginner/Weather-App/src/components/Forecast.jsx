import { useWeather } from "../Context/useWeather"
import { FaCloudSun } from "react-icons/fa";
import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";
import { GoEye } from "react-icons/go";
import { IoWaterOutline } from "react-icons/io5";
import { MdAir } from "react-icons/md";
import { IoUmbrellaOutline } from "react-icons/io5";
import { LuSunrise } from "react-icons/lu";
import { LuSunset } from "react-icons/lu";

const Forecast = () => {
  const weather = useWeather();
  const weatherData = weather.data?.forecast?.forecastday;


  const date = new Date();
  date.setDate(date.getDate() + 1);
  const nextDate = date.toISOString().split('T')[0];

  const nextDays = weatherData?.filter(day => day.date >= nextDate).slice(0, 3);
 
  return (
    <div className="ml-20 mt-8">
                  
      <h1 className="text-2xl text-black font-semibold">Upcoming Weather Forecast&nbsp;</h1>
      
      <div className="mr-20 grid grid-cols-1 gap-6">
        {nextDays && nextDays.length > 0 ? (
          nextDays.map((day, index) => (
            <div key={index} className="flex bg-white border-2 rounded-lg p-10">
              <div className="date ">
                <img src={day.day.condition.icon} alt="Icon" />
                <h1 className="text-black text-lg font-md">{day.date}</h1>
                <p className="text-black text-lg font-lg">{new Date(day.date).toLocaleDateString('en-US', { weekday: 'long' })}</p>
              </div>
              <div className="flex flex-col gap-5 pl-20">
                <h1 className="text-2xl text-black font-lg">{day.day.avgtemp_c}&deg;C</h1>
                <p className="text-md text-gray-800">{day.hour[0].feelslike_c}</p>
                <ul className="flex gap-2 text-sm items-center">
                  <li className="flex items-center text-sm text-gray-800">
                    {day.day.maxtemp_c}&deg;
                    <FaArrowUpLong className="text-sm text-gray-800" />
                  </li>
                  <li className="flex items-center text-sm text-gray-800">
                    {day.day.mintemp_c}&deg;
                    <FaArrowDownLong className="text-sm text-gray-800" />
                  </li>
                </ul>
              </div>
              <div className="ml-20">
                <ul className="flex gap-20 px-5">
                  <li className="flex flex-col justify-center gap-4 items-center">
                    <span className="text-lg">Visibility</span>
                    <GoEye className="text-2xl" />
                    <b>{day.day.avgvis_km} km</b>
                  </li>
                  <li className="flex flex-col justify-center gap-4 items-center">
                    <span className="text-lg">Humidity</span>
                    <IoWaterOutline className="text-2xl" />
                    <b>{day.day.avghumidity}%</b>
                  </li>
                  <li className="flex flex-col justify-center gap-4 items-center">
                    <span className="text-lg">Wind Speed</span>
                    <MdAir className="text-2xl" />
                    <b>{day.day.maxwind_kph} km/h</b>
                  </li>
                  <li className="flex flex-col justify-center gap-4 items-center">
                    <span className="text-lg">Rain</span>
                    <IoUmbrellaOutline className="text-2xl" />
                    <b>{day.day.daily_chance_of_rain}%</b>
                  </li>
                  <li className="flex flex-col justify-center gap-4 items-center">
                    <span className="text-lg">Sunrise</span>
                    <LuSunrise className="text-2xl" />
                    <b>{day.astro.sunrise}</b>
                  </li>
                  <li className="flex flex-col justify-center gap-4 items-center">
                    <span className="text-lg">Sunset</span>
                    <LuSunset className="text-2xl" />
                    <b>{day.astro.sunset}</b>
                  </li>
                </ul>
              </div>
            </div>
          ))
        ) : (
          <div className="flex gap-10 bg-white border-2 rounded-lg p-10 mb-20">
            <FaCloudSun className="text-2xl" />
            <h1>Loading forecast...</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Forecast;
