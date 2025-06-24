import { useEffect, useState } from "react";

export default function Characters(){

    const [characters, setCharacters] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    const getCharacters = async (page) => {
        const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        try {
            if(!res.ok){
                throw new Error ('No se ha podido acceder a la API')
            }
            const data = await res.json()
            setCharacters(data.results)
        } catch (error) {
            console.error(error)
        }
    }

    const handleNextClick = () => {
        setCurrentPage(currentPage+1)
    }

    const handlePreviousClick = () => {
        if(currentPage > 1) setCurrentPage(currentPage-1)
    }

    useEffect(() => {
        getCharacters(currentPage)
    }, [currentPage])

    return(
        <>
        <h1>Characters Rick & Morty</h1>
        <button onClick={handlePreviousClick}>Previus page</button>
        <button onClick={handleNextClick}>Next page</button>
        <ul>
            {characters.map(character => <li key={character.id}>Character: {character.name}</li>)}
        </ul>
        </>
    )
}