import React, { Component } from "react";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EmptyBox from "../../hoc/EmptyMessageBox/EmptyBox.component";
import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions/";
import SkeltonBox from "../../hoc/skeltonBox/SkeltonBox.component";
import AlertBox from "../../hoc/AlertBox/index";
library.add(faTimes, faArrowLeft);

class cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartData: [],
      removeflag: false,
      cartid: "",
      quantity: "",
      cartflag: "",
      totalcost: "",
      cartItems: [],
      deleteflag:false
    };
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(productid) {
    this.props.deletecart(productid)
      .then(() => {
        
        this.setState({
          deleteflag: true
        });
        this.initialload();
      })
      .catch(error => {
        if (error.error === "Unauthorised") {
          this.setState({
            errpassword: "Invalid credential check username or passsord"
          });
        }
      });
  }

  componentDidMount() {
    this.initialload();
  }

  initialload() {
    this.props.getfromcart()
      .then(() => {
        if (this.props.cartitems.length) {
          var cartItems = this.props.cartitems;
          console.log("tttttttt", cartItems);
          
          var totalcost = 0;
          if (cartItems !== "emtey cart") {
            this.setState({
              cartflag: true,
              cartItems: cartItems
            });
            for (let i = 0; i < cartItems.length; i++) {
              if (cartItems[i].product.price) {
                totalcost = totalcost + parseFloat(cartItems[i].product.price) * parseInt(cartItems[i].quantity);
                this.setState({
                  totalcost: totalcost
                });
              }
            }
          } else {
            this.setState({
              cartflag: false
            });
          }
        } else {
          this.setState({
            cartflag: false
          });
        }
      })
      .catch(error => {
        if (error.error) {
          this.setState({
            errpassword: error.error
          });
        }
      })
  }

  increment(item) {
    var quentity = (item.quantity) + 1
    if (quentity && item) {
      this.props.updatecartQuantity(quentity, item.id)
        .then(() => {
          this.initialload();
        })
        .catch(error => {

        });
    }
  }

  decrement(item) {
    if (item.quantity !== 1) {
      var quentity = (item.quantity) - 1
      if (quentity && item) {
        this.props.updatecartQuantity(quentity, item.id)
          .then(() => {
            this.initialload();
          })
          .catch(error => {
          });
      }
    }
  }




  render() {
    const image_url = "https://admin.urbandmusic.com/storage/";
    return (
      <div className="ani-slideInDown">
        <section className="header-padd cart-product mt-5">
          <div className="tim-container">
            <div className="store-top-head m-0">
              <Link to="/cart">
                <FontAwesomeIcon icon={faArrowLeft} className="ico" />
              </Link>
              <h2>Cart</h2>
            </div>
            {this.state.deleteflag?(
            <AlertBox
          ActiveOrNot={true}
          alertMessage="Item removed from cart"
        />):""}
            {this.state.cartflag ? (
              this.state.cartItems.map(item => {
                return (
                  <div className="row cart-item" key={item.id}>
                    <div className="col-sm-6 d-flex">
                      <div className="cart-image">
                        <Link to="">
                          {" "}
                          <img
                            className="fit-it store-img"
                            src={image_url + item.files[0].image}
                            alt="album thumb"
                            className="fit-it"
                          />
                        </Link>
                      </div>
                      <div className="cart-description">
                        <h2>{item.title}</h2>
                        <div className="style-fullwidth">
                          {/*<div className="short-desc">Size: S</div>
                          <div className="short-desc">Color: Black</div>*/}
                          <div className="short-desc">
                            Qunatity: {item.quantity}
                          </div>
                          <div className="short-desc">
                            Price: AED {item.product.price}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-2 d-flex price-name-line">
                      <div className="product-price">
                        <span>AED {item.product.price}</span>
                      </div>
                    </div>
                    <div className="col-sm-2 d-flex price-name-line">
                      <div className="quantity-input">
                        <button
                          disabled={item.quantity == 1}
                          className="quantity-input__modifier quantity-input__modifier--left"
                          onClick={() => this.decrement(item)}
                        >
                          —
                        </button>
                        <input
                          type="text"
                          className="quantity-input__screen"
                          value={item.quantity}
                          defaultValue="0"
                        />
                        <button
                          className="quantity-input__modifier quantity-input__modifier--right"
                          onClick={() => this.increment(item)}
                        >
                          ＋
                        </button>
                      </div>
                    </div>

                    <div class="col-sm-2 d-flex price-name-line delet-line">
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="remove"
                        onClick={() => this.deleteItem(item.product_id)}
                      />
                    </div>
                  </div>
                );
              })
            ) : (
                <div>
                  <EmptyBox
                    ThumbImage="noCartMessage.png"
                    HeaderText="Your shopping cart looks empty"
                    SubText="What are you waiting for?"
                    LinkText="Start Shopping"
                    LinkUrl="/store"
                  />
                </div>
              )}
            {this.state.cartflag ? (
              <div className="cart-total right-push">
                <div className="d-flex price align-items-center">
                  Total
                  <span className="ml-2 mr-4">
                    {this.state.totalcost ? this.state.totalcost : 0} AED
                  </span>
                  <Link
                    to={this.state.cartflag ? "/checkout" : "#"}
                    className="checkout-btn-big bg-red-hover tim-btn"
                  >
                    check out
                  </Link>
                </div>
              </div>
            ) : (
                ""
              )}
          </div>
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  // call action functions
  return {
    getfromcart: () => dispatch(actionCreators.getfromcart()),
    deletecart: id => dispatch(actionCreators.deletecart(id)),
    updatecartQuantity: (quentity, id) => dispatch(actionCreators.updatecartQuantity(quentity, id))

  };
};

const mapStateToProps = state => {
  return {
    cartitems: state.cartitems.items
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(cart);
