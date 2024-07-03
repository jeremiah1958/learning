import { BrowserRouter } from "react-router-dom";
import Home from './home'
import Product from './Product'
const App = ()=>{
    return(
        <BrowserRouter>
            <Router>
                <Route path="/" element={<Home />} />
                <Route path="/product/:productId" element={<Product />} />
            </Router>
        </BrowserRouter>
    )
}
export default App