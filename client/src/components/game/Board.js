import React, { Component } from "react";
import PropTypes from "prop-types";

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

  boardSet = () => {};
  deal = () => {
    this.props.moves.deal();
    this.setState({ started: true });
    console.log("hello");
    let cards = [];
    if (this.state.started) {
      console.log("hello");
      if (this.props.G.deck) {
        console.log("hello");
        for (var i = 0; i < 13; ++i) {
          var imgsrc = "/cards/default/" + this.props.G.deck[i][0] + ".svg";
          let newElement = <img src={imgsrc} id={this.props.G.deck[i][0]} />;
          cards.push(newElement);
        }
      }
      console.log("hello");
      //game = <div className="cards">a</div>;
      return <tbody>{cards}</tbody>;
    }
  };
  playCard = () => {
    this.props.moves.playCard(0, "CJ");
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
            marginTop: "1rem"
          }}
          onClick={this.onClick}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
          Start
        </button>{" "}
        {this.boardSet}
        {this.state.arr}
      </div>
    );
  }
}

export default Board;
