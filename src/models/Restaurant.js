const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
  return sequelize.define(
  "Restaurant",
  {
    resId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "res_id"
    },
    resName: {
      type: DataTypes.STRING,
      field: "res_name",
    },
    image: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING,
      field: "desc"
    },
    
  },
  {
    tableName: "restaurant",
    timestamps: false,    
  }
);

}