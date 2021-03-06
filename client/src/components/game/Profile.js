import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import axios from "axios";
import { Link } from "react-router-dom";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      xp: "",
      level: "",
      played: "",
      wins: "",
      losses: ""
    };
  }
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  /* componentDidMount() {
    var MongoClient = require("mongodb").MongoClient;
    var url =
      "mongodb+srv://LilShah:lullimeri@thulladb-w9qjp.gcp.mongodb.net/Thulla?retryWrites=true";
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("Thulla");
      const user = this.props.auth;
      var query = { name: user.name };
      dbo
        .collection("customers")
        .find(query)
        .toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          db.close();
        });
    });
  } */
  render() {
    const { user } = this.props.auth;
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12">
            <h4>
              <p className="flow-text grey-text text-darken-1">
                You are logged into{" "}
                <span style={{ fontFamily: "monospace" }}>Thulla</span> 👏
              </p>
              <p className="flow-text grey-text text-darken-1 col s8">
                name: {user.name}
                <span style={{ fontFamily: "monospace" }} />
              </p>
              <p className="flow-text grey-text text-darken-1 col s8">
                xp: 0<span style={{ fontFamily: "monospace" }} />
              </p>
              <p className="flow-text grey-text text-darken-1 col s8">
                level: 1<span style={{ fontFamily: "monospace" }} />
              </p>
              <p className="flow-text grey-text text-darken-1 col s8">
                played: 0<span style={{ fontFamily: "monospace" }} />
              </p>
              <p className="flow-text grey-text text-darken-1 col s8">
                wins: 0<span style={{ fontFamily: "monospace" }} />
              </p>
              <p className="flow-text grey-text text-darken-1 col s8">
                losses: 0<span style={{ fontFamily: "monospace" }} />
              </p>
            </h4>
          </div>
          <button
            style={{
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              marginTop: "1rem"
            }}
            onClick={this.onLogoutClick}
            className="btn btn-large waves-effect waves-light hoverable blue accent-3 col 12"
          >
            Logout
          </button>
          <Link
            to="/dashboard"
            style={{
              width: "140px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              margin: "1rem"
            }}
            className="btn btn-large waves-effect waves-light hoverable blue accent-3 col 12"
          >
            Back
          </Link>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Profile);
