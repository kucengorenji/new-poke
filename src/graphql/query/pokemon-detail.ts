import { gql } from '@apollo/client'

export const GET_POKEMON_DETAIL = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`;

export const getPokemonVariable = {
  limit: 10,
  offset: 0,
};