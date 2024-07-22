import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
const App = () => {
    //global states
    const [items, setItems] = useState([]);
    function handleItems(item){
        setItems((items) => [...items, item])
    }
    //
    return (
        <div>
            <Header />
            <Nav handleItems={handleItems} />
            <Listarea items={items}/>
            <Footer items={items}/>
        </div>
    );
}
const Header = () => {
    return <h2>ToDo List </h2>
}
const Nav = ({handleItems}) => {
    //local state
    const [name, setName] = useState("");
    const handleClick = () => {
        const newItem = {name, id: uuidv4()};
        handleItems(newItem);
        setName("");
    }
    return (
        <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={handleClick}>Add Task</button>
        </>
    );
}
const Listarea = ({items}) => {
    return (
        <>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>Name:{item.name}</li>
                ))}
            </ul>
        </>
    );
}
const Footer = ({items}) => {
    return (
        <>
        {items.length !== 0 ? (
            <p>You have <b>{items.length}</b>  tasks in your pipeline</p>
        ) : (
            <p>You can start adding tasks</p>
        )}
        </>
    );
}
export default App