import { useWeather } from "../Context/useWeather";
import CurrentTime from "./CurrentTime";
import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";
import { FaCloudSun } from "react-icons/fa";

const TodayWeather = () => {
  const weather = useWeather();
  const weatherData = weather.data;

  const current = weatherData?.current;
  const forecastHours = weatherData?.forecast?.forecastday?.[0]?.hour;
  const currentTimeEpoch = weatherData?.location?.localtime_epoch;
  const nextHours = forecastHours?.filter(hour => hour.time_epoch >= currentTimeEpoch).slice(0, 24);
  

  const formatTimeFromEpoch = (epoch) => {
    const date = new Date(epoch * 1000);
    let hours = date.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes} ${ampm}`;
  }
  
  return (
    <div className="today-weather">
      <CurrentTime />
      <div className="current-weather flex gap-40 mx-20 py-5 px-10 border-2 bg-white rounded-lg">
        <div className="temp flex flex-col gap-2 pt-5">
          <h1 className="text-4xl font-semibold">
            {current ? `${current.temp_c}` : "Temp in"}&deg;C
          </h1>
          <p className="text-md">
            Feels like {current ? `${current.feelslike_c}` : "Feels like in°C"}&deg;
          </p>
          <ul className="flex gap-2 text-sm items-center">
            <li className="flex items-center">
              {current ? `${current.heatindex_c}` : "Heat Index"}&deg;
              <FaArrowUpLong className="text-sm" />
            </li>
            <li className="flex items-center">
              {current ? `${current.dewpoint_c}` : "Dewpoint"}&deg;
              <FaArrowDownLong className="text-sm" />
            </li>
          </ul>
        </div>
        <div className="hours-weather overflow-y-auto max-h-96">
          <ul className="flex gap-14 items-center">
          {nextHours && nextHours.length > 0 ? (
              nextHours.map((hour, index) => (
                <li className="flex flex-col gap-2 items-center" key={index}>
                  <p className="text-center text-sm font-semibold">{formatTimeFromEpoch(hour.time_epoch)}</p>
                  <img
                    src={hour.condition.icon}
                    alt="weather-icon"
                  />
                  <span className="text-sm font-semibold">{hour.temp_c}&deg;C</span>
                </li>
              ))
            ) : (
              <li>
                <p>Time</p>
                <FaCloudSun className="text-4xl"/>
                <span>Temp in&deg;C</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodayWeather;
