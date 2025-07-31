const AuthService = require("../services/AuthService");

class AuthController {
  async verifyCode(req, res) {
    const { idToken } = req.body;
    const { user, token } = await AuthService.verifyCode(idToken);
    return res.status(201).json({ user, token });
  }
}

module.exports = new AuthController();
