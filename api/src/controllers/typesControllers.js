const axios = require('axios');
const { Types } = require('../db.js')

// GET | /types
// Obtiene un arreglo con todos los tipos de pokemones.
// En una primera instancia, cuando la base de datos este vacía,
//  deberás guardar todos los tipos que encuentres en la API.
// Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). 
// Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.

const getAllTypes = async () => {
    const types = await Types.findAll();
  
    if (types.length === 0) {
      const response = await axios.get("https://pokeapi.co/api/v2/type");
      const typeNames = response.data.results.map((el) => el.name);
  
      await Types.bulkCreate(typeNames.map((name) => ({ name })));

      const dbtypes =  await Types.findAll()
  
      return  dbtypes;
    }
  
    return types

    }
  
module.exports = {getAllTypes}