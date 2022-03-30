import PokemonList from "../components/PokemonList";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../graphql/query/pokemon-list";

const Home = () => {
    const { loading, error, data } = useQuery(GET_POKEMONS, {
        variables: {
            limit: 14,
            offset: 0,
        },
      });

    return(
        <>
            <PokemonList data={data} />
        </>
    )
}

export default Home;