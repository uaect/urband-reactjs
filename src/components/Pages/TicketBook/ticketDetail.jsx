import React, { Component } from "react";
import "./style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClock, faArrowLeft, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "react-select";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions/";
import Moment from 'moment';
library.add(faClock, faArrowLeft, faMapMarkerAlt);


class ticketDetail extends Component {
  state = {
    selectedOption: null
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  componentDidMount() {
    let eventid = this.props.location.pathname.split('/').pop();
    this.props.fetcheventtickets(eventid);
  }
  render() {
    const eventsDetails = this.props.eventsDetails;

    if (eventsDetails) {
      var eventResult = eventsDetails.result;
      var packageResult = eventsDetails.packages;
    }
    if (packageResult)
      console.log("uuuuuuuu", packageResult);
    const options = [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" }
    ];
    const { selectedOption } = this.state;

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
                      <span>{eventResult && eventResult.time_from} -{eventResult && eventResult.time_to}</span>
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
                  <div className="title">Select Your Ticket</div>
                  <ul>
                    {packageResult ? packageResult.map(item => {
                      return (
                        <li key={item.id}>
                          <div className="block">
                            <div className="type">{item.package_name}</div>
                          </div>
                          <div className="block">
                            <div className="rate">{item.price} AED</div>
                          </div>
                          <div className="block ticket-opt urband-select-custom">
                            <Select
                              value={selectedOption}
                              onChange={this.handleChange}
                              options={options}
                            />
                          </div>
                        </li>);
                    }):""}
                  </ul>
                  {packageResult ?
                  <div className="ticket-office__footer">
                    <div className="container">
                      <div className="ticket-office__counter">
                        <div className="ticket-office__person-count no-mobile">
                          Persons:{" "}
                          <span className="ticket-office__person-count-number">
                            1
                          </span>
                        </div>
                      </div>
                      <div className="ticket-office__checkout">
                        <div className="ticket-office__price no-mobile">
                          <div className="ticket-office__total">
                            <span>500.00</span> AED
                          </div>
                          <div className="cancel clearfix">
                            <span
                              className="ticket-office__fee"
                              data-ticket-office-fee=""
                            ></span>
                            <Link to="/">
                              cancel
                            </Link>
                          </div>
                        </div>
                        <Link to="/ticket-checkout" disable={true} className="ticket-office__button tim-btn">
                          check out
                        </Link>
                      </div>
                    </div>
                  </div>:""}
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
    fetcheventtickets: (id) => dispatch(actionCreators.fetcheventtickets(id))
  };
};

const mapStateToProps = state => {
  return {
    eventsDetails: state.ticketlist.list,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ticketDetail);
// ticketlist

