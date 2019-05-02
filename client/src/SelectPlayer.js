import React, { Component } from "react";
import ThullaClient from "./components/game/ThullaClient";

class SelectPlayer extends Component {
  state = { playerID: null };
  render() {
    if (this.state.playerID === null) {
      return (
        <div className="list">
          <p>Play as: </p>
          <button
            style={{
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              marginLeft: "1rem",
              marginTop: "1rem"
            }}
            onClick={() => this.setState({ playerID: "0" })}
            className="btn btn-large waves-effect waves-light hoverable blue accent-3 col 12"
          >
            Player 1
          </button>
          <button
            style={{
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              marginLeft: "1rem",
              marginTop: "1rem"
            }}
            onClick={() => this.setState({ playerID: "1zs" })}
            className="btn btn-large waves-effect waves-light hoverable blue accent-3 col 12"
          >
            Player 2
          </button>
          <button
            style={{
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              marginLeft: "1rem",
              marginTop: "1rem"
            }}
            onClick={() => this.setState({ playerID: "2" })}
            className="btn btn-large waves-effect waves-light hoverable blue accent-3 col 12"
          >
            Player 3
          </button>
          <button
            style={{
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              marginLeft: "1rem",
              marginTop: "1rem"
            }}
            onClick={() => this.setState({ playerID: "3" })}
            className="btn btn-large waves-effect waves-light hoverable blue accent-3 col 12"
          >
            Player 4
          </button>
        </div>
      );
    }
    return (
      <div>
        <ThullaClient playerID={this.state.playerID} />
      </div>
    );
  }
}

export default SelectPlayer;
