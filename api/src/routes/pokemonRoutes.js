const { Router } = require('express');
 const {getPokemonHandler, getPokemonIdHandlerr, postPokemonHandler} = require('../Handlers/pokemonHandler');

const router = Router();

router.get('/:id', getPokemonIdHandlerr);
router.get('/', getPokemonHandler);
router.post("/", postPokemonHandler);


module.exports = router;
