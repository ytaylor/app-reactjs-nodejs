# Simple Base Pokedex 

Agenda de Pokemons realizada con ReactJS y NodeJs, basada en el API pública  https://pokeapi.co/.  

### Frontend
El frontend es una aplicación web que simula un Pokedex con la información básica de cada Pokemon y ha sido desarollada utilizando ReactJS en su versión 16.14.0, y el framework Reactstrap en su versión 8.9.0. Para obtener la información de los pokemons se ha consumido los endpoints del api mencionada anteriomente. 

![Alt text](pokemon-screen.png?raw=true "Pokemns List View")

Después de descargar el repositorio para iniciar el proyecto ejecutar los siguientes comandos:

- `cd app-reactjs-frontend`
- `yarn install`
- `yarn start`

### Backend
El backend está desarrollado con NodeJs y Express y simula el api pública https://pokeapi.co/. En este caso solo se han desarrolllado los dos endpoints utilizados en la aplicación web, con la variación que en los endopoints que es necesario pasar información se ha utilizado un POST que espera los datos para procesar la información en el cuerpo de la solicitud. 

![Alt text](pokemon-detail?raw=true "Pokemon Detail")

Después de descargar el repositorio para iniciar el proyecto ejecutar los siguientes comandos:

- `cd api-nodejs-back`
- `yarn install`
- `node .bin/www`