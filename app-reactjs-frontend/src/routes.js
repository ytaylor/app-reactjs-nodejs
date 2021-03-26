import AllPokemons from "views/list_pokems";
import Home from "views/Home";
import CustomPokemon from "views/custom_pokem"; 

var routes = [
  {
    path: "/home",
    name: "Home",
    icon: "ni ni-tv-2 text-primary",
    component: Home,
    layout: "/admin",
  },
  {
    path: "/custompokemon",
    name: "CustomPokemon",
    icon: "ni ni-bullet-list-67 text-red",
    component: CustomPokemon,
    layout: "/admin",
  },
  {
    path: "/actualizar",
    name: "Actualizar Nanny",
    icon: "ni ni-bullet-list-67 text-red",    
    component: AllPokemons,
    layout: "/admin",
  }
];
export default routes;
