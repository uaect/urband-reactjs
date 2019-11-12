import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions/";
class register extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: ""
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
    if (this.state.password !== this.state.confirmpassword) {
      console.log("password incorrect");
      alert("password incorrect");
    } else if (!this.state.email || !this.state.confirmpassword || !this.state.password || !this.state.firstname) {
      console.log("please fill all the field");
      alert("please fill all the field");
    } else {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
      if (reg.test(this.state.email) === true){
        this.props.register(this.state);
      }
      else{
          alert("please enter valid email");
      }
      
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
                  <div class="mb-7">
                    <h2 class="account-head mb-0">CREATE AN ACCOUNT</h2>
                    <p class="sec-txt">Let'us start</p>
                  </div>

                  <form className="mt-5" onSubmit={this.handleSubmit}>
                    <div className="row">
                      <div className="col-md-12 mb-3">
                        <div className="form-group">
                          <input
                            required=""
                            name="firstname"
                            type="text"
                            value={this.state.firstname}
                            onChange={this.handleChange}
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
                            name="lastname"
                            type="text"
                            value={this.state.lastname}
                            onChange={this.handleChange}
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
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
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
                            value={this.state.password}
                            onChange={this.handleChange}
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
                            value={this.state.confirmpassword}
                            onChange={this.handleChange}
                            className="form-control field-control password"
                            name="confirmpassword"
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
                        <button className="btn register" type="submit">Create an account</button>
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
    register: (state) => dispatch(actionCreators.register(state))
  };
};

const mapStateToProps = state => {
  return {
    register: state.register.items // in this state list is array name as stored  API  from defined in eventListReducer
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(register);

