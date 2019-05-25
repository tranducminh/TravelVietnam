let config = require("./config.json");

module.exports = {
    getDbConnectionString: function () {
        return `mongodb+srv://${config.database.username}:${config.database.password}@cluster0-lcwwz.mongodb.net/${config.database.databaseName}?retryWrites=true`;
    }
}