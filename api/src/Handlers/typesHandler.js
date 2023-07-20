const  {getAllTypes}  = require("../controllers/typesControllers");


const getTypesHandler = async (req, res) => {
  try {
    const types = await getAllTypes();
    res.json(types);
  } catch (error) {
    res.status(402).json({ error: error.message });
  }
};

module.exports = {
  getTypesHandler,
};
