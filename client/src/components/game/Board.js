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

  deal = () => {
    this.props.moves.deal();
  };
  render() {
    return (
      <div id="board">
        <button
          style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "1rem"
          }}
          onClick={this.deal}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
          Start
        </button>
      </div>
    );
  }
}

export default Board;
