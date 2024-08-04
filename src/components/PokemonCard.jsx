import './PokemonCard.css'

const PokemonCard = ({ pokemonData}) => {
  return (
    <>
    <li className="pokemon-card">
        <figure>
        <img className='image-css' src={pokemonData.sprites.other.dream_world.front_default}></img>
        </figure>
        <figure>
            <div className='name-css'>
                {pokemonData.name}
            </div>
        </figure>
        <figure>
            <div className='type-css'>
                {pokemonData.types.map((currType)=>currType.type.name).join(", ")}
            </div>
        </figure>
        <div className='grid-three-cols'>
            <p className='pokemon-info'>
                <span>Height:</span>{pokemonData.height}
            </p>
            <p className='pokemon-info'>
                <span>Weight:</span>{pokemonData.weight}
            </p>
            <p className='pokemon-info'>
                <span>Speed:</span>{pokemonData.stats[5].base_stat}
            </p>
            <p className='pokemon-info'>
                <span>Experience:</span>{pokemonData.base_experience}
            </p>
        </div>
    </li>

    </>
  )
}

export default PokemonCard