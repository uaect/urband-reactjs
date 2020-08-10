import React, { Component } from "react";
import ComingSoon from "../Pages/comingsoon.component";
import BannerHero from "../Banners/bannerHero";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import * as actionCreators from "../../../src/store/actions/";

library.add(faQuoteLeft, faQuoteRight);
class Clients extends Component {
  componentDidMount() {
    this.props.fetchClients();
    this.props.fetchClientsList();
  }

  render() {
    const image_url = "http://happiness-spinner.com/storage/";
    const clients = this.props.clients;

    const clientslist = this.props.clientslist;

    if (clients !== "Emptey table" || !clients) {
      var data = clients;
    }
    if (clientslist !== "Emptey table" || !clientslist)
      var clientdata = clientslist;
    // const responsive = {
    //   superLargeDesktop: {
    //     // the naming can be any, depends on you.
    //     breakpoint: { max: 4000, min: 3000 },
    //     items: 3
    //   },
    //   desktop: {
    //     breakpoint: { max: 3000, min: 1024 },
    //     items: 3
    //   },
    //   tablet: {
    //     breakpoint: { max: 1024, min: 464 },
    //     items: 2
    //   },
    //   mobile: {
    //     breakpoint: { max: 464, min: 0 },
    //     items: 1
    //   }
    // };

    return (
      <div>
        <BannerHero title={"Client"} />
        <div className="fullWrap">
          <div>
            {data ? (
              <section className="header-padd">
                <div className="container">
                  <div className="row">
                    <div className="text-center page-head">
                      What our clients say
                    </div>
                    <div className="client-Wrapper">
                      <FontAwesomeIcon
                        icon={faQuoteLeft}
                        className="quote left"
                      />
                      <FontAwesomeIcon
                        icon={faQuoteRight}
                        className="quote right"
                      />
                      <div className="col-md-12">
                        {data &&
                          data.map(item => {
                            return (
                              <div className="client-avathar" key={item.id}>
                                <figure>
                                  <img
                                    src={image_url + "/" + item.image}
                                    alt="thumb"
                                    className="rounded-circle fit-it"
                                  />
                                </figure>
                                <p>{item.description}</p>
                                <div className="name">
                                  <span>-</span> {item.title}
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ) : (
                <div>
                  <ComingSoon />
                </div>
              )}

            {clientdata ? (
              <section className="partners-area">
                <div className="container">
                  <div className="d-flex justify-content-center row">
                    <div className="col-xl-10">
                      <div className="row">
                        <div className=" col-md-5">
                          <div className="section-title style-five float-left">
                            <h2>OUR Clients</h2>
                          </div>
                        </div>
                        <div className="col-md-7">
                          {clientdata && clientdata.length > 0 && (
                            <ul className="client-list">
                              {clientdata.map(item => {
                                return (
                                  <li key={item.id}>
                                    <img
                                      src={image_url + "/" + item.image}
                                      alt="thumb"
                                      className="fit-it"
                                    />
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
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
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  // call action functions
  return {
    fetchClients: () => dispatch(actionCreators.fetchClients()),
    fetchClientsList: () => dispatch(actionCreators.fetchClientsList())
  };
};

const mapStateToProps = state => {
  return {
    clients: state.clients.items,
    clientslist: state.clientslist.items
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
