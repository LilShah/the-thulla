import React, { Component } from "react";
import PropTypes from "prop-types";
import index from "./index.css";

class Board extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      started: 0,
      arr: null,
      card: null
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
    this.setState({ started: this.state.started + 1 });
    let cards = [];
    for (var i = 0; i < 13; ++i) {
      var imgsrc = "/cards/default/" + this.props.G.deck[i][0] + ".svg";
      let newElement = <img src={imgsrc} id={this.props.G.deck[i][0]} />;
      cards.push(newElement);
    }
    //game = <div className="cards">a</div>;
    return <tbody>{cards}</tbody>;
  };
  playCard = () => {
    this.props.moves.playCard(0, this.state.card);
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
        <div className=".column1">
        <img src="/cards/default/RED_BACK(1).svg" ></img>
        <img src="/cards/default/RED_BACK(1).svg" ></img>
        </div>
        <div className=".column1">
        <img src="/cards/default/RED_BACK(1).svg" ></img>
        <img src="/cards/default/RED_BACK(1).svg" ></img>
        </div>
        <div className=".column1">
        <img src="/cards/default/RED_BACK(1).svg" ></img>
        <img src="/cards/default/RED_BACK(1).svg" ></img>
        </div>
        <div className=".column1">
        <img src="/cards/default/RED_BACK(1).svg" ></img>
        <img src="/cards/default/RED_BACK(1).svg" ></img>
        </div>
        <div className=".column1">
        <img src="/cards/default/RED_BACK(1).svg" ></img>
        <img src="/cards/default/RED_BACK(1).svg" ></img>
        </div>
        <div className=".column1">
        <img src="/cards/default/RED_BACK(1).svg" ></img>
        <img src="/cards/default/RED_BACK(1).svg" ></img>
        </div>

        
      </div>
    );
  }
}

export default Board;
