const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
 return sequelize.define(
  "Order",
  {
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,   
        allowNull: false,
        field: "user_id",
        
      },
    foodId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      field: "food_id"
    },
    amount: {
        type: DataTypes.INTEGER,      
    },
    code: {
        type: DataTypes.STRING,
      }, 
    arrSubId: {
      type: DataTypes.STRING,
      field: "arr_sub_id",
    },  
  },
  {
    tableName: "order",
    timestamps: false,    
  }
);
}