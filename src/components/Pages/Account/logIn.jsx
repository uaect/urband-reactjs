import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions/";
class logIn extends Component {
  state = {
    email: "",
    password: "",
    erremail: "",
    errpassword: "",
    loginflag:false
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
    if (this.state.password.length < 1) {
      this.setState({
        errpassword: 'Please enter password'
      })
    } else if (this.state.email.length < 1) {
      this.setState({
        erremail: 'Please enter email'
      })
    } else if (new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(this.state.email)) {
      this.props.login(this.state);
      this.setState({ loginflag: true });
    } else {
      this.setState({
        erremail: 'Please enter valid email'
      })
    }
  }
  render() {
    const log = this.props.log;
    if(this.state.loginflag && !log.success){
     alert("please enter valid details")
    }else if(this.state.loginflag && log.success){
      localStorage.setItem('urbandtoken', JSON.stringify(log.success));
  
    }
  
    var token = (localStorage.getItem('urbandtoken'))
    console.log("gggggggg",token)
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
                        {this.state.erremail && <div class="text-danger">{this.state.erremail}</div>}
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
  console.log("itemmmmmmmmmm", state);
  
  return {
    log: state.login.items // in this state list is array name as stored  API  from defined in eventListReducer
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(logIn);


