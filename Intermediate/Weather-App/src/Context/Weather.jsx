import { createContext, useState } from "react"
import PropTypes from 'prop-types'
import { getWeatherDataForCity, getWeatherDataFromLocation } from "../Api/getWeatherApi"

export const WeatherContext = createContext(null)

export const WeatherProvider = ({children}) => {
    const [data,setData] = useState(null)
    const [searchCity,setSearchCity] = useState('')

    const fetchData = async() => {
      try {
        const response = await getWeatherDataForCity(searchCity);
  
        if (response && response.location) {
            setData(response);
        } else {
            alert("City not found. Please enter a valid city name.");
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("An error occurred while fetching weather data. Please try again later.");
    }
    }

    const fetchDataUserCurrentLocation = async () => {
        try {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const data = await getWeatherDataFromLocation(position.coords.latitude, position.coords.longitude);
            setData(data);
          }, (error) => {
            console.error("Error getting current position:", error);
          });
        } catch (error) {
          console.error("Error fetching weather data for current location:", error);
        }
      };

  return (
    <WeatherContext.Provider value={{data,searchCity,setSearchCity,fetchData,fetchDataUserCurrentLocation}}>
        {children}
    </WeatherContext.Provider>
  )
}


WeatherProvider.propTypes={
 children : PropTypes.node.isRequired
}
