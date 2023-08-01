const { Pokemon, Types } = require('../db.js');
const axios = require('axios');

const getApiInfo = async () => {
  const URLAPI = 'https://pokeapi.co/api/v2/pokemon?limit=100';

  const apiurl = await axios.get(URLAPI);

  const apiInfo = apiurl.data.results.map(async (cb) => {
    const pokemonData = await axios.get(cb.url);

    return {
      id: pokemonData.data.id,
      name: pokemonData.data.name,
      img: pokemonData.data.sprites.other.dream_world.front_default,
      hp: pokemonData.data.stats[0].base_stat,
      attack: pokemonData.data.stats[1].base_stat,
      defense: pokemonData.data.stats[2].base_stat,
      speed: pokemonData.data.stats[5].base_stat,
      height: pokemonData.data.height,
      weight: pokemonData.data.weight,
      types: pokemonData.data.types.map((type) => type.type.name),
    };
  });
  return Promise.all(apiInfo);
};

// Buscar en la base de datos
const getDBInfo = async () => {

  return await Pokemon.findAll({
    include: {
      model: Types,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};


const getAllPokemon = async () => {
  try {
    const infoApi = await getApiInfo();
    const dbinfo = await getDBInfo();

    // Agregar la propiedad 'types' a los objetos de la base de datos
    const dbinfoWithTypes = dbinfo.map((pokemon) => {
      return {
        ...pokemon.dataValues,
        types: pokemon.Types.map((type) => type.name),
      };
    });

    const infoTotal = [...infoApi, ...dbinfoWithTypes];
    return infoTotal;
  } catch (error) {
    console.error(error.message);
  }
};




// Busca por Nombre___________________________________________________________________________________________________________________

const getPokemonByName = async (name) => {

  const normalizedQuery = name.toLowerCase(); // Convertir a minúsculas

  const pokemonsDB = await getDBInfo()
  const pokemonname = pokemonsDB.find(pokemon => pokemon.name === normalizedQuery)
  if (pokemonname) {
    return pokemonname

  } else {
    const pokemonData = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${normalizedQuery}`)).data;
    if (pokemonData) {
      return pokemonObject = {
        id: pokemonData.id,
        name: pokemonData.name,
        img: pokemonData.sprites.other.dream_world.front_default,
        hp: pokemonData.stats[0].base_stat,
        attack: pokemonData.stats[1].base_stat,
        defense: pokemonData.stats[2].base_stat,
        speed: pokemonData.stats[5].base_stat,
        height: pokemonData.height,
        weight: pokemonData.weight,
        types: pokemonData.types.map((type) => type.type.name),
      };
    }
  }
  throw new Error("No se encontro pokemon")

}


//________________________________________________________________- Busqueda por ID -_________________________________________________



const getPokemonById = async (id) => {

  if (isNaN(+id)) {
    const pokemonFromDatabase = await Pokemon.findOne({
      where: { id }, include: {
        model: Types,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    })
    console.log(pokemonFromDatabase);

    if (pokemonFromDatabase) return pokemonFromDatabase;
    throw new Error("Pokemon not found");

  }

  const pokemonData = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data;
  if (pokemonData) {
    const pokemonObject = {
      id: pokemonData.id,
      name: pokemonData.name,
      img: pokemonData.sprites.other.dream_world.front_default,
      hp: pokemonData.stats[0].base_stat,
      attack: pokemonData.stats[1].base_stat,
      defense: pokemonData.stats[2].base_stat,
      speed: pokemonData.stats[5].base_stat,
      height: pokemonData.height,
      weight: pokemonData.weight,
      types: pokemonData.types.map((type) => type.type.name),
    };
    return pokemonObject;

  }  //no se encuentra en la API, buscar en la base de datos


};

// :__________________________________________________________________________Post Pokemon



const postPokemon = async (Datospokemon) => {
  const { name, img, hp, attack, defense, speed, height, weight, types } = Datospokemon

  const newPokemon = await Pokemon.create({
    name,
    img,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
  });

  const existType = await Types.findAll({ where: { name: types } })
   
    if (!existType) {
        throw new Error('no existe ese tipo');
      }
      console.log(existType.map((e)=> e.id));
      
    // await newPokemon.addTypes(existType.map((ele) => ele.id))

    // types.map(async(type) => await newPokemon.addType(type))

    await newPokemon.addTypes (existType.map((e)=> e.id))

  return newPokemon;    //Hata acá retrocedes__________________
};



module.exports = {
  getAllPokemon,
  getPokemonByName,
  getPokemonById,
  postPokemon

};
