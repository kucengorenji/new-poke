import { useEffect, useState } from "react";

const MyPokemon = () => {
    const [myPokemon, setMyPokemon] = useState([])

    useEffect(() => {
        const myPokemon = JSON.parse(localStorage.getItem("_mypokemon") || "[]")
        setMyPokemon(myPokemon)
    }, [])

    const deleteAllPokemon = () => {
        localStorage.removeItem("_mypokemon")
        setMyPokemon([])
    }

    return (
        <>
            <h1>hello this is my box component</h1>
        </>
    )
}

export default MyPokemon;