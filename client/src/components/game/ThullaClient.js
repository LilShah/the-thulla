import { Client } from "boardgame.io/react";
import { Thulla } from "./Game";
import Board from "./Board";

const ThullaClient = Client({
  game: Thulla,
  numPlayers: 4,
  board: Board,
  multiplayer: { server: "localhost:8000" },
  debug: true
});

export default ThullaClient;
