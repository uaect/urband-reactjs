import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions/";
import Moment from 'moment';
class upcomingShowHome extends Component {

  componentDidMount() {
    this.props.fetchEventDetail();
  }

  render() {
    const events = this.props.events;
    console.log("events", events);

    return (

      <section className="section-padding show-archive">
        <div className="container">
          <div className="d-flex justify-content-center row">
            <div className="col-xl-10">
              <div className="section-title style-four">
                <h2>UPCOMING SHOWS</h2>
              </div>
              {events && events.map(item => {
                return (
                  <div key={item.id} className="single-show-ticket row no-guters">
                    <div className="col-sm-3 col-md-3 col-lg-3">
                      <div className="date-time">
                        <h6>{Moment(item.date_to).format('dddd')}</h6>
                        <p>{Moment(item.date_to).format('DD-MM-YYYY')}</p>
                      </div>

                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-7">
                      <h5>{item.title}</h5>
                      <p> {item.location}</p>
                    </div>
                    <div className="col-sm-3 col-md-3 col-lg-2">
                      <div className="a_hover">
                        <Link className="tim-btn" to={{
                          pathname: `/ticket-detail/${item.id}`
                        }}>
                        Ticket
                                </Link>
                      </div>
                    </div>
                  </div>);
              })}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => {
  // call action functions
  return {
    fetchEventDetail: () => dispatch(actionCreators.fetchEventDetail())
  };
};

const mapStateToProps = state => {
  return {
    events: state.eventdetails.eventdetails,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(upcomingShowHome);

