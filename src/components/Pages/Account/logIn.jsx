import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions/";
class logIn extends Component {
  state = {
    email:"",
    password:""
  }
  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox ?
      event.target.checked : event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault();
    console.log("this.state", this.state);
    this.props.login(this.state);
  }
  render() {
    return (
      <div>
        <section className="header-padd">
            <div className="container">
              <div className="row">
                <div className="col-md-5 mx-auto hero-acct-wrap">
                  <div className="user-content">
                    <div className="mb-7">
                      <h2 className="account-head mb-0">LOG IN</h2>
                      <p className="sec-txt">Login to manage your account.</p>
                    </div>

                    <form onSubmit={this.handleSubmit} className="mt-5">
                      <div className="row">
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input
                              name="email"
                              value={this.state.email}
                              onChange={this.handleChange}
                              title="Please enter your Email"
                              className="form-control field-control email"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-2">
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control field-control password"
                              name="password"
                              value={this.state.password}
                              onChange={this.handleChange}
                              title="Please enter your Password"
                              placeholder="Password"
                            />
                          </div>
                        </div>
                        <div className="col-md-12 text-right">
                          <div className="forgot-pass">Forgot Password ?</div>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-md-6">
                          <p className="dont-u">
                            Don’t have an account?{" "}
                            <Link to="/register">Sign up here</Link>
                          </p>
                        </div>
                        <div className="col-md-6">
                          <button className="btn" type="submit">Log In</button>
                        </div>
                      </div>
                    </form>
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
    login: (state) => dispatch(actionCreators.login(state))
  };
};

const mapStateToProps = state => {
  return {
    login: state.login.items // in this state list is array name as stored  API  from defined in eventListReducer
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(logIn);


