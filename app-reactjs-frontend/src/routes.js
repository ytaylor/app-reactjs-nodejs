import Pokemon from "views/Pokemon.js";
import PokemonList from 'views/PokemonList'; 


var routes = [
  {
    path: "/dashboard",
    name: "Pokedex",
    component: PokemonList,
    layout: "/admin",
  },
  {
    path: "/pokemon",
    name: "Detalle del Pokemon",
    component: Pokemon,
    layout: "/admin",
  },
];
export default routes;
