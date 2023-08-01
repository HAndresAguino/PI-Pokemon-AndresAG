
const { getAllPokemon } = require('../controllers/pokemonsControllers');
const {getPokemonByName} = require('../controllers/pokemonsControllers')
const {getPokemonById} = require('../controllers/pokemonsControllers')
const {postPokemon} = require('../controllers/pokemonsControllers')

const getPokemonHandler = async (req, res) => {
  const { name } = req.query;
  
  try {
    if (name) {
      const response = await getPokemonByName(name);
      return res.status(200).json(response);
    }
    const response = await getAllPokemon();
    return res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error.message);
  }
};


const getPokemonIdHandlerr = async (req, res) => {
  
  const { id } = req.params;
  try {
    const pokemonObject = await getPokemonById(id);
    res.status(200).json(pokemonObject);
  } catch (error) {
    res.status(404).json({ error: error.message});
  }
};



const postPokemonHandler = async (req, res) => {
  try {
    const response = await postPokemon(req.body);
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



module.exports = { postPokemonHandler };



module.exports = {getPokemonHandler, getPokemonIdHandlerr,postPokemonHandler,}
