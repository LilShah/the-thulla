import React, { Component } from "react";
import PropTypes from "prop-types";
import index from "./index.css";
import c1 from "./c1.css";

class Board extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      started: false,
      arr: null
    };
  }

  static propTypes = {
    G: PropTypes.any.isRequired,
    ctx: PropTypes.any.isRequired,
    moves: PropTypes.any.isRequired,
    playerID: PropTypes.string,
    isActive: PropTypes.bool,
    isMultiplayer: PropTypes.bool
  };
  playCard = (a, b) => {
    console.log(b);
    this.props.moves.playCard(a, b);
  };

  boardSet = () => {};
  deal = () => {
    this.props.moves.deal();
    this.setState({ started: true });
    let cards = [];
    if (this.state.started) {
      for (var i = 0; i < 13; ++i) {
        var imgsrc = "/cards/default/" + this.props.G.deck[i][0] + ".svg";
        let newElement = (
          <img
            src={imgsrc}
            onClick={this.playCard(
              this.props.G.playerID,
              this.props.G.deck[i][0]
            )}
          />
        );
        cards.push(newElement);
      }
      //game = <div className="cards">a</div>;
    }
    return <tbody>{cards}</tbody>;
  };

  onClick() {
    this.state.arr = this.deal();
  }

  render() {
    return (
      <div id="board">
        <button
          // disabled={this.state.started}
          style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            margin: "1rem"
          }}
          onClick={this.onClick}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
          Start
        </button>{" "}
        {this.boardSet}
        {this.state.arr}

        <div id="gameRender">
        <div class="enclosureBottom">
          <div class="bottom">
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
      </div>
      </div>
    );
  }
}

export default Board;
