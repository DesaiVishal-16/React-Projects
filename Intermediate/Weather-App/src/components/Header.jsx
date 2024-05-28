import FetchButton from "./FetchButton"
import InputText from "./InputText"
import { MdOutlineMyLocation } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { useWeather } from "../Context/useWeather";

const Header = () => {
    const weather = useWeather()

    const getLocation=()=>{
       alert("Please turn on your location")
       weather.fetchDataUserCurrentLocation()
    }
  return (
    <div className="flex flex-col sm:flex-row justify-between py-5 px-4 sm:px-20 bg-slate-50" >

      <div className="flex flex-row gap-5">
        <h1 className="text-2xl text-neutral-600 font-bold">Weather</h1>
        <img className="w-10" src='./logo.jpg' alt="Logo-Img"/>
      </div>

      <div className="flex flex-row gap-5 items-baseline">
        <MdOutlineMyLocation onClick={getLocation} title="Your Current Location" className="text-2xl text-neutral-600 relative top-1 hover:text-neutral-500 cursor-pointer"/>
        <IoLocationOutline className="text-2xl text-neutral-700 relative top-1 hover:text-neutral-500 cursor-pointer"/>
        <p className="text-neutral-600 text-lg">{weather.data ? weather.data?.location?.name : 'City Name'}</p>
        <div className="search flex">
        <InputText />
        <FetchButton onClick={weather.fetchData}/>
        </div>
      </div>

    </div>
  )
}

export default Header