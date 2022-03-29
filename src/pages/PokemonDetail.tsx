/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useParams } from 'react-router-dom';
import PokemonInfo from "../components/PokemonInfo"
import { useQuery } from "@apollo/client";
import { GET_POKEMON_DETAIL } from "../graphql/query/pokemon-detail";

const PokemonDetail = () => {
    const {name} = useParams<"name">()
    
    return (
        <>
            <div >
                <h1 >hellow world {name}</h1>
                <PokemonInfo />
            </div>
        </>
    )
}

export default PokemonDetail;