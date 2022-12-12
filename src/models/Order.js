const { DataTypes } = require("sequelize");
const sequelize = require(".");

const Order = sequelize.define(
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

module.exports = Order;
