import React, { Component } from "react";
import "./style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalendarWeek, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

library.add(faCalendarWeek, faArrowLeft);

class checkOut extends Component {
  render() {
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
                          <div className="ticket-head">Diamond West</div>
                          <div className="time-foot mt-2">
                            <FontAwesomeIcon
                              icon={faCalendarWeek}
                              className="mr-1 ico"
                            />
                            <span> Friday 22nd Nov</span>
                            <span>18.00</span>
                          </div>
                        </div>
                        <div className="block-line">
                          <div className="rate">
                            <span>200</span> AED
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="block-line">
                          <div className="ticket-head">Gold West</div>
                          <div className="time-foot mt-2">
                            <FontAwesomeIcon
                              icon={faCalendarWeek}
                              className="mr-1 ico"
                            />
                            <span> Friday 22nd Nov</span>
                            <span>18.00</span>
                          </div>
                        </div>
                        <div className="block-line">
                          <div className="rate">
                            <span>300</span> AED
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
                        <div>Tickets</div> <span>400.00 AED</span>
                      </div>
                      <div className="d-flex justify-content-between block-item">
                        <div>VAT 5%</div> <span>20.5 AED</span>
                      </div>
                    </div>
                    <div className="total-block mt-4">
                      <span className="mb-1">Total (Incl. of Vat)</span>
                      421.00 AED
                    </div>
                    <Link to="/ticket-summary"
                      className="tim-btn mt-4 ticket-btn-lg"
                    >
                      Pay Securly
                    </Link>
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

export default checkOut;
