import React, { Component } from "react";
import "./style.css";
import BannerHero from "../../Banners/bannerHero";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalendarWeek, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions/";
import Moment from 'moment';
library.add(faCalendarWeek, faArrowLeft);

class eventTickets extends Component {
  componentDidMount() {
    this.props.fetchEventDetail();
  }
  render() {
    const events = this.props.events;
    return (
      <div>
        <BannerHero title={"eventTicket"} />
        <section className="page-padd ticket-wrap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="table-responsive">
                  <table className="show-table table-borderless">
                    <tbody>
                      {events && events.map(item => {
                        return (
                          <tr key={item.id}>
                            <td className="show-date">
                              <span className="date">{Moment(item.date_to).format('DD-MM-YYYY')}</span>
                              <span className="day">{Moment(item.date_to).format('dddd')}</span>
                            </td>
                            <td className="show-hall">
                              <span className="hall-name">
                                {item.location}
                              </span>
                            </td>
                            <td className="show-name">{item.title}</td>
                            <td className="show-ticket">
                            <Link className="tim-btn" to={{
                                pathname: `/ticket-detail/${item.id}` 
                              }}>
                                Buy Ticket
                                </Link>
                              {/* <Link to="/ticket-detail" className="tim-btn">
                                Buy Ticket
                          </Link> */}
                            </td>
                          </tr>);
                      })}
                    </tbody>
                  </table>
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
)(eventTickets);

