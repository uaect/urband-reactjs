import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
class register extends Component {
  render() {
    return (
      <div>
        <section className="header-padd">
            <div className="container">
              <div className="row">
                <div className="col-md-5 mx-auto hero-acct-wrap">
                  <div className="user-content">
                    <div class="mb-7">
                      <h2 class="account-head mb-0">CREATE AN ACCOUNT</h2>
                      <p class="sec-txt">Let'us start</p>
                    </div>

                    <form className="mt-5">
                      <div className="row">
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input
                              required=""
                              name="First Name"
                              type="text"
                              title="Please enter your First Name"
                              className="form-control field-control email"
                              placeholder="First Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input
                              required=""
                              name="Last Name"
                              type="text"
                              title="Please enter your Last Name"
                              className="form-control field-control email"
                              placeholder="Last Name"
                            />
                          </div>
                        </div>
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
                        <div className="col-md-12 mb-2">
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control field-control password"
                              name="password"
                              title="Please enter your Password"
                              placeholder="Confirm Password"
                            />
                          </div>
                        </div>
                        
                       
                      </div>
                      <div className="row mt-4">
                        <div className="col-md-6">
                          <p className="dont-u">
                            Already have an account?
                            <Link to="/login">Log In</Link>
                          </p>
                        </div>
                        <div className="col-md-6">
                          <button className="btn register">Create an account</button>
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

export default register;
