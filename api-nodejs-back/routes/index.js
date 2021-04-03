var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');


/**
 * @api {get} /pokemon/list PokemonList
 * @apiName PokemonList
 * @apiGroup Pokemon
 * @description Devuelve el listado de pokemons 
 */
router.get('/pokemon/list', function (req, res, next) {
  try {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(res => res.json())
      .then(json =>{
        res.status(200).send({pokemons: json})
      }
      );

  } catch (error) {
    res.status(500).send(error);
  }
});

/**
 * @api {post} /pokemon/detail/{id} PokemonDetail
 * @apiName PokemonDetail
 * @apiGroup Pokemon
 * @description Devuelve la información del pokemon dado el id 
 */
router.route('/pokemon/detail/').post((req, res, next) => {
  try {
    fetch('https://pokeapi.co/api/v2/pokemon/'+req.body.id)
      .then(res => res.json())
      .then(json =>{
        res.status(200).send({pokemon: json})
      }
      );

  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
