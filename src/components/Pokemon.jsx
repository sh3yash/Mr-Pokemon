import { useEffect, useState } from 'react';
import './Pokemon.css';
import './PokemonCard'
import PokemonCard from './PokemonCard';


const Pokemon = () => {
    const API = "https://pokeapi.co/api/v2/pokemon?limit=90";
    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [pokemonRes, setPokemonRes]=useState([]);
    const [search, setSearch]=useState("");

    const fetchPokemon = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            setApiData(data);

            setLoading(false);

            const detailedPokemonData= data.results.map(async(currPokemon)=>{
                const res =await fetch(currPokemon.url);
                const data=await res.json();
                // console.log(data);
                return data;
            });

            
            const detailedResponses=await Promise.all(detailedPokemonData);
            // console.log(detailedResponses);
            setPokemonRes(detailedResponses);
 
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    const searchData= pokemonRes.filter((currCard)=>
        currCard.name.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        fetchPokemon();
    }, []);

    if (loading)
        return (

        <div>
            loading...
        </div>
        )
        return (
            <div className='all-component'>
                <div className='header'>
                    Mr Pokemon
                </div>
                <div className='search-css'>
                    <input type='text'  
                    className='search-bar' 
                    placeholder='Search Here'
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}></input>
                </div>
                <div>
                    <ul className='cards'>
                        {searchData.map((currPokemon)=>{
                            return(
                                <PokemonCard key={currPokemon.id} pokemonData={currPokemon}/>

                            ); 

                        })}
                    </ul>

                </div>
            </div>
        );

    } 
    


export default Pokemon;
