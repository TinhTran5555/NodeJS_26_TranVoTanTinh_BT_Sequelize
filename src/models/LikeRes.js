const { DataTypes } = require("sequelize");
const sequelize = require(".");

const LikeRes = sequelize.define(
  "LikeRes",
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
    dateLike: {
      type: DataTypes.DATE,
      field: "date_like",
    },
   
    
  },
  {
    tableName: "like_res",
    timestamps: false,    
  }
);

module.exports = LikeRes;
