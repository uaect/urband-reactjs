import React, { Component } from "react";
import HeaderTypeOne from "../uiComponents/headerTypeOne.component";
import OrderBox from "../uiComponents/orderBox.component";
import OrderStatusBox from "../uiComponents/orderStatusBox.component";
import OrderStatusItem from "../uiComponents/orderStatusItem.component";
import ButtonTypeOne from "../uiComponents/buttonType1.component";
import ListStyleTp1 from "../uiComponents/ListStyleTp1.component";
import ValueBoxType1 from "../uiComponents/valueBoxType1.component";
import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions/";
class OrderPlaced extends Component {
  componentDidMount() {
    let ticketDetails = this.props.location.state;
    if (ticketDetails.cart) {
      this.setState({
        cart: ticketDetails.cart,
        total:ticketDetails
      })
    }


  }
  constructor(props) {
    super(props)
    this.state = {
      cart: [],
      total:[]

    }
  }

  render() {
    console.log("tttt33333333333tttt", this.state.cart);
    return (
      <div>
        <div className="orderPlacedBoxTp1">
          <div>
            <HeaderTypeOne
              heading="Order Placed Successfully...."
              subheading="You Can Track your Orders by urband Orders track"
            />
          </div>
          <div className="mt-4 mb-4">
            <OrderBox orderId="NAEBA0053772514">
              <OrderStatusBox />
              <OrderStatusItem item={this.state.cart}/>
              <div className="GridBoxTp201">
                <div className="row d-flex align-items-center">
                  <div className="col-md-6">
                    <div className="ExtraFeaturesBox">
                      <ListStyleTp1
                        HeaderText="Paymant Type"
                        SubHeaderText="Pay Pal"
                      />
                      <ListStyleTp1
                        HeaderText="Delivery Address"
                        SubHeaderText="Nechipparamban House"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <ValueBoxType1 item={this.state.total}
                      TotalAmount="152"
                      VAT="5"
                      Shipping="152"
                      GrandTotal="1568"
                    />
                  </div>
                </div>
              </div>
            </OrderBox>
          </div>
          <div>
            <HeaderTypeOne
              heading=""
              subheading="You Can continue Purchasing By Clicking"
            />
          </div>
          <div>
            <ButtonTypeOne buttonText="Goto Products" />
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  // call action functions
  return {
    getfromcart: () => dispatch(actionCreators.getfromcart())
  };
};

const mapStateToProps = state => {
  return {
    cartitems: state.cartitems.items,
    address: state.getaddress.address,
    emirateslist: state.emirateslist.emirates,
    arealist: state.area.emirates
    // in this state list is array name as stored  API  from defined in eventListReducer
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderPlaced);


