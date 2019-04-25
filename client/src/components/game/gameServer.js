const Server = require("boardgame.io/server").Server;
const Mongo = require("boardgame.io/server").Mongo;
const Thulla = require("./Game").Thulla;

const server = Server({
  games: [Thulla],
  db: new Mongo({
    url:
      "mongodb+srv://LilShah:lullimeri@thulladb-w9qjp.gcp.mongodb.net/test?retryWrites=true",
    dbname: "gameState"
  })
});
server.run(4000);
