import { Outlet } from "react-router-dom"
import Header from "./Header"


const MemeLayout = () => {
  return (
    <div>
       <Header/>
        <Outlet/>
    </div>
  )
}

export default MemeLayout