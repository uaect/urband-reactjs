import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions/";
class register extends Component {

  constructor(props) {
    super(props)
    this.state = {
      firstname: "",
      errFirstname: "",
      lastname: "",
      errLastname: "",
      email: "",
      errEmail: "",
      password: "",
      errPassword: "",
      mobile: "",
      errMobile: "",
      city: "",
      errCity: ""
    }
  }
  
  componentDidMount(){
    this.props.getemirates(1);
  }

  gotoSignUp = () => {
    console.log(this.state);

    const { firstname, lastname, email, password, mobile, city } = this.state;
    let flag = 0;

    if (firstname.length < 1) {
      flag = 1;
      this.setState({
        errFirstname: 'Please enter firstname'
      })
    }

    if (lastname.length < 1) {
      flag = 1;
      this.setState({
        errLastname: 'Please enter lastname'
      })
    }

    if (email.length < 1) {
      flag = 1;
      this.setState({
        errEmail: 'Please enter email'
      })
    }else if (!new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email)) {
      flag = 1;
      this.setState({ errEmail: 'Please enter valid email address' });
    }

    if (mobile.length < 1) {
      flag = 1;
      this.setState({
        errMobile: 'Please enter mobile'
      })
    }else if (mobile.length < 9) {
      flag = 1;
      this.setState({
        errMobile: 'Please enter valid mobile'
      })
    }
    
    if (password.length < 1) {
      flag = 1;
      this.setState({
        errPassword: 'Please enter password'
      })
    }

    if (city.length < 1) {
      flag = 1;
      this.setState({
        errCity: 'Please select city'
      })
    }

    if (flag == 0) {
      this.props.register(this.state)
      .then(() => {
        this.props.history.push('login');
      })
      .catch((error) => {
          this.setState({
            errpassword: 'Error in registration. try again'
          })
      })

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




  render() {
    const { firstname, errFirstname, lastname, errLastname, email, errEmail, password, errPassword, mobile, errMobile, city, errCity} = this.state;
    const emirates = this.props.emirates;

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
                  <div className="row">
                    <div className="col-md-12 mb-3">
                      <div className="form-group">
                        <input
                          required=""
                          name="firstname"
                          type="text"
                          value={firstname}
                          onChange={this.handleChange.bind(this, 'firstname', 'errFirstname')}
                          title="Please enter your First Name"
                          className="form-control field-control email"
                          placeholder="First Name"
                        />
                      </div>
                      {errFirstname && <div class="text-danger">{errFirstname}</div>}
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="form-group">
                        <input
                          required=""
                          name="lastname"
                          type="text"
                          value={lastname}
                          onChange={this.handleChange.bind(this, 'lastname', 'errLastname')}
                          title="Please enter your Last Name"
                          className="form-control field-control email"
                          placeholder="Last Name"
                        />
                      </div>
                      {errLastname && <div class="text-danger">{errLastname}</div>}
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="form-group">
                        <input
                          required=""
                          name="email"
                          type="email"
                          value={email}
                          onChange={this.handleChange.bind(this, 'email', 'errEmail')}
                          title="Please enter your Email"
                          className="form-control field-control email"
                          id="email"
                          placeholder="Email"
                        />
                      </div>
                      {errEmail && <div class="text-danger">{errEmail}</div>}
                    </div>
                    <div className="col-md-12 mb-2">
                      <div className="form-group">
                        <input
                          type="password"
                          value={password}
                          onChange={this.handleChange.bind(this, 'password', 'errPassword')}
                          className="form-control field-control password"
                          name="password"
                          title="Please enter your Password"
                          placeholder="Password"
                        />
                      </div>
                      {errPassword && <div class="text-danger">{errPassword}</div>}
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="form-group">
                        <input
                          required=""
                          name="mobile"
                          type="tel"
                          value={mobile}
                          onChange={this.handleChange.bind(this, 'mobile', 'errMobile')}
                          title="Please enter your mobile"
                          className="form-control field-control email"
                          id="mobile"
                          placeholder="Mobile"
                        />
                      </div>
                      {errMobile && <div class="text-danger">{errMobile}</div>}
                    </div>
                    <div className="col-md-12 mb-2">
                      <div className="form-group">
                        <select
                          value={city}
                          onChange={this.handleChange.bind(this, 'city', 'errCity')}
                          className="form-control field-control password"
                          name="city"
                          placeHolder="City"
                        >
                          <option>Select City</option>
                          {emirates &&
                    emirates.map(state => {
                      return (
                      <option> {state.location}</option>
                          );
                        })}
                          </select>
                      </div>
                      {errCity && <div class="text-danger">{errCity}</div>}
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
                      <button className="btn register" onClick={this.gotoSignUp}> Create an account</button>
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
    register: (state) => dispatch(actionCreators.register(state)),
    getemirates: (id) => dispatch(actionCreators.getemirates(id))
  };
};

const mapStateToProps = state => {
  return {
    emirates: state.emirateslist.emirates
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(register);

