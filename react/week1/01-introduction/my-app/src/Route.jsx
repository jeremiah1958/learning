import { Route, Routes } from 'react-router-dom'
import Home from './home'
import About from './about'
import Contact from './contact'
import './index.css'
const App = () =>{
    return(
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/contact' element={<Contact/>} />
            </Routes>
        </div>
    )
}
export default App







