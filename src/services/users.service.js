const User = require("../models/User");

// Service nhận vào data từ controller
// Nhiệm vụ: xử lý nghiệp vụ của ứng dụng, sau đó gọi tới model của sequelize để query xuống DB, nhận data từ DB và return về cho controller

const getUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw error;
  }
};

const createUser = async (data) => {
  try {
    const user = await User.findOne({
      where: {
        email: data.email,
      },
    });
    if (user) {
      throw new Error("Email is existed");
    }

    const createdUser = await User.create(data);
    return createdUser;
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (userId) => {
  try {
    const user = await User.findOne({
      where: {
        userId: userId,
      },
    });

    if (!user) {
      throw new Error("user not found");
    }

    // await User.destroy({ where: { userId: userId } });
  } catch (error) {
    throw error;
  }
};

// Update:
// - User.findOne({where: {id: 1}}) - Nếu không tìm thấy trả về lỗi
// - User.update(data, {where: {id: 1}})
// - User.findOne({where: {id: 1}})

module.exports = {
  getUsers,
  createUser,
  deleteUser,
};
