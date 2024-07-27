
type Role = 'Admin' | 'User'

let PI: number;
let age: number;
let PersonName: string;
let maybe: number | string;
let rol: Role;


rol = 'User';
maybe = 25;
PI = Math.PI;
PersonName = 'Alexander';
age = 24
maybe = 'something else';
rol = 'Admin'; // can be Admin or User



type person = {
    name: string,
    age: number,
    rol: Role
}

const person: any = {
    name: PersonName,
    age: age,
    rol: rol // can be Admin or User
}

type PokemonType = {
    slot: number;
    type: {
        name: string;
        url: string;
    }
}

type PokemonMovement = {
    move : {
        name: string;
        url: string;
    }
}


interface PokemonSprites {
    back_default: string;
    front_default: string;
}


interface Pokemon {
    id: number
    name: string
    height: number
    weight: number
    base_experience?: number
    types: Array<PokemonType>
    moves: Array<PokemonMovement>
    // sprites: PokemonSprites
    // sprites: {[key:string]: string}
    sprites: Record<string,string>
}


const pikachu: Pokemon = {
    id: 25,
    name: 'pikachu',
    height:4,
    weight: 60,
    base_experience: 112, // this can be optional value
    types: [
        {
            slot: 1,
            type: {
                name:"electric",
                url:"https://pokeapi.co/api/v2/type/13/"
            },
        }
    ],
    moves: [
        {
            move: {
                name: "thunderbolt",
                url: "https://pokeapi.co/api/v2/move/85/"
            },
        },
        {
            move: {
                name: "thunder",
                url: "https://pokeapi.co/api/v2/move/87/",
            },
        },
        {
            move: {
                name: "iron-tail",
                url: "https://pokeapi.co/api/v2/move/231/"
            },
        },
    ],
    sprites: {
        back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    }
}

console.log(person);
console.log(pikachu);