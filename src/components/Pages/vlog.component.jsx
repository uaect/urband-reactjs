import React, { Component } from "react";
import { Link } from "react-router-dom";
import ComingSoon from "../Pages/comingsoon.component";

class Vlog extends Component {

  render() {
    let styles = {
      minHeight: '400px',
      width:'100%',
      backgroundImage: "url('https://149354727.v2.pressablecdn.com/wp-content/uploads/2017/12/jason-rosewell-60014-1-800x600.jpg')"
    };
    return (
      <div>
        <section className="page-header store-banner">
          <div className="tim-container">
            <div className="page-header-title text-center">
              <h2>Vlog</h2>
            </div>

            <div className="breadcrumbs">
              <Link to="/index">Home</Link>
              <span>/</span>
              <span>Vlog</span>
            </div>
          </div>
        </section>

        <section className="blog-posts video-list">
          <div className="container">
          <ComingSoon/>
            </div>
        </section>
      </div>
    );
  }
}

export default Vlog;
