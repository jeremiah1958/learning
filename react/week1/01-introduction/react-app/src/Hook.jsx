import { useState } from "react"
import { useEffect } from "react";
//ricky & morty component

const RickyAndMorty = () =>{
    const [characters, setCharacters] = useState([]);

    //async to fetch data from the api
    // const fetchCharacters = async () => {
    //     //try catch
    //     try{
    //         const response = await fetch("https://rickandmortyapi.com/api/character")
    //         const data = await response.json();
    //         setCharacters(data.results)
    //     }
    //     catch (error){
    //         console.error('Error in fetching data: ', error )
    //     }
        
    // }

    //using promise
    const fetchCharacters = () => {
            fetch("https://rickandmortyapi.com/api/character")
            .then((response) => response.json()) //convert the response into json
            .then((data) => {
                setCharacters(data.results) //assign/set data to our variable 
            })
            .catch((error) =>{
                console.error('Error in fetching data: ', error )
            })
    }


    //useEffect to fetch data from API when component is mounted
    useEffect( ()=>{
        fetchCharacters()
    }, []);

    return(
        <div>
            {characters.map((character) => (
                <div key={character.id}>
                    <div>{character.name}</div>
                    <img src={character.image} alt={character.name} />
                </div>
            ))}

            
        </div>
    )
}

export default RickyAndMorty;