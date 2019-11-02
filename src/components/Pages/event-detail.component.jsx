import React, { Component } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import { connect } from "react-redux";
import BannerHero from "../Banners/bannerHero";
import * as actionCreators from "../../../src/store/actions/";
class EventDetail extends Component {
  componentDidMount() {
    let eventid = this.props.location.pathname.split('/').pop();
    this.props.fetchEventDetail(eventid);
  }

  render() {

    const events = this.props.event;
    if (events) {
      var event = events.result;
      var artists = events.artists;

    }
    const image_url = "http://admin.urbandmusic.com/storage/";



    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    return (
      <div>
      <BannerHero title={"Events"} />
        {event ? (
          <section id="event-about">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="event-thumb">
                    <img
                      src={
                        image_url +
                        "/" +
                        event.image
                      } alt="Thumb" />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="event-content">
                    <h2>
                      {/* Optimization <span>Is Important</span><br/> To <em>Business Succes.</em> */}
                    </h2>

                    <p>
                      {event.description}
                    </p>

                    <div className="event-details">
                      <p>
                        <span>Date & Time:</span> {event.date_from} To
                      {event.date_to}, {event.time_from} To {event.time_to}
                      </p>

                      <p>
                        <span>Location:</span> {event.location}
                      </p>
                    </div>

                    {/* <h4>Concert Introduction</h4>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but is the majoriyty have suffered the a
                    alteration in some form, by injected a humour or randomised
                    words which don't look even slightly an that is believable.
                    There are many variations of passages of Lorem Ipsum the a
                    available, but the majority.
                  </p> */}

                    <Link to="/" className="tim-btn">
                      Buy Tickets
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : ""}
        <section id="event-schedule" className="clearfix">
          <div className="schedule-ticket">
            <img src={require("../../media/background/10.jpg")} alt="thum" />

            <div className="content">
              <p className="schedule-date">August 19, 2018 @ 11 - 30 am</p>
              <h3>
                If You Can Drem It,
                <br /> You Cane Live It
              </h3>

              <Link to="/" className="tim-btn">
                Buy Ticket
              </Link>
            </div>
          </div>
          {artists ? (
            <div className="schedule clearfix">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <Carousel responsive={responsive}>
                      {artists.map(item => {
                        return (
                          <li>
                            <div className="schedule-item">
                              <div className="schedule-thumb">
                                <img
                                  src={
                                    image_url +
                                    "/" +
                                    item.image
                                  } alt="Thumb" />
                              </div>
                              <h4 className="sch-time">{item.from} - {item.to}</h4>
                              <h3 className="band-name">{item.name}</h3>
                              <h3 className="band-name">{item.band_name}</h3>
                              
                              <p className="duration">
                                Durations: {item.duration}
                        </p>
                            </div>
                          </li>
                        )
                      })}
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          ) : ""}
        </section>
      </div>
    );
  }
}



const mapDispatchToProps = dispatch => {
  // call action functions
  return {
    fetchEventDetail: (eventid) => dispatch(actionCreators.fetchEventDetail(eventid))
  };
};

const mapStateToProps = state => {
  return {
    event: state.eventdetails.eventdetails
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetail);

