import React, { Component } from "react";
import Coverflow from "react-coverflow";
import { StyleRoot } from "radium";
import { connect } from "react-redux";
import ComingSoon from "../Pages/comingsoon.component";
import * as actionCreators from "../../../src/store/actions/";

class Gang extends Component {
  render() {
    const image_url = "https://admin.urbandmusic.com/storage/";
    const detail = this.props.detail;
    const gang = detail.gang;

    var isResponseData = false;
    if (this.props.detail.success === true)
    isResponseData = true;

    return (
      <div>
         {isResponseData ? (
        <section className="the-gang">
          <div className="container">
            <div className="section-title style-four">
              <h2>Meet Our Gang</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some injected
                humour.
              </p>
            </div>

            {gang && gang.length > 0 && (
              <StyleRoot>
                <Coverflow
                  displayQuantityOfSide={2}
                  navigation={false}
                  enableHeading={true}
                  enableScroll={false}
                  clickable={true}
                  active={0}
                  media={{
                    "@media (max-width: 900px)": {
                      width: "600px",
                      height: "300px"
                    },
                    "@media (min-width: 900px)": {
                      width: "960px",
                      height: "600px"
                    }
                  }}
                >
                  {gang.map(item => {
                    return (
                      <div className="gang-thumb text-center" key={item.id}>
                        <img
                          src={item ? image_url + item.image : ""}
                          alt={item.title}
                        />
                        <h3>{item.title}</h3>
                      </div>
                    );
                  })}
                </Coverflow>
              </StyleRoot>
            )}
          </div>
        </section>
         ) : (
          <ComingSoon/>
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
)(Gang);
