const admin = require("../config/firebase");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

class AuthService {
  async verifyCode(idToken) {
    const decoded = await admin.auth().verifyIdToken(idToken);
    const { uid, phone_number } = decoded;

    let user = await User.findOne({ phone: phone_number });
    if (user) {
      user.uid = uid;
      await user.save();
    } else {
      user = await User.create({
        uid,
        phone: phone_number,
      });
    }

    const token = jwt.sign({ uid: user.uid }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return { user, token };
  }
}

module.exports = new AuthService();
