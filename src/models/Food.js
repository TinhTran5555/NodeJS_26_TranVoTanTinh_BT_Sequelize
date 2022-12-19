const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return  sequelize.define(
        "Food",
        {
            foodId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                field: "food_id",
                autoIncrement: true,
            },
            foodName: {
                type: DataTypes.STRING,
                field: "food_name",
                allowNull: false,
            },
            image: {
                type: DataTypes.STRING,
            },
            price: {
                type: DataTypes.FLOAT,
            },
            
            description: {
                type: DataTypes.STRING,
                field: "desc"
            },
            typeId: {
                type: DataTypes.INTEGER,
                field: "type_id",
            },
        },
        {
            tableName: "food",
            timestamps: false,
        }
    );
}