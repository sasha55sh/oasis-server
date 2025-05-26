const configuration = require("./config/config");

const config = {
  mongodb: {
    url: configuration.database.uri,
    databaseName: "oasis",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 3600000,
      socketTimeoutMS: 3600000,
    },
  },
  migrationsDir: "migrations",
  changelogCollectionName: "changelog",
  migrationFileExtension: ".js",
  useFileHash: false,
  moduleSystem: "commonjs",
};

module.exports = config;
