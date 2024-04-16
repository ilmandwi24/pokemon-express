import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from '../components/PokemonCard';

const Home = () => {
    const [pokemonData, setPokemonData] = useState([])
    const [loading, isLoading] = useState(true)

    const [loadPoke, setLoadPoke] = useState(
        "https://pokeapi.co/api/v2/pokemon?limit=8"
    );  

    const fetchPokemonList = async () => {
        try {
            const response = await axios.get(loadPoke);

            setLoadPoke(response.data.next);
            await loadPokemon(response.data.results)
            isLoading(false)
            

        } catch (error) {
            console.error('Error fetching Pokemon list:', error);
        }
    };
    useEffect(() => {
           fetchPokemonList();
    }, []);

    const loadPokemon = async (data) => {
        let _pokemonData = await Promise.all(data.map(async pokemon => {
            let pokemonGet = await getPokemon(pokemon)
            return pokemonGet
        }))
        setPokemonData(_pokemonData)
        
    }

    function getPokemon({ url }) {
        return new Promise((resolve, reject) => {
            fetch(url).then(res => res.json())
                .then(data => {
                    resolve(data)
                })
        })
    }
    return (
        <div>
            <h2 className='text-xl mb-5 font-medium'>Pokemon List</h2>
            {loading ? <h1>Loading...</h1> : <ul className='grid grid-cols-2 gap-4 md:w-4/6 mx-auto '>
                {pokemonData.map(pokemon => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon}/>
                ))}
                
            </ul>}
           
        </div>
  )
}
export default Home