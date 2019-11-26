import React, { Component } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icon from "../../../assets/img/ijas.webp";

import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions/";

class HeaderTypeOne extends Component {
    render() {
        console.log("xxxxx :",this.props.orders);

        return (
            <div>
                <div className="profileBoxTp1 mb-3">
                    <div className="profileBoxHeader1">
                        <div className="OrderShowingBoxTp1">
                            <div>OrderId:&nbsp;1323232323 <span className="DateBoxTp1">Placed on Oct 30, 2019</span></div>
                            <div>See Detatils</div>
                        </div>
                    </div>
                    <div className="profileBoxContent">
                        {/* status */}
                        <div className="OrderStatusShowingBoxTp1">
                            <div>Processing</div>
                            <div>
                                <div>
                                    <ul className="StatusNavigator clearfix">
                                        <li class="completed">
                                            <div className="StatusBox101">
                                                <FontAwesomeIcon icon={faCheck} />
                                                Ordered
                </div>
                                        </li>
                                        <li class="completed">
                                            <div className="StatusBox101">
                                                <FontAwesomeIcon icon={faCheck} />
                                                Processing
                </div>
                                        </li>
                                        <li>
                                            <div className="StatusBox101">
                                                <FontAwesomeIcon icon={faCheck} />
                                                shipped
                </div>
                                        </li>
                                        <li>
                                            <div className="StatusBox101">
                                                <FontAwesomeIcon icon={faCheck} />
                                                Delivered
                </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* items */}
                        {/* <div className="OrderStatusItemBox mb-2">
                            {items ? (
                                items.map(item => {
                                    return (
                                        <div key={item.id} className="row d-flex align-items-center">
                                            <div className="col-auto">
                                                <img className="PrdctIcn101" src={image_url + item.files[0].image} alt="" />
                                            </div>
                                            <div className="col">
                                                <div>
                                                    <div className="TxtSt101">{item.title}</div>

                                                </div>
                                            </div>
                                            <div className="col text-center">
                                                <div>
                                                    <div className="TxtSt101">Quantity</div>
                                                    <div className="TxtSt102">{item.quantity}</div>
                                                </div>
                                            </div>
                                            <div className="col-auto text-center">
                                                <div>
                                                    <div className="TxtSt103">Price</div>
                                                    <div className="TxtSt104"> {item.price} AED</div>
                                                </div>
                                            </div>
                                        </div>)
                                })) : ""}
                        </div> */}
                    
                    </div>
                </div>
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => {
    return {
        getorderedlist: () => dispatch(actionCreators.getorderedlist())
    };
};

const mapStateToProps = state => {
    return {
        orders: state.order.orders
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderTypeOne);