const jwt = require("jsonwebtoken");

class AuthMiddleware {
  async requireAuth(req, res, next) {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
      const token = authHeader.split(" ")[1];
      const decoded = jwt.decode(token); 
      req.user = decoded || null;
    }
    next();
  }

  async optionalAuth(req, res, next) {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
      const token = authHeader.split(" ")[1];
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
      } catch (err) {
        console.warn("Invalid token provided, continuing as guest");
        req.user = null;
      }
    } else {
      req.user = null;
    }
    next();
  }
}

module.exports = new AuthMiddleware();
