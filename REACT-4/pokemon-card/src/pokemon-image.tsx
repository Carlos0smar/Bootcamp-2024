import './styles/pokemon-image.css'
const pokemonImage = (props: { src: string }) => {
    return (
        <div >
            <img src={props.src} alt='pokemon' className='pokemonImage'  />
        </div>
    );
}

export default pokemonImage;