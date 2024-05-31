import MemeCard from "./MemeCard"
import { useState,useEffect } from "react"
import {getAllMemes} from '../Api/AllMemes'
import {useNavigate} from 'react-router-dom'

const MemeTemplate = () => {
    const [data,setData] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        getAllMemes().then((memes)=>setData(memes.data.memes))
    },[])

    const handleClick=(url)=>{
        navigate(`/edit?url=${url}`)
    }
  return (
    <div  className="h-fit">
       <h1 className="text-2xl font-semibold p-5 text-yellow-500"> Meme Templates  </h1>
       <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((meme)=>(
            <li key={meme.id}><MemeCard src={meme.url} name={meme.name} onClick={()=>handleClick(meme.url)}/></li>
        ))}
       </ul>
    </div>
  )
}

export default MemeTemplate