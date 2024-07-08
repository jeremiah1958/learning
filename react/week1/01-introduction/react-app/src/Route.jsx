import {Route, Routes, NavLink} from 'react-router-dom'
import Request from './Request'
import Search from './Search'
import Friends from './Friends'
import Stranger from './Stranger'
import Home from './Home'
import About from './about'
import {Contact} from './contact'

import './index.css'

const App = () =>{

    return(
        <div className='App'>
            {/* Creating a navigation link to go from one route to another */}

            <nav>
                <NavLink to="home">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="contact">Contact</NavLink>
            </nav>
            
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />}>
                    <Route path='search' element={<Search />} />
                    <Route path='friends' element={<Friends />} />
                    <Route path='request' element={<Request />} />
                    <Route path='stranger' element={<Stranger />} />
                </Route>
            </Routes>
            <br></br>

        </div>
    )
}

export default App