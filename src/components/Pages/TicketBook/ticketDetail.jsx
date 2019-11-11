import React, { Component } from "react";
import "./style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClock, faArrowLeft,faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "react-select";
import { Link } from "react-router-dom";

library.add(faClock, faArrowLeft,faMapMarkerAlt);

class ticketDetail extends Component {
  state = {
    selectedOption: null
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  render() {
    const options = [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" }
    ];
    const { selectedOption } = this.state;

    return (
      <div>

        <section className="page-padd ticket-wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="ticket-offer-item">
                  <div className="ticket-offer-title">
                    <Link to="/event-list">
                      <FontAwesomeIcon icon={faArrowLeft} className="ico" />
                    </Link>
                    <h2>Shaan and KK Live in Dubai</h2>
                  </div>
                  <div className="event-show-row active">
                    {/* <div className="event-show-cols select-point">
                                    <div class="select-circle-block"></div>
                                </div> */}
                    <div className="event-show-cols time">
                      <FontAwesomeIcon icon={faClock} className="ico" />
                      <span>18:00 - 23:59</span>
                    </div>
                    <div className="event-show-cols time">
                      <span>Fri 22-Nov</span>
                    </div>
                    <div className="event-show-cols venue">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="ico" />
                      <span>Dubai Opera House</span>
                    </div>
                  </div>
                </div>

                <div className="ticket-offer mt-5">
                  <div className="title">Select Your Ticket</div>
                  <ul>
                    <li>
                      <div className="block">
                        <div className="type">Gold</div>
                      </div>
                      <div className="block">
                        <div className="rate">120.00 AED</div>
                      </div>
                      <div className="block ticket-opt urband-select-custom">
                        <Select
                          value={selectedOption}
                          onChange={this.handleChange}
                          options={options}
                        />
                      </div>
                    </li>
                    <li>
                      <div className="block">
                        <div className="type">Diamond - North</div>
                      </div>
                      <div className="block">
                        <div className="rate">130.00 AED</div>
                      </div>
                      <div className="block ticket-opt urband-select-custom">
                        <Select
                          value={selectedOption}
                          onChange={this.handleChange}
                          options={options}
                        />
                      </div>
                    </li>
                    <li>
                      <div className="block">
                        <div className="type">Platinum - Buy 1 get 1</div>
                      </div>
                      <div className="block">
                        <div className="rate">300.00 AED</div>
                      </div>
                      <div className="block ticket-opt urband-select-custom">
                        <Select
                          value={selectedOption}
                          onChange={this.handleChange}
                          options={options}
                        />
                      </div>
                    </li>
                  </ul>
                  <div className="ticket-office__footer">
                    <div className="container">
                      <div className="ticket-office__counter">
                        <div className="ticket-office__person-count no-mobile">
                          Persons:{" "}
                          <span className="ticket-office__person-count-number">
                            1
                          </span>
                        </div>
                      </div>
                      <div className="ticket-office__checkout">
                        <div className="ticket-office__price no-mobile">
                          <div className="ticket-office__total">
                            <span>500.00</span> AED
                          </div>
                          <div className="cancel clearfix">
                            <span
                              className="ticket-office__fee"
                              data-ticket-office-fee=""
                            ></span>
                            <Link to="/">
                              cancel
                            </Link>
                          </div>
                        </div>
                        <Link to="/ticket-checkout" className="ticket-office__button tim-btn">
                          check out
                        </Link>
                      </div>
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

export default ticketDetail;
