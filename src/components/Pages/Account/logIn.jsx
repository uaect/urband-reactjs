import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
class logIn extends Component {
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

                    <form className="mt-5">
                      <div className="row">
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input
                              required=""
                              name="email"
                              type="text"
                              value=""
                              title="Please enter your Email"
                              className="form-control field-control email"
                              id="email"
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
                          <button className="btn">Log In</button>
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

export default logIn;
