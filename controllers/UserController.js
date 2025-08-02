const UserService = require("../services/UserService");

class UserController {
  async getUser(req, res) {
    const uid = req.user.uid;
    const user = await UserService.getUserByUid(uid);
    return res.status(200).json(user);
  }

  async updateProfile(req, res) {
    const uid = req.user.uid;
    const { firstName, email } = req.body;
    const updatedUser = await UserService.updateUser(uid, { firstName, email });
    return res.status(200).json(updatedUser);
  }

  async getFavorites(req, res) {
      const favorites = await UserService.getFavorites(req.user.uid);
      res.status(200).json({ favorites });
  }

  async toggleFavorite(req, res) {
      const { product } = req.body;
      const favorites = await UserService.toggleFavorite(req.user.uid, product);
      res.status(200).json({ favorites });
  }
}

module.exports = new UserController();
