const Server = require("boardgame.io/server").Server;
const Mongo = require("boardgame.io/server").Mongo;
const Thulla = require("./Game").Thulla;

const server = Server({
  games: [Thulla]
});
if (server.run(4000)) {
  console.log("run");
}
