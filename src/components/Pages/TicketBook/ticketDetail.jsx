import React, { Component } from "react";
import "./style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faClock,
  faArrowLeft,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "react-select";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions/";
import Moment from "moment";
library.add(faClock, faArrowLeft, faMapMarkerAlt);

class ticketDetail extends Component {
  state = {
    eventid: null,
    eventDate: null,
    ticketid: null,
    packageName: null,
    ticketPrice: null,
    errTicket: null,
    errQuanity: null,
    grandTotal: null,
    totalPerson: 1
  };

  componentDidMount() {
    let eventid = this.props.location.pathname.split("/").pop();
    this.props.fetcheventtickets(eventid);
    this.setState({ eventid: eventid });
  }

  handleChange = event => {
    this.setState({ ticketid: event.target.value });
    const _pkg = this.props.eventsDetails.packages.filter(
      pk => pk.id == event.target.value
    );
    this.setState({ packageName: _pkg[0].package_name });
    this.setState({ ticketPrice: _pkg[0].price });
    this.setState({
      totalPerson: this.state.totalPerson ? this.state.totalPerson : 1
    });
    this.setState({ grandTotal: _pkg[0].price * this.state.totalPerson });
  };

  handleChangeQuanity = event => {
    const ticketPrice = this.state.ticketPrice;
    this.setState({ grandTotal: ticketPrice * event.target.value });
    this.setState({ totalPerson: event.target.value });
  };

  render() {
    const eventResult = this.props.eventsDetails.result;
    const packageResult = this.props.eventsDetails.packages;
    return (
      <div>
        <section className="page-padd ticket-wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="ticket-offer-item">
                  <div className="ticket-offer-title">
                    <Link to="/event-list">
                      <FontAwesomeIcon icon={faArrowLeft} className="ico" />
                    </Link>
                    <h2>{eventResult && eventResult.title}</h2>
                  </div>
                  <div className="event-show-row active">
                    {/* <div className="event-show-cols select-point">
                                    <div class="select-circle-block"></div>
                                </div> */}
                    <div className="event-show-cols time">
                      <FontAwesomeIcon icon={faClock} className="ico" />
                      <span>
                        {eventResult && eventResult.time_from} -
                        {eventResult && eventResult.time_to}
                      </span>
                    </div>
                    <div className="event-show-cols time">
                      <span>{eventResult && eventResult.headline}</span>
                    </div>
                    <div className="event-show-cols venue">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="ico" />
                      <span>{eventResult && eventResult.location}</span>
                    </div>
                  </div>
                </div>

                <div className="ticket-offer mt-5">
                  <div className="TicketWrpTp1">
                    <div className="row">
                      <div className="col-auto">
                        <div className="title">Select Your Ticket</div>
                      </div>
                      <div className="col">
                        <select
                          onChange={this.handleChange}
                          className="selectBoxType1"
                        >
                          <option>Select Class</option>
                          {packageResult
                            ? packageResult.map(ticket => {
                                return (
                                  <option key={ticket.id} value={ticket.id}>
                                    {ticket.package_name} - {ticket.price}
                                  </option>
                                );
                              })
                            : ""}
                          ;
                        </select>
                      </div>
                    </div>
                    {this.state.ticketid && (
                      <div className="row">
                        <div className="col-auto">
                          <div className="title">Select Number of Ticket: </div>
                        </div>
                        <div className="col">
                          <select
                            onChange={this.handleChangeQuanity}
                            className="selectBoxType1"
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                          </select>
                        </div>
                      </div>
                    )}
                  </div>

                  {packageResult ? (
                    ""
                  ) : (
                    <div className="title text-danger">
                      Ticket not available
                    </div>
                  )}

                  {packageResult ? (
                    <div className="ticket-office__footer m-0">
                      <div className="container">
                        <div className="ticket-office__counter">
                          <div className="ticket-office__person-count no-mobile">
                            Persons:{" "}
                            <span className="ticket-office__person-count-number">
                              {this.state.totalPerson
                                ? this.state.totalPerson
                                : "0"}
                            </span>
                          </div>
                        </div>
                        <div className="ticket-office__checkout">
                          <div className="ticket-office__price no-mobile">
                            <div className="ticket-office__total">
                              <span>
                                {this.state.grandTotal
                                  ? this.state.grandTotal
                                  : "0"}
                              </span>{" "}
                              AED
                            </div>
                            <div className="cancel clearfix">
                              <span
                                className="ticket-office__fee"
                                data-ticket-office-fee=""
                              ></span>
                              <Link to="/">cancel</Link>
                            </div>
                          </div>
                          {this.state.ticketid ? (
                            <Link
                              to={{
                                pathname: `/ticket-checkout`,
                                state: {
                                  ticketDetail: this.state,
                                  eventDetail: eventResult
                                }
                              }}
                              className="ticket-office__button tim-btn disabled-link"
                            >
                              check out
                            </Link>
                          ) : (
                            <Link className="ticket-office__button tim-btn disabled-link">
                              check out
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
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
    fetcheventtickets: id => dispatch(actionCreators.fetcheventtickets(id))
  };
};

const mapStateToProps = state => {
  return {
    eventsDetails: state.ticketlist.list
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ticketDetail);
// ticketlist
