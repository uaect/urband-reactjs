import React, { Component } from "react";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faArrowLeft);

class storeCheckOut extends Component {
  render() {
    return (
      <div>
        <section className="header-padd cart-product mt-5">
          <div className="tim-container">
            <div className="store-top-head m-0">
              <Link to="/cart">
                <FontAwesomeIcon icon={faArrowLeft} className="ico" />
              </Link>
              <h2>Check Out</h2>
            </div>
            <div className="d-flex checkout-wrap mt-3">
              <div className="col-md-6 checkout-block">
                <div className="full-wrap">
                  <div className="head">SHIPPING ADDRESS</div>
                  <form className="mt-4">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control field-control"
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control field-control"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <select
                            className="form-control field-control"
                            name="city"
                            title="Select Current Location"
                          >
                            <option value="">Select Location</option>
                            <option value="Dubai">Dubai</option>
                            <option value="Sharjah">Sharjah</option>
                            <option value="Abu Dhabi">Abu Dhabi</option>
                            <option value="Ras Al Khaimah">
                              Ras Al Khaimah
                            </option>
                            <option value="Fujairah">Fujairah</option>
                            <option value="Ajman">Ajman</option>
                            <option value="Umm Al Qawain">Umm Al Qawain</option>
                            <option value="Al Ain">Al Ain</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <select
                            className="form-control field-control"
                            name="city"
                            title="Select Current Location"
                          >
                            <option value="">Select City</option>
                            <option value="54903">City centre</option>
                            <option value="181636102">Al Barsha Dubai</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control field-control"
                            name=""
                            placeholder="Apartment, villa no, etc."
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            className="form-control field-control"
                            type="text"
                            name="description[]"
                            placeholder="Address"
                            rows="3"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control field-control"
                            name=""
                            placeholder="Landline Number"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control field-control"
                            name=""
                            placeholder="Mobile Number"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="full-wrap mt-5">
                  <div className="head">SELECT A PAYMENT METHOD</div>
                  <div className="full-wrap mt-4">
                    <div className="payment-method">
                      <div className="payment-header d-flex align-items-center">
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="Paypal"
                            name="customRadio"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="Paypal"
                          >
                            PayPal
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="payment-method">
                      <div className="payment-header d-flex align-items-center">
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="COD"
                            name="customRadio"
                            className="custom-control-input"
                          />
                          <label className="custom-control-label" htmlFor="COD">
                            Cash on delivery
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="tim-btn mt-4 ticket-btn-lg place-order"
                  >
                    Place Order
                  </button>
                </div>
              </div>

              <div className="col-md-5 checkout-block checkout-list-wrap">
                <div className="head">ORDER SUMMARY</div>
                <div className="ticket-box checkout-list mt-4">
                  <ul>
                    <li>
                      <div className="order-box-wrap">
                        <Link to="" className="img-box">
                          <img
                            src={require("../../../media/gallery/shop.jpg")}
                            alt="album thumb"
                          />
                        </Link>
                        <div className="right justify-content-between">
                          <div className="sections">
                            <div className="title">Guns N Roses</div>
                            <div className="quantity">
                              QTY: <span>2</span>
                            </div>
                          </div>
                          <div className="sections">
                            <div className="price">100 AED</div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="order-box-wrap">
                        <Link to="" className="img-box">
                          <img
                            src={require("../../../media/gallery/shop.jpg")}
                            alt="album thumb"
                          />
                        </Link>
                        <div className="right justify-content-between">
                          <div className="sections">
                            <div className="title">Guns N Roses</div>
                            <div className="quantity">
                              QTY: <span>2</span>
                            </div>
                          </div>
                          <div className="sections">
                            <div className="price">100 AED</div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="full-wrap checkout-block mt-4">
                    <div className="total-block mt-4 text-right">
                      <span className="mb-1">Total (Incl. of Vat)</span>
                      421.00 AED
                    </div>
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

export default storeCheckOut;
