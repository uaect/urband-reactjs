import React, { Component } from "react";
import ModalVideo from "../../VideoModal/video-modal.component";
import "./style.css";
import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions/";
class spotLight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spotlight: [],
      imageArray: [],
      email: "",
      erremail: "",
      videoArray: []
    };
  }

  handleChange(state, errState, evt) {
    let _state = this.state
    _state[state] = evt.target.value;
    _state[errState] = '';
    this.setState({
      ..._state
    })
  }
  
  sendmail = () => {
    const { email } = this.state;
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

    if (flag === 0) {
      this.props.subscribe(this.state)
        .then(() => {
          this.setState({
            isToken: true
          })
          alert("mail sent")
        })
        .catch((error) => {
          if (error.error) {
            this.setState({
              errpassword: error.error
            })
          }
        })
    }

  }

  componentDidMount() {
    this.props
      .spotlight()
      .then(() => {
        const spotlight = this.props.spot_light;
        if (spotlight) {
          this.setState({
            spotlight: spotlight
          });
        }
        if (this.state.spotlight.video_url) {
          var video = this.state.spotlight.video_url.split("v=");
          this.setState({
            videoArray: video[1]
          });
        }
        if (this.state.spotlight.images) {
          var imagess = this.state.spotlight.images.split(",");
          this.setState({
            imageArray: imagess
          });
        }
      })
      .catch(error => {
        if (error) {
        }
      });
  }

  render() {
    const image_url = "https://admin.urbandmusic.com/storage/";

    return (
      <section className="section-padding-two wide_line_bg">
        <div className="container">
          <div className="d-flex justify-content-center row">
            <div className="col-xl-10">
              <div className="section-title style-five">
                <h2>SPOTLIGHT</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum available
                  but the majority.
                </p>
              </div>
              <div className="row">
                {this.state.spotlight ? (
                  <div className="grid-60">
                    <div className="spotlight-inner">
                      <img
                        className="SpotLightImg "
                        src={image_url + this.state.imageArray[0]}
                        alt=""
                      />
                      <div className="video-player-three">
                        <div className="text">
                          <p>{this.state.spotlight.title}</p>
                          {/* <span>(Live in Tokyo, 2017)</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                <div className="grid-40">
                  <div className="subscribe-two">
                    <div className="section-title style-five">
                      <h2>SUBSCRIBE</h2>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available but the majority.
                      </p>
                    </div>
                   
                      <input placeholder="Enter Your Email" 
                       value={this.state.email}
                       onChange={this.handleChange.bind(this, 'email', 'erremail')}
                      type="text" />
                       {this.state.erremail && <div class="text-danger">{this.state.erremail}</div>}
                      <button type="submit" onClick={this.sendmail} className="submit">
                        send me
                      </button>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
          {this.state.videoArray.length ? (
            <ModalVideo title={this.state.videoArray} />
          ) : (
            ""
          )}
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => {
  // call action functions
  return {
    spotlight: () => dispatch(actionCreators.spotlight()),
    subscribe: (state) => dispatch(actionCreators.subscribe(state))
  };
};

const mapStateToProps = state => {
  return {
    spot_light: state.spotlight.items
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(spotLight);
