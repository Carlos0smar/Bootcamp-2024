import './styles/pokemon-name.css'
type PokemonData = {
    name: string,
    index: string
}
const pokemonName = (pokemonData: PokemonData) => {
    return(
        <div className='pokemonNameContainer'>
            <div className="pokemonIndex">#{pokemonData.index}</div>
            <div className="pokemonName">{pokemonData.name}</div>
        </div>
    )
}

export default pokemonName;