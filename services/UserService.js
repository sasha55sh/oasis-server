const User = require("../models/userModel");

class UserService {
  async getUserByUid(uid) {
    return await User.findOne({ uid });
  }

  async updateUser(uid, data) {
    const updateFields = {};
    if (data.firstName) updateFields.firstName = data.firstName;
    if (data.email) updateFields.email = data.email;
    return await User.findOneAndUpdate(
      { uid },
      { $set: updateFields },
      { new: true }
    );
  }

  async getFavorites(uid) {
    const user = await User.findOne({ uid });
    return user.favorites || [];
  }

  async toggleFavorite(uid, product) {
    const user = await User.findOne({ uid });
    const exists = user.favorites.find((item) => item.id === product.id);
    if (exists) {
      user.favorites = user.favorites.filter((item) => item.id !== product.id);
    } else {
      user.favorites.push(product);
    }
    await user.save();
    return user.favorites;
  }
}

module.exports = new UserService();
