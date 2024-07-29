import './styles/pokemon-type.css';
type PokemonType = {
    type: string,
}

const getTypePokemonClass = (type: string) => {
    const generalType = 'poekonType';
    switch (type) {
        case 'fire':
            return generalType +' poekonTypeFire';
        case 'water':
            return generalType +' poekonTypeWater';
        case 'grass':
            return generalType +' poekonTypeGrass';
        case 'ground':
            return generalType +' poekonTypeGround';

        default:
            return generalType + ' poekonTypeDefault'; // Fallback class
    }
}

const pokemonType = (pokemonType: PokemonType) => {
    return(
        <div className={getTypePokemonClass(pokemonType.type)}>
            {pokemonType.type}
        </div>
    )
}

export default pokemonType;