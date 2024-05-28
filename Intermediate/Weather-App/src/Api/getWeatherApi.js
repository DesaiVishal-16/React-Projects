const baseUrl = `https://api.weatherapi.com/v1/forecast.json`

const apiKey = import.meta.env.VITE_API_KEY

export const getWeatherDataForCity = async (city) =>{
    const response = await fetch(`${baseUrl}?key=${apiKey}&q=${city}&days=14&aqi=yes`)
    return response.json()
}
export const getWeatherDataFromLocation = async (long,lati) =>{
    const response = await fetch(`${baseUrl}?key=${apiKey}&q=${long},${lati}&aqi=yes`)
    return response.json()
}