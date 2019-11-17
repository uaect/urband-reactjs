import React, { Component } from "react";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions/";
import SiteMapLogo from "../../../assets/img/set_from_map.png";
library.add(faArrowLeft);

class storeCheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formActiveOrNot: this.props.formActiveOrNot,
      first_name: "",
      errfirstname: "",
      last_name: "",
      errlastname: "",
      location: "",
      errlocation: "",
      city: "",
      errcity: "",
      appartment: "",
      errappartment: "",
      address: "",
      erraddress: "",
      phone: "",
      mobile: "",
      errmobile: "",
      type: "",
      errtype: "",
      area: "",
      errarea: "",
      street: "",
      errstreet: "",
      emirate: "",
      emiratearea: ""
    };
    this.ShowFormHadler = this.ShowFormHadler.bind(this);
    this.GobackToAddressHandler = this.GobackToAddressHandler.bind(this);
    this.handleChangeemirates = this.handleChangeemirates.bind(this)
  }

  componentDidMount() {
    this.props.getfromcart();
    this.props.getaddress();
    this.props.getemirates(1)

  }


  addaddress = (value) => {
    const { first_name, last_name, appartment, address, mobile, type, area, street } = this.state;
    let flag = 0;
    if (first_name.length < 1) {
      flag = 1;
      this.setState({
        errfirstname: 'Please enter First name'
      })
    }
    if (area.length < 1) {
      flag = 1;
      this.setState({
        errfirstname: 'Please enter area name'
      })
    }
    if (street.length < 1) {
      flag = 1;
      this.setState({
        errfirstname: 'Please enter street name'
      })
    }
    if (type.length < 1) {
      flag = 1;
      this.setState({
        errtype: 'Please enter type'
      })
    }
    if (last_name.length < 1) {
      flag = 1;
      this.setState({
        errlastname: 'Please enter last name'
      })
    }
    if (this.state.emirate.length < 1) {
      flag = 1;
      this.setState({
        errlocation: 'Please enter location '
      })
    }
    if (appartment.length < 1) {
      flag = 1;
      this.setState({
        errappartment: 'Please enter appartment details'
      })
    }
    if (address.length < 1) {
      flag = 1;
      this.setState({
        erraddress: 'Please enter address'
      })
    }
    if (mobile.length < 1) {
      flag = 1;
      this.setState({
        errmobile: 'Please enter mobile number'
      })
    }
    if (flag == 0) {
      this.props.addaddress(this.state)
      
    }
  }
  ShowFormHadler() {
    localStorage.removeItem('address');
    this.setState({
      formActiveOrNot: false
    });
  }
  GobackToAddressHandler() {
    this.setState({
      formActiveOrNot: true
    });
  }
  handleChangeemirates(event) {
    this.setState({
      emirate: event.target.value
    });
    this.props.getarea(event.target.value)
  }
  handleChangeemirates1(event) {
    this.setState({
      emiratearea: event.target.value
    });
  }
  handleChange(state, errState, evt) {


    let _state = this.state
    _state[state] = evt.target.value;
    _state[errState] = '';
    this.setState({
      ..._state
    })
  }
  render() {
    const image_url = "https://admin.urbandmusic.com/storage/";
    var cartItems = this.props.cartitems;
    var emirates = this.props.emirateslist;
    var arealist = this.props.arealist;
    var getaddress = this.props.address;
    console.log("ttttttttttttttttt", getaddress);

    var formActiveOrNot = localStorage.getItem('address');
    var totalcost = 0;
    if (cartItems !== "emtey cart") {
      var cartflag = true;
      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].price) {
          totalcost =
            totalcost +
            parseFloat(cartItems[i].price) * parseInt(cartItems[i].quantity);
        }
      }
    } else var cartflag = false;

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
                  {formActiveOrNot || this.state.formActiveOrNot ? (
                    <div className="row mt-3">
                      {getaddress ? getaddress.map(item => {
                        return (

                          <div className="col-md-6" key={item.id}>
                            <div className="AddressBoxWrp fullWidth">
                              <div className="AddressBoxTp1 selectedBox">
                                <div className="head">
                                  <img src={SiteMapLogo} alt={SiteMapLogo} />
                                  <span className="ml-2">{item.type}</span>
                                </div>
                                <div className="AddressBoxTp1Content">
                                  <div>
                                    <div className="ItemListingStl1">
                                      <div>Name</div>
                                      <div className="BoldTp1 RghtBoxTp1">
                                        {item.first_name}
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="ItemListingStl1">
                                      <div>Address</div>
                                      <div className="RghtBoxTp1">
                                        {item.street},{item.area}
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="ItemListingStl1">
                                      <div>Phone</div>
                                      <div className="RghtBoxTp1">
                                        {item.mobile}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      }) : ""}
                      <div className="col-md-6">
                        <div className="AddressBoxWrp fullWidth">
                          <div
                            className="AddressBoxTp1"
                            onClick={this.ShowFormHadler}
                          >
                            <div className="AddNEwButtonBox">Add New</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                      <div className="mt-4">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                value={this.state.first_name}
                                onChange={this.handleChange.bind(this, 'first_name', 'errfirstname')}
                                className="form-control field-control"
                                placeholder="First Name"
                              />
                            </div>
                          </div>
                          {this.state.errfirstname && <div class="text-danger">{this.state.errfirstname}</div>}
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control field-control"
                                placeholder="Last Name"
                                value={this.state.last_name}
                                onChange={this.handleChange.bind(this, 'last_name', 'errlastname')}
                              />
                            </div>
                          </div>
                          {this.state.errlastname && <div class="text-danger">{this.state.errlastname}</div>}

                          {emirates ?
                            <div className="col-md-6">
                              <div className="form-group">

                                <select
                                  onChange={this.handleChangeemirates.bind(this)}>
                                  {emirates.map(value =>
                                    <option key={value.id} value={value.id}>{value.location}</option>
                                  )};


                                </select>
                              </div>
                            </div> : ""}
                          {this.state.emirate ?
                            <div className="col-md-6">
                              <div className="form-group">

                                <select
                                  onChange={this.handleChangeemirates1.bind(this)}>
                                  {arealist.map(data =>
                                    <option key={data.id} value={data.id}>{data.location}</option>
                                  )};


                                </select>
                              </div>
                            </div> : ""}

                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control field-control"
                                name=""
                                placeholder="Area"
                                value={this.state.area}
                                onChange={this.handleChange.bind(this, 'area', 'errarea')}
                              />
                            </div>
                          </div>
                          {this.state.errarea && <div class="text-danger">{this.state.errarea}</div>}
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control field-control"
                                name=""
                                placeholder="Street"
                                value={this.state.street}
                                onChange={this.handleChange.bind(this, 'street', 'errstreet')}
                              />
                            </div>
                          </div>
                          {this.state.errstreet && <div class="text-danger">{this.state.errstreet}</div>}
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control field-control"
                                name=""
                                placeholder="Apartment, villa no, etc."
                                value={this.state.appartment}
                                onChange={this.handleChange.bind(this, 'appartment', 'errappartment')}
                              />
                            </div>
                          </div>
                          {this.state.errappartment && <div class="text-danger">{this.state.errappartment}</div>}

                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                className="form-control field-control"
                                type="text"
                                name="description[]"
                                placeholder="Full Address"
                                value={this.state.address}
                                onChange={this.handleChange.bind(this, 'address', 'erraddress')}
                                rows="3"
                              ></textarea>
                            </div>
                          </div>
                          {this.state.erraddress && <div class="text-danger">{this.state.erraddress}</div>}
                          <div className="col-md-6">
                            <div className="form-group">
                              <select
                                value={this.state.type}
                                onChange={this.handleChange.bind(this, 'type', 'errtype')}>
                                <option value="">Select Type</option>
                                <option value="Home">Home</option>
                                <option value="Office">Office</option>
                                <option value="Other">Other</option>
                              </select>
                            </div>
                          </div>
                          {this.state.errtype && <div class="text-danger">{this.state.errtype}</div>}



                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control field-control"
                                name=""
                                placeholder="Landline Number"
                                value={this.state.phone}
                                onChange={this.handleChange.bind(this, 'phone', "")}
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
                                value={this.state.mobile}
                                onChange={this.handleChange.bind(this, 'mobile', 'errmobile')}
                              />
                            </div>
                          </div>
                          {this.state.errmobile && <div class="text-danger">{this.state.errmobile}</div>}
                        </div>
                        <button
                          type="btn"
                          className="tim-btn mt-4 ticket-btn-lg place-order CancelBtnTp1"
                          onClick={this.GobackToAddressHandler}
                        >
                          Cancel
                      </button>
                        <button
                          type="submit"
                          className="tim-btn mt-4 ticket-btn-lg place-order"
                          onClick={this.addaddress}>
                          Save
                      </button>
                      </div>
                    )}
                </div>
                {this.state.formActiveOrNot === true ? (
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
                            <label
                              className="custom-control-label"
                              htmlFor="COD"
                            >
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
                ) : (
                    ""
                  )}
              </div>

              <div className="col-md-5 checkout-block checkout-list-wrap">
                <div className="head">ORDER SUMMARY</div>

                <div className="ticket-box checkout-list mt-4">
                  <ul>
                    {cartflag &&
                      cartItems.map(item => {
                        return (
                          <li key={item.id}>
                            <div className="order-box-wrap">
                              <Link to="" className="img-box">
                                <img
                                  src={image_url + item.files[0].image}
                                  alt="album thumb"
                                />
                              </Link>
                              <div className="right justify-content-between">
                                <div className="sections">
                                  <div className="title">{item.title}</div>
                                  <div className="quantity">
                                    QTY: <span>{item.quantity}</span>
                                  </div>
                                </div>
                                <div className="sections">
                                  <div className="price">{item.price} AED</div>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                  </ul>
                  <div className="full-wrap checkout-block mt-4">
                    <div className="total-block mt-4 text-right">
                      <span className="mb-1">Total (Incl. of Vat)</span>
                      {totalcost} AED
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

const mapDispatchToProps = dispatch => {
  // call action functions
  return {
    getfromcart: () => dispatch(actionCreators.getfromcart()),
    getaddress: () => dispatch(actionCreators.getaddress()),
    getemirates: () => dispatch(actionCreators.getemirates()),
    getarea: (id) => dispatch(actionCreators.getemirates1(id)),
    addaddress: (param) => dispatch(actionCreators.addaddress(param))
  };
};

const mapStateToProps = state => {

  return {

    cartitems: state.cartitems.items,
    address: state.getaddress.address,
    emirateslist: state.emirateslist.emirates,
    arealist: state.area.emirates
    // in this state list is array name as stored  API  from defined in eventListReducer
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(storeCheckOut);
