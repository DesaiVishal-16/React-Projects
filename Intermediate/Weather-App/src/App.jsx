
import './App.css'
import { WeatherProvider } from './Context/Weather'
import WeatherApp from './components/WeatherApp'

function App() {


  return (
    <>
      <WeatherProvider>
        <WeatherApp/>
      </WeatherProvider>
    </>
  )
}

export default App
