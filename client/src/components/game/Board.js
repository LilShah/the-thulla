import React, { Component } from "react";
import PropTypes from "prop-types";
class Board extends Component {
  static propTypes = {
    G: PropTypes.any.isRequired,
    ctx: PropTypes.any.isRequired,
    moves: PropTypes.any.isRequired,
    playerID: PropTypes.string,
    isActive: PropTypes.bool,
    isMultiplayer: PropTypes.bool
  };
  render() {
    return (
      <div id="gameRender">
        <div class="enclosureTop">
          <div class="top">
            {/* <img class="cards" src="/cards/default/RED_BACK.svg" /> */}
            <img class="cards" src="/cards/default/RED_BACK.svg" />
            {/* <img class="cards" src="/cards/default/RED_BACK.svg" /> */}
            <img class="cards" src="/cards/default/RED_BACK.svg" />
            <img class="cards" src="/cards/default/RED_BACK.svg" />
            {/* <img class="cards" src="/cards/default/RED_BACK.svg" /> */}
            <img class="cards" src="/cards/default/RED_BACK.svg" />
            <img class="cards" src="/cards/default/RED_BACK.svg" />
            {/* <img class="cards" src="/cards/default/RED_BACK.svg" /> */}
            <img class="cards" src="/cards/default/RED_BACK.svg" />
            <img class="cards" src="/cards/default/RED_BACK.svg" />
            {/* <img class="cards" src="/cards/default/RED_BACK.svg" /> */}
            <img class="cards" src="/cards/default/RED_BACK.svg" />
          </div>
        </div>

        <div class="enclosureLeft">
          <div class="left">
            {/* <img class="cardsVert" src="/cards/default/RED_BACK.svg" /> */}
            <img class="cardsVert" src="/cards/default/RED_BACK.svg" />
            {/* <img class="cardsVert" src="/cards/default/RED_BACK.svg" /> */}
            <img class="cardsVert" src="/cards/default/RED_BACK.svg" />
            <img class="cardsVert" src="/cards/default/RED_BACK.svg" />
            {/* <img class="cardsVert" src="/cards/default/RED_BACK.svg" /> */}
            <img class="cardsVert" src="/cards/default/RED_BACK.svg" />
            <img class="cardsVert" src="/cards/default/RED_BACK.svg" />
            {/* <img class="cardsVert" src="/cards/default/RED_BACK.svg" /> */}
            <img class="cardsVert" src="/cards/default/RED_BACK.svg" />
            <img class="cardsVert" src="/cards/default/RED_BACK.svg" />
            {/* <img class="cardsVert" src="/cards/default/RED_BACK.svg" /> */}
            <img class="cardsVert" src="/cards/default/RED_BACK.svg" />
          </div>
        </div>

        <div class="enclosureRight">
          <div class="right">
            {/* <img class="cardsVert" src="/cards/default/RED_BACK.svg" /> */}
            <img class="cardsVert" src="/cards/default/RED_BACK.svg" />
            {/* <img class="cardsVert" src="/cards/default/RED_BACK.svg" /> */}
            <img class="cardsVert" src="/cards/default/RED_BACK.svg" />
            <img class="cardsVert" src="/cards/default/RED_BACK.svg" />
            {/* <img class="cardsVert" src="/cards/default/RED_BACK.svg" /> */}
            <img class="cardsVert" src="/cards/default/RED_BACK.svg" />
            <img class="cardsVert" src="/cards/default/RED_BACK.svg" />
            {/* <img class="cardsVert" src="/cards/default/RED_BACK.svg" /> */}
            <img class="cardsVert" src="/cards/default/RED_BACK.svg" />
            <img class="cardsVert" src="/cards/default/RED_BACK.svg" />
            {/* <img class="cardsVert" src="/cards/default/RED_BACK.svg" /> */}
            <img class="cardsVert" src="/cards/default/RED_BACK.svg" />
          </div>
        </div>

        <div class="enclosureBottom">
          <div class="bottom">
            {/* <img class="cards" src="/cards/default/SQ.svg" /> */}
            <img class="cards" src="/cards/default/S8.svg" />
            {/* <img class="cards" src="/cards/default/S5.svg" /> */}
            <img class="cards" src="/cards/default/C8.svg" />
            <img class="cards" src="/cards/default/DA.svg" />
            {/* <img class="cards" src="/cards/default/DK.svg" /> */}
            <img class="cards" src="/cards/default/DJ.svg" />
            <img class="cards" src="/cards/default/D9.svg" />
            {/* <img class="cards" src="/cards/default/D8.svg" /> */}
            <img class="cards" src="/cards/default/HA.svg" />
            <img class="cards" src="/cards/default/H10.svg" />
            {/* <img class="cards" src="/cards/default/H9.svg" /> */}
            <img class="cards" src="/cards/default/H5.svg" />
          </div>
        </div>

        <div class="topMid">
          <img class="cards" src="/cards/default/SA.svg" />
        </div>
        <div class="rightMid">
          <img class="cards" src="/cards/default/S10.svg" />
        </div>
        <div class="bottomMid">
          <img class="cards" src="/cards/default/SQ.svg" />
        </div>
        <div class="leftMid">
          <img class="cards" src="/cards/default/S6.svg" />
        </div>
        <div class="player0">
          {"\n"}TigerDrifter{"\n\n"} Cards: 8
        </div>
        <div class="player1">
          {"\n"}LilShah{"\n\n"}Cards: 8
        </div>
        <div class="player2">
          {"\n"}SAN302{"\n\n"}Cards: 8
        </div>
        <div class="player3">
          {"\n"}Ashir14{"\n\n"}Cards: 8
        </div>
      </div>
    );
  }
}

export default Board;
