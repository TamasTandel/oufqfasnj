import { Route ,Routes } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import Login from './page/Login'

const App = () => {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  ) 
}

export default App