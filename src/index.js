import { createApiClient } from "../api/api";

const api = createApiClient("https://pokeapi.co/api/v2/pokemon");
const pokemonsDiv = document.getElementById("pokemons");

api.getPokemons(60).then(data => {
    data.forEach(element => {
        const pokemon = document.createElement("div");
        pokemon.innerHTML = `<h1>${element.name}</h1>`;
        pokemonsDiv.appendChild(pokemon);
    });
});

api.getPokemon("pikachu").then(data => {
    console.log(data.name,"data received = ",data);
});