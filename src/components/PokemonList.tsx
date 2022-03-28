/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import SelectionCard from './SelectionCard'


const PokemonList = ({data}: any) => {
    const grid = css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 0px auto;
    `
    
    
    

    return (
        <div css={grid}>
            {data?.pokemons.results.map((pokemon: any) => (
                <SelectionCard  name={pokemon.name} element={pokemon.element} image={pokemon.image} />
            ))}
        </div>
    )
}

export default PokemonList;