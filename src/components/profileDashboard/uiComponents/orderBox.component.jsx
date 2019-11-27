import React, { Component } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icon from "../../../assets/img/ijas.webp";

import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions/";

class HeaderTypeOne extends Component {

    componentDidMount() {
        this.props.getorderedlist();
    }

    render() {
        const orders = this.props.orders.result;
        const image_url = this.props.orders.image_url+'/';
        return (
            <div>
                {orders ? (
                    orders.map(order => { 
                    return (<div className="profileBoxTp1 mb-3">
                    <div className="profileBoxHeader1">
                        <div className="OrderShowingBoxTp1">
                            <div>Order ID:&nbsp;{order.tracking_id} <span className="DateBoxTp1">Placed on {order.created_at}</span></div>
                        </div>
                    </div>
                    <div className="profileBoxContent">
                        {/* status */}
                        <div className="OrderStatusShowingBoxTp1">
                            <div>{order.order_status.status}</div>
                            <div>
                                <div>
                                    <ul className="StatusNavigator clearfix">
                                        <li class={order.order_status.status == "Ordered"?"completed":""}>
                                            <div className="StatusBox101">
                                                <FontAwesomeIcon icon={faCheck} />
                                                Ordered
                                            </div>
                                        </li>
                                        <li class={order.order_status.status == "Proccessing"?"Processing":""}>
                                            <div className="StatusBox101">
                                                <FontAwesomeIcon icon={faCheck} />
                                                Proccessing
                                            </div>
                                        </li>
                                        <li class={order.order_status.status == "Shipped"?"Processing":""}>
                                            <div className="StatusBox101">
                                                <FontAwesomeIcon icon={faCheck} />
                                                Shipped
                                        </div>
                                        </li>
                                        <li class={order.order_status.status == "Shipped"?"Processing":""}>
                                            <div className="StatusBox101">
                                                <FontAwesomeIcon icon={faCheck} />
                                                Shipped
                                            </div>
                                        </li>
                                        {order.order_status.status == "Cancelled" &&
                                        <li class="bg-danger">
                                            <div className="StatusBox101 text-light">
                                                <FontAwesomeIcon icon={faCheck} />
                                                Cancelled
                                            </div>
                                        </li>
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* items */}
                         <div className="OrderStatusItemBox mb-2">
                            {order.order_items ? (
                                order.order_items.map(item => {
                                    return (
                                        <div key={item.id} className="row d-flex align-items-center">
                                            <div className="col-auto">
                                                {item.files && item.files.length > 0 && <img className="PrdctIcn101" src={image_url + item.files[0].image} alt="" />}
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
                        </div> 
                    
                    </div>
                </div>)
                     })) : ""}
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