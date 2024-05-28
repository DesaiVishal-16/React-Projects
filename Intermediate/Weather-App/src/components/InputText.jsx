import { useWeather } from "../Context/useWeather"

const InputText = () => {
    const weather = useWeather()
  return (
    <div>
      <input className="p-1 border-2 border-slate-500 rounded-l-md indent-2 focus:outline-none capitalize" onChange={(e)=>(weather.setSearchCity(e.target.value))} value={weather.searchCity} type="text" placeholder="Type Location..." required/>
    </div>
  )
}

export default InputText