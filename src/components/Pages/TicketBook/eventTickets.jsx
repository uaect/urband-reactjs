import React, { Component } from "react";
import "./style.css";
import BannerHero from "../../Banners/bannerHero";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalendarWeek, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions/";
import Moment from "moment";
library.add(faCalendarWeek, faArrowLeft);

class eventTickets extends Component {
  componentDidMount() {
    this.props.fetchEventDetail();
  }
  render() {
     var token = localStorage.getItem("urbandtoken");
    const events = this.props.events;
    return (
      <div>
        <BannerHero title={"Event Tickets"} />
        <section className="page-padd ticket-wrap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div>
                  {events &&
                    events.map(item => {
                      return (
                        <div
                          key={item.id}
                          className="single-show-ticket row no-guters"
                        >
                          <div className="col-sm-3 col-md-3 col-lg-3">
                            <div className="date-time">
                              <h6>
                                {Moment(item.date_to).format("DD-MM-YYYY")}
                              </h6>
                              <p>{Moment(item.date_to).format("DD-MM-YYYY")}</p>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-6 col-lg-7">
                            <h5>{item.title}</h5>
                            <p> {item.location}</p>
                          </div>
                          <div className="col-sm-3 col-md-3 col-lg-2">
                            <div className="a_hover">
                              {token ? <Link
                                className="tim-btn"
                                to={{
                                  pathname: `/ticket-detail/${item.id}`
                                }}
                              >
                                Buy
                              </Link> :<Link
                                className="tim-btn"
                                to='/login'
                              >
                                Buy
                              </Link>}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  // call action functions
  return {
    fetchEventDetail: () => dispatch(actionCreators.fetchEventDetail())
  };
};

const mapStateToProps = state => {
  return {
    events: state.eventdetails.eventdetails
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(eventTickets);
