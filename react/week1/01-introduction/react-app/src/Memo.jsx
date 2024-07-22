import { useMemo } from "react"
let items = [
    {id: 1, name: "worm gummybears"},
    {id: 2, name: "shark gummybears"},
    {id: 3, name: "mint chocolate"},
];
const processedItems = (items) => {
    return items.map(item => ({id: item.id, name: item.name.toUppercase()}))
}
const Listitems = ({items}) => {
    const processedItems = useMemo(() => processedItems(items), [items]);
    return(
        <ul>
            {processedItems.map(item =>(
              <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
}
const App = () => <Default items={items} />
export default App