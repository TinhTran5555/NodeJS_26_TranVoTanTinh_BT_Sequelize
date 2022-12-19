const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
  "User",
  {
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      field: "user_id",
      
    },
    fullName: {
      type: DataTypes.STRING,
      field: "full_name",
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "pass_word"
    },
  },
  {
    tableName: "users",
    // disable createdAt, updatedAt
    timestamps: false,
    // Bỏ qua cái column password khi tìm kiếm các record
    defaultScope: {
      attributes: {
        exclude: ["pass_word"],
      },
    },
    // Các phương thức được tự động chạy sau một hành động(create/update/delete)
    hooks: {
      // Xoá property password của record được trả ra sau khi create/update thành công
      afterSave: (record) => {
        delete record.dataValues.password;
      },
    },
  }
);
};
