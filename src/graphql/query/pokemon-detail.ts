import { gql } from '@apollo/client'

export const GET_POKEMON_DETAIL = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      abilities {
        ability {
          name
        }
      }
      stats {
        stat {
          name
        }
        base_stat
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
      message
      status
    }
  }
`;

export const getPokemonVariable = {
  limit: 10,
  offset: 0,
};

