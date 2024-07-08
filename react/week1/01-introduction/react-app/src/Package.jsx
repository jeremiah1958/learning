//List and Keys i have used map

const App = () =>{
    const names = ["Allan", "Joan", "Shawn", "Teddy", "Jeremy"];

    const renderNames = names.map((name) => {
        return <li key={crypto.randomUUID()}>{name}</li>
    });

    return(
        <ul>{renderNames}</ul>
    )
}

export default App

//output
/*
1. Allan
2. Joan
3. Shawn
4. Teddy
5. Jeremy
*/


//condional rendering

// function Item({name, ispacked}){

//     if(ispacked){
//         return null;
//     }
//     else{

//         return <li className="">{name}</li>;
//     }
// }

// function PackageList(){
//     return(
//         <section>
//             <h1>Naivas Packaging List</h1>
//             <ul>
//                 <Item ispacked={true} name="2kg Mumias Sugar" />
//                 <Item ispacked={true} name="5kg Pishori Rice" />
//                 <Item ispacked={false} name="1kg Dengu" />
//             </ul>
//         </section>
//     );

// }

// export default PackageList