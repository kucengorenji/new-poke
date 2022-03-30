/** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";
import { useParams } from 'react-router-dom';
import PokemonInfo from "../components/PokemonInfo"
import { useQuery } from "@apollo/client";
import { GET_POKEMON_DETAIL } from "../graphql/query/pokemon-detail";
import { useEffect, useState } from 'react'

const PokemonDetail = () => {
    const {name} = useParams<"name">()
    const {loading, error, data }: any = useQuery(GET_POKEMON_DETAIL, {
        variables: { name } 
    })
    
    const [myPokemon, setMyPokemon] = useState<any[]>([])

    useEffect(() => {
        const myPokemon = JSON.parse(localStorage.getItem("_mypokemon") || "[]")
        setMyPokemon(myPokemon)
    }, [])
    
    const saveMyPokemon = (pokemon: any) => {
        if(data) {
            setMyPokemon([...myPokemon, data.pokemon])
        }
        localStorage.setItem("_mypokemon", JSON.stringify(myPokemon));
    }

    console.log(myPokemon)
    
    
    

    return (
        <>
            <div >
                <h1 >hellow world {name} this is</h1>
                <button onClick={saveMyPokemon}>save</button>
                <PokemonInfo />
            </div>
        </>
    )
}

export default PokemonDetail;