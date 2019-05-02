const Server = require("boardgame.io/server").Server;
const Thulla = require("./client/src/components/game/Game").Thulla;

const server = Server({
  games: [Thulla]
});
server.run(8000, () => console.log("GAME SERVER IS RUNNING ON PORT 8000"));
