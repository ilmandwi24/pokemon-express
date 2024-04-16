import { create } from 'zustand';

const pokemonStore = (set) => ({
  // state data and actions will go here
  pokemon: [],
  addPokemon: (pokemon, primary) =>{
      pokemon.primary = primary;
    set((state)=>({
        pokemon: [...state.pokemon, pokemon]
    }));
  },
    releasePokemon: (primary) => {
      set((state) => ({
          pokemon: state.pokemon.filter((data) => {
              return data.primary !== primary;
          }),
      }));
  },
    renameTitle: (updatedTitle, primary) => {
        set((state) => ({
            pokemon: state.pokemon.map((data) => {
                if (data.primary === primary) {
                    data.name = updatedTitle;
                }
                return data;
            }),
        }));
     
    },
});
export const usePokemonStore = create(pokemonStore);