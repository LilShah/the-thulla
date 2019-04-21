import { Client } from "boardgame.io/react";
import { AI } from "boardgame.io/ai";
import TicTacToe from "./GameLogic";
import Board from "./GameBoard";

const thulla = Client({
  game: TicTacToe,
  board: Board,
  ai: AI({
    enumerate: G => {
      let moves = [];
      for (let i = 0; i < 9; i++) {
        if (G.cells[i] === null) {
          moves.push({ move: "clickCell", args: [i] });
        }
      }
      return moves;
    }
  })
});

export default thulla;
