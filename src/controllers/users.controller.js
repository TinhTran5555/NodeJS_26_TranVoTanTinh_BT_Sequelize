// Controller nhận vào request, response
// Nhiệm vụ: chỉ parse request (params, body) sau đó chuyển xuống Service xử lý, nhận kết quả trả về từ Service và trả response về cho client

const userService = require("../services/users.service");

const getUsers = () => {
  return async (req, res) => {
    try {
      const users = await userService.getUsers();
      res.status(200).json({ data: users });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
};

const createUser = () => {
  return async (req, res) => {
    try {
      const user = req.body;
      const createdUser = await userService.createUser(user);
      res.status(200).json({ data: createdUser });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
};

const deleteUser = () => {
  return async (req, res) => {
    try {
      const { userId } = req.params;
      const createdUser = await userService.deleteUser(userId);
      res.status(200).json({ data: true });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
};

module.exports = {
  getUsers,
  createUser,
  deleteUser,
};
