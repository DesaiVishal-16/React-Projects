
import './App.css'
import Home from './pages/Home'
import EditMeme from './pages/EditMeme'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import MemeLayout from './components/MemeLayout'

function App() {
 
  return (
    <div style={{backgroundColor:"#282c34"}} className=''>
        <Router>
        <Routes>
          <Route path="/" element={<MemeLayout/>} >
            <Route index element={<Home/>}/>
            <Route path="/edit" element={<EditMeme />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
