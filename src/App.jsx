import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import Resume from './Component/Resume'
import Features from './Component/Fearures'
import Contact from "./Component/Contact"
function App() {
  return(
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/features' element={<Features/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
       </Routes>
    </BrowserRouter>
  )
}

export default App
