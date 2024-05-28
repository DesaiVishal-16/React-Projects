import { useContext } from "react";
import { WeatherContext } from "./Weather";

export const useWeather =()=> useContext(WeatherContext)