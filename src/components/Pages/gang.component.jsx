import React, { Component } from "react";
import Coverflow from "react-coverflow";
import { StyleRoot } from "radium";
import { connect } from "react-redux";
import ComingSoon from "../Pages/comingsoon.component";
import * as actionCreators from "../../../src/store/actions/";

class Gang extends Component {
  render() {
    var isResponseData = false;
    if (this.props.detail.success === true) isResponseData = true;

    if (this.props.detail.success === true) isResponseData = true;
    const image_url = "http://happiness-spinner.com/storage/";
    var gangmember = this.props.detail.result;

    if (gangmember) if (gangmember.gang) gangmember = gangmember.gang;

    return (
      <div>
        {isResponseData ? (
          <section className="the-gang">
            <div className="container">
              <div className="section-title style-four">
                <h2>Meet Our Team</h2>
                {/*<p>
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some injected
                  humour.
                </p>*/}
              </div>

              <StyleRoot>
                <Coverflow
                  displayQuantityOfSide={2}
                  navigation={false}
                  enableHeading={true}
                  enableScroll={false}
                  clickable={true}
                  active={0}
                  media={{
                    // "@media (max-width: 900px)": {
                    //   width: "600px",
                    //   height: "300px"
                    // },
                    // "@media (min-width: 768px)": {
                    //   width: '100%',
                    //   height: '553px'
                    // }
                  }}
                >
                  {gangmember.map(item => {
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
            </div>
          </section>
        ) : (
            <ComingSoon />
          )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
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
