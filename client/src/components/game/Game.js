import React, { Component } from "react";
import Board from "./Board";
import { Client } from "boardgame.io/react";
import { Game } from "boardgame.io/core";

const cards = [
  "CA",
  "C2",
  "C3",
  "C4",
  "C5",
  "C6",
  "C7",
  "C8",
  "C9",
  "C10",
  "CJ",
  "CQ,",
  "CK",
  "DA",
  "D2",
  "D3",
  "D4",
  "D5",
  "D6",
  "D7",
  "D8",
  "D9",
  "D10",
  "DJ",
  "DQ,",
  "DK",
  "HA",
  "H2",
  "H3",
  "H4",
  "H5",
  "H6",
  "H7",
  "H8",
  "H9",
  "H10",
  "HJ",
  "HQ,",
  "HK",
  "SA",
  "S2",
  "S3",
  "S4",
  "S5",
  "S6",
  "S7",
  "S8",
  "S9",
  "S10",
  "SJ",
  "SQ,",
  "SK"
];
function getSuit(card) {
  let suit = null;
  if (card.charAt(0) === "C") {
    suit = 0;
  } else if (card.charAt(0) === "D") {
    suit = 1;
  } else if (card.charAt(0) === "H") {
    suit = 2;
  } else if (card.charAt(0) === "S") {
    suit = 3;
  }
  return suit;
}
function getDegree(card) {
  let degree = null;
  if (card.charAt(1) === "2") {
    degree = 0;
  } else if (card.charAt(1) === "3") {
    degree = 1;
  } else if (card.charAt(1) === "4") {
    degree = 2;
  } else if (card.charAt(1) === "5") {
    degree = 3;
  } else if (card.charAt(1) === "6") {
    degree = 4;
  } else if (card.charAt(1) === "7") {
    degree = 5;
  } else if (card.charAt(1) === "8") {
    degree = 6;
  } else if (card.charAt(1) === "9") {
    degree = 7;
  } else if (card.charAt(1) === "1") {
    degree = 8;
  } else if (card.charAt(1) === "J") {
    degree = 9;
  } else if (card.charAt(1) === "Q") {
    degree = 10;
  } else if (card.charAt(1) === "K") {
    degree = 11;
  } else if (card.charAt(1) === "A") {
    degree = 12;
  }
  return degree;
}

export const Thulla = Game({
  setup: () => ({
    deck: [...Array(52)].map(e => Array(2)),
    deckIndex: 0,
    table: Array(4).fill(null),
    tableIndex: 0,
    turn: 0
  }),

  moves: {
    fillDeck(G, ctx) {
      for (let i = 0; i < 52; ++i) {
        G.deck[i][0] = cards[i];
      }
    },
    shuffle(G, ctx) {
      G.deck = ctx.random.shuffle(G.deck);
    },
    drawCard(G, id) {
      if (G.deckIndex < 53) {
        if (G.deck[G.deckIndex][1] === null) {
          G.deck[G.deckIndex][1] = id;
        }
        G.deckIndex++;
      }
    },
    setTurn(G, ctx) {
      if (G.move === 0) {
        for (let i = 0; i < 52; ++i) {
          if (G.deck[i][0] == "SA") {
            ctx.currentPlayer = G.deck[i][1];
            G.deck[i][0] = null;
            break;
          }
        }

        G.turn++;
      }
      if (G.tableIndex === 0) {
      }
    },
    playCard(G, ctx) {}
  }
});
