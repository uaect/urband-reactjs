import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions/";
import Moment from "moment";
class upcomingShowHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: []
    };
  }

  componentDidMount() {
    this.props
      .fetchEventDetail()
      .then(() => {
        const events = this.props.events;
        var event = events.slice(0, 2);
        if (event) {
          this.setState({
            event: event
          });
        }
      })
      .catch(error => {
        if (error) {
        }
      });
  }

  render() {
    const ticketFlag = localStorage.getItem("ticketheader");
    return (
      <section className="section-padding show-archive">
        <div className="container">
          <div className="d-flex justify-content-center row">
            <div className="col-xl-10">
              <div className="section-title style-four">
                <h2>UPCOMING SHOWS</h2>
              </div>
              {this.state.event &&
                this.state.event.map(item => {
                  return (
                    <div
                      key={item.id}
                      className="single-show-ticket row no-guters"
                    >
                      <div className="col-sm-3 col-md-3 col-lg-3">
                        <div className="date-time">
                          <h6>{Moment(item.date_to).format("dddd")}</h6>
                          <p>{Moment(item.date_to).format("DD-MM-YYYY")}</p>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-7">
                        <h5>{item.title}</h5>
                        <p> {item.location}</p>
                      </div>
                      <div className="col-sm-3 col-md-3 col-lg-2">
                        <div>
                          {ticketFlag === true ? (
                            <Link
                              className="tim-btn"
                              to={{
                                pathname: `/ticket-detail/${item.id}`
                              }}
                            >
                              Ticket
                            </Link>
                          ) : (
                            <Link className="tim-btn BtnCst1">No Tickets</Link>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => {
  // call action functions
  return {
    fetchEventDetail: () => dispatch(actionCreators.fetchEventDetail(1))
  };
};

const mapStateToProps = state => {
  return {
    events: state.eventdetails.eventdetails
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(upcomingShowHome);
