import PokemonList from "../components/PokemonList";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../graphql/query/pokemon-list";

const Home = () => {
    const { loading, error, data } = useQuery<{ pokemons: Pokemon.PokemonList }>(GET_POKEMONS, {
        variables: {
            limit: 14,
            offset: 0,
        },
      });

      console.log(data)

    return(
        <>
            <PokemonList data={data?.pokemons} />
        </>
    )
}

export default Home;