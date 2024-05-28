import { useWeather } from "../Context/useWeather"

const CurrentTime = () => {
    const weather = useWeather()
    const time = weather.data?.location?.localtime;
    const date = new Date(time);
    
    const days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Firday","Saturday"]
    const dayName = days[date.getDay()]
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const formattedDate = `(${day}.${month < 10 ? '0' : ''}${month}.${year})`;

  return (

    <div className="time flex items-center gap-3 pt-10 pl-20">
        <h1 className="text-black font-semibold text-2xl relative bottom-0.5">{dayName}</h1>
        <p className="text-black font-xl text-lg">{weather.data ? formattedDate : 'Time'}</p> 
    </div>
  )
}

export default CurrentTime