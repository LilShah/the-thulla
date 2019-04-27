import React, { Component } from "react";
import Board from "./Board";
import { Client } from "boardgame.io/react";
import { Game } from "boardgame.io/core";
import { get } from "https";

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
    table: [...Array(4)].fill(null).map(e => Array(null).fill(null)),
    tableIndex: 0,
    turn: 0,
    p0Cards: [...Array(13)].fill(null).map(e => Array(null).fill(0)),
    p1Cards: [...Array(13)].fill(null).map(e => Array(null).fill(0)),
    p2Cards: [...Array(13)].fill(null).map(e => Array(null).fill(0)),
    p3Cards: [...Array(13)].fill(null).map(e => Array(null).fill(0)),
    deckSize: Array(4).fill(12)
  }),

  moves: {
    deal(G) {
      let ctr = 52;
      let temp;
      let index;

      while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = cards[ctr];
        console.log("Array: " + temp);
        cards[ctr] = cards[index];
        cards[index] = temp;
      }
      let j = 0;
      for (let i = 0; i < 52; ++i) {
        G.deck[i][0] = cards[i];
        G.deck[i][1] = j;
        if ((i + 1) % 13 === 0) {
          j++;
        }
      }
      for (let j = 0; j < 13; ++j) {
        G.p0Cards[j][0] = getSuit(G.deck[j][0]);
        G.p0Cards[j][1] = getDegree(G.deck[j][0]);
        G.p1Cards[j][0] = getSuit(G.deck[j * 2][0]);
        G.p1Cards[j][1] = getDegree(G.deck[j * 2][0]);
        G.p2Cards[j][0] = getSuit(G.deck[j * 3][0]);
        G.p2Cards[j][1] = getDegree(G.deck[j * 3][0]);
        G.p3Cards[j][0] = getSuit(G.deck[j * 4][0]);
        G.p3Cards[j][1] = getDegree(G.deck[j * 4][0]);
      }
      G.deck = null;
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
    sortHand(G) {
      G.p0Cards.sort(function(a, b) {
        return a[1] - b[1];
      });
      G.p1Cards.sort(function(a, b) {
        return a[1] - b[1];
      });
      G.p2Cards.sort(function(a, b) {
        return a[1] - b[1];
      });
      G.p3Cards.sort(function(a, b) {
        return a[1] - b[1];
      });
      G.p0Cards.sort(function(a, b) {
        return a[0] - b[0];
      });
      G.p1Cards.sort(function(a, b) {
        return a[0] - b[0];
      });
      G.p2Cards.sort(function(a, b) {
        return a[0] - b[0];
      });
      G.p3Cards.sort(function(a, b) {
        return a[0] - b[0];
      });
    },
    valid(G, playerID) {
      if (G.tableIndex === 0) return true;
      else {
        for (let i = G.deckSize[playerID].length; i >= 0; ++i) {
          if (playerID === 0) {
            if (G.p0Cards[i][0] === getSuit(G.table[G.tableIndex])) {
              return false;
            }
          } else if (playerID === 1) {
            if (G.p1Cards[i][0] === getSuit(G.table[G.tableIndex])) {
              return false;
            }
          } else if (playerID === 2) {
            if (G.p2Cards[i][0] === getSuit(G.table[G.tableIndex])) {
              return false;
            }
          } else if (playerID === 3) {
            if (G.p3Cards[i][0] === getSuit(G.table[G.tableIndex])) {
              return false;
            }
          }
        }
      }
      return true;
    }
  },
  thullaa(G) {
    if (G.tableIndex == 0) return false;
    else if (G.table[G.tableIndex][0] === G.table[G.tableIndex - 1][0])
      return false;
    else return true;
  },
  playCard(G, ctx, id, card) {
    let a = Array(2).fill(null);
    a[0] = getSuit(card);
    a[1] = getDegree(card);
    if (this.valid(id)) {
      G.table.push(a);
      G.tableIndex++;
      if (G.tableIndex > 3) G.tableIndex = 0;
      if (G.thullaa()) {
        if (id == 0) {
          for (let i = 0; i < G.tableIndex; ++i) G.p0Cards.push(G.table[i]);
        }
        if (id == 1) {
          for (let i = 0; i < G.tableIndex; ++i) G.p1Cards.push(G.table[i]);
        }
        if (id == 2) {
          for (let i = 0; i < G.tableIndex; ++i) G.p2Cards.push(G.table[i]);
        }
        if (id == 3) {
          for (let i = 0; i < G.tableIndex; ++i) G.p3Cards.push(G.table[i]);
        }
        G.sortHand();
      }
    }
  }
});
