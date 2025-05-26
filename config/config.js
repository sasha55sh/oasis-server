require("dotenv").config();

module.exports = {
  server: {
    port: process.env.PORT || 4001,
    host: process.env.HOST || "localhost",
    apiUrl: process.env.API_URL,
    clientUrl: process.env.CLIENT_URL,
  },

  database: {
    url: process.env.DB_URL,
    uri: process.env.DB_URI,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    mongoUri: process.env.MONGO_URI,
  },
};
