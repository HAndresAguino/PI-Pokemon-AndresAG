const {Router} = require ('express')

const {getTypesHandler} = require('../Handlers/typesHandler')

const router = Router();

router.get('/', getTypesHandler)

module.exports = router