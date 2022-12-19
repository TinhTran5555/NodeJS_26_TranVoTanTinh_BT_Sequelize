const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "RateRes",
    {
      userId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          field: "user_id",
          
        },
      resId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: "res_id"
      },
      amount: {
          type: DataTypes.INTEGER,      
      },
      dateRate: {
        type: DataTypes.DATE,
        field: "date_rate",
      },  
    },
    {
      tableName: "rate_res",
      timestamps: false,    
    }
  );
}
