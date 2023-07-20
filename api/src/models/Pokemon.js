const DataTypes  = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
	  set(value){
        this.setDataValue("name",value.toLowerCase())
      }
    },
    img: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true, //Con esto valido que si es una URL
      }
    },
	
  	hp: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		attack: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		defense: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		speed: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		height: {
			type: DataTypes.FLOAT, //Es con decimales. Que se pueden decimales
		},
		weight: {
			type: DataTypes.FLOAT,
		},




      
  },{ timestamps: false });
};
