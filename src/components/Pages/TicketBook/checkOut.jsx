import React, { Component } from "react";
import "./style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalendarWeek, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions/";

library.add(faCalendarWeek, faArrowLeft);

class checkOut extends Component {

  componentDidMount() {
    let ticketDetails = this.props.location.state;
  }

  bookTicket = () => {
    this.props.bookTicket(this.props.location.state.ticketDetail)
      .then(() => {
        this.props.history.push({
          pathname: '/profile'
        })
      })
      .catch((error) => {
  
      })
  }

  render() {
    const eventDetail = this.props.location.state.eventDetail;
    const ticketDetail = this.props.location.state.ticketDetail;
    return (
      <div>
        <section className="page-padd ticket-wrap">
          <div className="container">
            <div className="row">
              <div className="ticket-offer-item">
                <div className="ticket-offer-title">
                  <Link to="/event-list">
                    <FontAwesomeIcon icon={faArrowLeft} className="ico" />
                  </Link>{" "}
                  <h2>Check Out</h2>
                </div>
              </div>
              <div className="d-flex checkout-wrap">
                <div className="col-md-5 checkout-block">
                  <div className="head">ORDER SUMMARY</div>
                  <div className="ticket-box mt-4">
                    <ul>
                      <li>
                        <div className="block-line">
                          <div className="ticket-head">{ticketDetail && ticketDetail.packageName}</div>
                          <div className="time-foot mt-2">
                            <FontAwesomeIcon
                              icon={faCalendarWeek}
                              className="mr-1 ico"
                            />
                            <span> {eventDetail && eventDetail.date_from}</span>
                          </div>
                        </div>
                        <div className="block-line">
                          <div className="rate">
                            <span>{ticketDetail && ticketDetail.ticketPrice}</span> AED
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="full-wrap checkout-block mt-5">
                    <div className="head">YOUR EMAIL</div>
                    <div className="bg-block mt-3">
                      <div className="avathar-mail">
                        Your tickets will be sent to{" "}
                        <span>johndoe@gmail.com</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 checkout-block right">
                  <div className="head">SELECT A PAYMENT METHOD</div>
                  <div>
                    
                      <div className="payment-method">
                      <div className="payment-header d-flex align-items-center">
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="Paypal"
                            name="customRadio"
                            className="custom-control-input"
                          />
                          <label className="custom-control-label" htmlFor="Paypal">
                            PayPal
                          </label>
                        </div>
                      </div>
                      </div>
                  
                  </div>

                  <div className="full-wrap checkout-block mt-4">
                    <div className="head">SUMMARY</div>
                    <div className="bg-block">
                    <div className="d-flex justify-content-between block-item mb-1">
                        <div>Num of Ticket</div> <span>{ticketDetail && ticketDetail.totalPerson}</span>
                      </div>
                      <div className="d-flex justify-content-between block-item mb-1">
                        <div>Ticket Price</div> <span>{ticketDetail && ticketDetail.grandTotal} AED</span>
                      </div>
                      {/* <div className="d-flex justify-content-between block-item">
                        <div>VAT 5%</div> <span>20.5 AED</span>
                      </div> */}
                    </div>
                    <div className="total-block mt-4">
                      <span className="mb-1">Grand Total </span>
                      {ticketDetail && ticketDetail.grandTotal}
                    </div>
                    <button onClick={this.bookTicket}
                      className="tim-btn mt-4 ticket-btn-lg"
                    >
                      Checkout
                    </button>
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

const mapDispatchToProps = dispatch => {
  return {
    bookTicket: (value) => dispatch(actionCreators.bookTicket(value))
  };
};

export default connect(null, mapDispatchToProps)(checkOut);
