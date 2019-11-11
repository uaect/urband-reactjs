import React, { Component } from "react";
import "./style.css";
import BannerHero from "../../Banners/bannerHero";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalendarWeek, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

library.add(faCalendarWeek, faArrowLeft);

class eventTickets extends Component {
  render() {
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
                      <tr>
                        <td className="show-date">
                          <span className="date">25 Dec</span>
                          <span className="day">Wedbesday</span>
                        </td>
                        <td className="show-hall">
                          <span className="hall-name">
                            KIB Conference Hall, USA
                          </span>
                        </td>
                        <td className="show-name">Rock and Roll</td>
                        <td className="show-ticket">
                          <Link to="/ticket-detail" className="tim-btn">
                            Buy Ticket
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="show-date">
                          <span className="date">25 Dec</span>
                          <span className="day">Wedbesday</span>
                        </td>
                        <td className="show-hall">
                          <span className="hall-name">
                            KIB Conference Hall, USA
                          </span>
                        </td>
                        <td className="show-name">Rock and Roll</td>
                        <td className="show-ticket">
                          <Link to="/ticket-detail" className="tim-btn">
                            Buy Ticket
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td class="show-date">
                          <span className="date">25 Dec</span>
                          <span className="day">Wedbesday</span>
                        </td>
                        <td className="show-hall">
                          <span className="hall-name">
                            KIB Conference Hall, USA
                          </span>
                        </td>
                        <td className="show-name">Rock and Roll</td>
                        <td className="show-ticket">
                          <Link to="/ticket-detail" className="tim-btn">
                            Buy Ticket
                          </Link>
                        </td>
                      </tr>
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

export default eventTickets;
