/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import SelectionCard from './SelectionCard'

export type PokemonProps = {
    data?: Pokemon.PokemonList;
}

const PokemonList = ({data}: PokemonProps) => {
    const grid = css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 0px auto;
    `

    return (
        <div css={grid}>
            {data?.results.map((pokemon: Pokemon.PokemonItem) => (
                <SelectionCard key={pokemon.id} name={pokemon.name} image={pokemon.image} />
            ))}
        </div>
    )
}

export default PokemonList;