const { Router } = require('express');
const pokemonRoutes = require('../routes/pokemonRoutes');
const typesRoutes = require ('../routes/typesRouter')
const router = Router();

// Configurar los routers
router.use('/pokemons', pokemonRoutes);
router.use('/types', typesRoutes)


module.exports = router;











