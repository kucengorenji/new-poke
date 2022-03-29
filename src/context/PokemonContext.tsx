import { createContext } from 'react'

interface PokemonContextType {
    myPokemon: [];
    addPokemon: (pokemon: any) => void;
    removePokemon: (pokemon: any) => void;
    removeAllPokemon: () => void;
}

export const PokemonContext = createContext<PokemonContextType>({
    myPokemon: [],
    addPokemon: () => {},
    removePokemon: () => {},
    removeAllPokemon: () => {},
  });
