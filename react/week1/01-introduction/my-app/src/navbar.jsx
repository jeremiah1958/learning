//navbar.jsx
import { Link } from "react-router-dom";
const Navbar = ()=>{
    const users = [
        {id: 1, name: "Shawn Paul"},
        {id: 2, name: "Joan Mwangi"},
        {id: 3, name: "Jeremy Baraca"},
        {id: 4, name: "Teddy Oloo"},
        {id: 5, name: "Allan Kioko"},
    ]
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                    {users.map(user=>(
                        <li key={user.id}>
                        <Link to={`/contact/${user.id}`}>{user.name}</Link>
                    </li>
                    ))}
            </ul>
        </nav>
    )
}
export default Navbar 