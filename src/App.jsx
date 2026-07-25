
import './App.css'
import Navbar from './components/Navbar'
import Auth from './pages/Auth'
import Checkout from './pages/Checkout'
import Home from './pages/Home'
import { Route,Routes } from 'react-router-dom'

function App() {


  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
      
         
        
    </div>
  )
}

export default App
