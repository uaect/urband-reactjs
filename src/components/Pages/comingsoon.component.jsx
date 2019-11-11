import React, { Component } from "react";
import { Link } from "react-router-dom";
class comingSoon extends Component {
  render() {
    return (
      <div>
        <section className="header-padd">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <img
                  src={require("../../media/banner/1.png")}
                  alt="coming soon"
                />
                <h2>Coming Soon...</h2>
                <Link to="/index" className="tim-btn">
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default comingSoon;
