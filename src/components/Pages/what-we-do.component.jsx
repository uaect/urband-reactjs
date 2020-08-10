import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../../src/store/actions/";
import ComingSoon from "../Pages/comingsoon.component";

class WhatweDo extends Component {
  render() {
    var isResponseData = false;
    if (this.props.detail.success === true) isResponseData = true;
    // const image_url = "http://happiness-spinner.com/storage/";
    var services = this.props.detail.result;

    if (services) if (services.whatwedo) services = services.whatwedo;
    return (
      <div>
        {isResponseData ? (
          <div className="page-padd">
            <div className="container">
              <div className="section-title style-four text-center">
                <h2>Let's Do It</h2>
              </div>

              <div className="row">
                {services.map(item => {
                  return (
                    <div className="col-lg-4" key={item.id}>
                      <section className="services-grid">
                        <header>
                          <h1>{item.title}</h1>
                        </header>

                        <div className="content">
                          <div
                            className="text"
                            dangerouslySetInnerHTML={{
                              __html: item.description
                            }}
                          ></div>
                          <Link to="/" className="tim-btn">
                            View More
                          </Link>
                        </div>
                      </section>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
            <ComingSoon />
          )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  // call action functions
  return {
    fetchWhoWeAre: () => dispatch(actionCreators.fetchWhoWeAre())
  };
};

const mapStateToProps = state => {
  return {
    detail: state.whoweare.items
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WhatweDo);
