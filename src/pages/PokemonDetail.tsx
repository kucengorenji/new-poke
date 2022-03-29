/** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";
import { useParams } from 'react-router-dom';
import PokemonInfo from "../components/PokemonInfo"
import { useQuery } from "@apollo/client";
import { GET_POKEMON_DETAIL } from "../graphql/query/pokemon-detail";

const PokemonDetail = () => {
    const {name} = useParams<"name">()
    const { data }: any = useQuery(GET_POKEMON_DETAIL, {
        variables: { name }, errorPolicy: "all" 
    })
    console.log(data)

    return (
        <>
            <div >
                <h1 >hellow world {name} this is</h1>
                <PokemonInfo />
            </div>
        </>
    )
}

export default PokemonDetail;