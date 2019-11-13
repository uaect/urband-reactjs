import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';
import "./style.css";
import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions/";
class logIn extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      erremail: "",
      password: "",
      errpassword: "",
      loginflag: false,
      isToken: localStorage.getItem('urbandtoken') ? true : false
    }
  }

  handleChange(state, errState, evt) {
    let _state = this.state
    _state[state] = evt.target.value;
    _state[errState] = '';
    this.setState({
      ..._state
    })
  }

  gotoLogin = () => {
    const { email, password } = this.state;
    let flag = 0;
    if (email.length < 1) {
      flag = 1;
      this.setState({
        erremail: 'Please enter email address'
      })
    } else if (!new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email)) {
      flag = 1;
      this.setState({ erremail: 'Please enter valid email address' });
    }

    if (password.length < 1) {
      flag = 1;
      this.setState({
        errpassword: 'Please enter password'
      })
    }

    if (flag == 0) {
      this.props.login(this.state)
        .then(() => {
          this.setState({
            isToken: true
          })
          this.props.history.push('HomeStack');
        })
        .catch((error) => {
          if (error.error == 'Unauthorised') {
            this.setState({
              errpassword: 'Invalid credential check username or passsord'
            })
          }
        })
    }

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
                  <div className="row">
                    <div className="col-md-12 mb-3">
                      <div className="form-group">
                        <input
                          name="email"
                          value={this.state.email}
                          onChange={this.handleChange.bind(this, 'email', 'erremail')}
                          title="Please enter your Email"
                          className="form-control field-control email"
                          placeholder="Email"
                        />
                      </div>
                      {this.state.erremail && <div class="text-danger">{this.state.erremail}</div>}
                    </div>
                    <div className="col-md-12 mb-2">
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control field-control password"
                          name="password"
                          value={this.state.password}
                          onChange={this.handleChange.bind(this, 'password', 'errpassword')}
                          title="Please enter your Password"
                          placeholder="Password"
                        />
                      </div>
                      {this.state.errpassword && <div class="text-danger">{this.state.errpassword}</div>}
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
                      <button className="btn" type="submit" onClick={this.gotoLogin}>Log In</button>
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
  return {
    login: (state) => dispatch(actionCreators.login(state))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(logIn);


