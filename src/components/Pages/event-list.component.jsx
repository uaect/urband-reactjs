import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCalendarCheck,
  faClock,
  faTheaterMasks,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReadMoreAndLess from 'react-read-more-less';
import BannerHero from "../Banners/bannerHero";
import ComingSoon from "../Pages/comingsoon.component";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../../src/store/actions/";

library.add(faCalendarCheck, faClock, faTheaterMasks, faMapMarkerAlt);

class EventList extends Component {
  constructor(props){
    super(props);
    this.state = { showText: false};
  }
  componentDidMount() {
    this.props.fetchEvent();
  }

  


  render() {
    const image_url = "http://167.71.231.3/storage/";
    const events = this.props.events;
    // const desc = events.description;
    // function createMarkup(desc) { return {__html: desc}; };
   
    
    return (
      <div>
        <BannerHero title={"Events"} />
        <div className="fullWrap">
          {events[0] ? (
            <section className="blog-posts">
              <div className="container">
                <div className="row">
                  {events.map(item => {
                    return (
                      <div
                        className="col-lg-4 col-md-4 col-sm-6 col-full-width"
                        key={item.id}
                      >
                        <article className="blog-post">
                          <div className="entry-image-wrapper">
                            <Link to={{
                                pathname: `/event/${item.id}`
                              }}>
                              <figure className="post-thumbnail event-box">
                                <img
                                  src={image_url + item.image} className=""
                                  alt="blog Thumb"
                                />
                              </figure>
                            </Link>
                          </div>
                          <div className="post-type-icon">
                            <span>6 Oct</span>
                          </div>
                          <div className="entry-content-wrapper">
                            <div className="event-title">
                              <span>{item.title}</span>
                              <span className="event-status">Upcoming</span>
                            </div>
                            <div className="entry-meta entry-meta-footer">
                              <ul className="event-shortdetails">
                                <li>
                                  <FontAwesomeIcon
                                    icon={faCalendarCheck}
                                    className="ico"
                                  />
                                  {item.date_on}
                                </li>
                                <li>
                                  <FontAwesomeIcon
                                    icon={faClock}
                                    className="ico"
                                  />
                                  11:00 PM to 1:00 AM
                                </li>
                                <li>
                                  <FontAwesomeIcon
                                    icon={faMapMarkerAlt}
                                    className="ico"
                                  />
                                  {item.location}
                                </li>
                                <li>
                                  <FontAwesomeIcon
                                    icon={faTheaterMasks}
                                    className="ico"
                                  />
                                  Beatless
                                </li>
                              </ul>
                            </div>
                            <div className="entry-content">
                              {/* <div dangerouslySetInnerHTML={createMarkup(item.description)}/> */}
                              
                                <ReadMoreAndLess
                                  ref={this.ReadMore}
                                  className="read-more-content"
                                  charLimit={250}
                                  readMoreText="Read more"
                                  readLessText="Read less"
                              >
                            {item.description}
                              </ReadMoreAndLess>
                             
                            </div>
                            <Link
                              to="/detail"
                              className="tim-btn tim-btn-bgt read-more-btn"
                            >
                              Buy Ticket
                            </Link>
                          </div>
                        </article>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          ) : (
              <div>
                <ComingSoon />
              </div>
            )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  // call action functions
  return {
    fetchEvent: () => dispatch(actionCreators.fetchEvent())
  };
};

const mapStateToProps = state => {
  return {
    events: state.events.list // in this state list is array name as stored  API  from defined in eventListReducer
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList);
