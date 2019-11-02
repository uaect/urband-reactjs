import React, { Component } from "react";
import { Link } from "react-router-dom";

class Vlog extends Component {

  render() {
    let styles = {
      minHeight: '400px',
      width:'100%',
      backgroundImage: "url('https://149354727.v2.pressablecdn.com/wp-content/uploads/2017/12/jason-rosewell-60014-1-800x600.jpg')"
    };
    return (
      <div>
        <section className="page-header artist-banner">
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
            <div className="row">
                <div className="col-lg-6 col-md-4 col-sm-6 col-full-width">
                  <div  className="list-index" style={styles}>
                    <div className="progression-podcast-index-content"> 
                      <div className="progression-studios-podcast-index-border-top"></div>

                    </div>

                  </div>
                </div>

              </div>
            </div>
        </section>
      </div>
    );
  }
}

export default Vlog;
