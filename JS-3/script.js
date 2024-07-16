const url = 'https://pokeapi.co/api/v2/pokemon';

function getPokemon(id) {
  return fetch(`${url}/${id}`)
    .then(data => data.json())
    .then(data => data); 
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function  getImageID(id){

  const imageString = '00' + id;
  return imageString.slice (-3);
}

async function showObtions(){
  let pokemonChosen = getRandomInt(3)
  const pokemons = await getPokemons();

  let imageContainer = document.getElementById('image');
  imageContainer.innerHTML=`
  <img class ="hide" src= ${"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + pokemons[pokemonChosen].id + ".png"}>
  `

  let buttonsContainer = document.getElementById('buttons');
  pokemons.forEach(pokemon => {
    buttonsContainer.innerHTML += `
    <button onclick="checkChose(${pokemon.id}, ${pokemons[pokemonChosen].id},'${pokemons[pokemonChosen].name}')"> ${pokemon.name} </button>
    `

  });
  
}

async function getPokemons() {
  const promises = new Array(3).fill(0).map(() => getPokemon(getRandomInt(999)));
  const pokemons = await Promise.all(promises);
  return pokemons;
}


function checkChose(pokemonId, pokemonChosen, pokemonName){
  if(pokemonId == pokemonChosen){
      let resultConatiner = document.getElementById('result');
      resultConatiner.innerHTML=`
      <h1>YOU WON</h1>`
      let pokemonNameContainer = document.getElementById('PokemonName');
      pokemonNameContainer.innerHTML=`
      <h2>Is ${pokemonName}</h2>`
      let imageContainer = document.getElementById('image');
      imageContainer.innerHTML=`
      <img src= ${"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + pokemonChosen + ".png"}>
      `
  } else {
    let resultConatiner = document.getElementById('result');
    resultConatiner.innerHTML=`
    <h1>YOU LOST</h1>`
    let pokemonNameContainer = document.getElementById('PokemonName');
    pokemonNameContainer.innerHTML=`
    <h2>Is ${pokemonName}</h2>`
    let imageContainer = document.getElementById('image');
    imageContainer.innerHTML=`
    <img src= ${"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + pokemonChosen + ".png"}>
    `
  }
}

function clean(){
  let resultContainer = document.getElementById('result');
  let imageContainer = document.getElementById('image');
  let buttonsContainer = document.getElementById('buttons');
  let pokemonNameContainer = document.getElementById('PokemonName');
  pokemonNameContainer.innerHTML=''
  buttonsContainer.innerHTML=''
  imageContainer.innerHTML=''
  resultContainer.innerHTML=''
}




