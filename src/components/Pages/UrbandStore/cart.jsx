import React, { Component } from "react";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BannerHero from "../../Banners/bannerHero";
import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions/";
library.add(faTimes, faArrowLeft);

class cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartData: [],
      removeflag: false
    }
    this.deleteItem = this.deleteItem.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
    this.decrementQuantity = this.decrementQuantity.bind(this);
  }

  decrementQuantity(item){
    console.log("quantity", item.quantity);
    // let data = (cartItems).map((item) => {
    //   item.imageurl = this.imageUrl + item.image.file;
    //   return item;
    // });
  }

  deleteItem(productid) {
    this.props.deletecart(productid)
  }

  incrementQuantity(item) {
    console.log("quantity", item);
  }

  componentDidMount() {
    this.props.getfromcart();
  }

  render() {
    const image_url = "https://admin.urbandmusic.com/storage/";
    var cartItems = this.props.cartitems;
    console.log("qqqqqqqqq :",cartItems);
    
    var totalcost = 0;
    if (cartItems !== "emtey cart") {
      var cartflag = true;
      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].price) {
          totalcost = totalcost + (parseFloat(cartItems[i].price) * (parseInt(cartItems[i].quantity)));
        }
      }
    } else var cartflag = false;

    return (
      <div>
        <section className="header-padd cart-product mt-5">
          <div className="tim-container">
            <div className="store-top-head m-0">
              <Link to="/cart">
                <FontAwesomeIcon icon={faArrowLeft} className="ico" />
              </Link>
              <h2>Cart</h2>
            </div>
            {cartflag && cartItems.map(item => {
              return (
                <div className="row cart-item" key={item.id}>
                  <div className="col-sm-6 d-flex">
                    <div className="cart-image">
                      <Link to="">
                        {" "}
                        <img className="fit-it store-img" src={image_url + item.files[0].image} alt="album thumb"
                          className="fit-it" />

                      </Link>
                    </div>
                    <div className="cart-description">
                      <h2>{item.title}</h2>
                      <div className="style-fullwidth">
                        <div className="short-desc">Size: S</div>
                        <div className="short-desc">Color: Black</div>
                        <div className="short-desc">Qunatity: {item.quantity}</div>
                        <div className="short-desc">Price: AED {item.price}</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-2 d-flex price-name-line">
                    <div className="product-price">
                      <span>AED {item.price}</span>
                    </div>
                  </div>
                  <div className="col-sm-2 d-flex price-name-line">
                    <div className="quantity-input">
                      <button disabled={item.quantity==1} className="quantity-input__modifier quantity-input__modifier--left" onClick={() => this.decrementQuantity(item)}>
                        —
                  </button>
                      <input
                        type="text"
                        className="quantity-input__screen"
                        value={item.quantity}
                        defaultValue="0"
                      />
                      <button className="quantity-input__modifier quantity-input__modifier--right" onClick={() => this.incrementQuantity(item)}>
                        ＋
                  </button>
                    </div>
                  </div>

                  <div class="col-sm-2 d-flex price-name-line delet-line">
                    <FontAwesomeIcon icon={faTimes} className="remove" onClick={() => this.deleteItem(item.product_id)} />
                  </div>
                </div>);
            })}

            

            <div className="cart-total right-push">
              {/* <div className="goback">
                <Link to="">
                  <FontAwesomeIcon icon={faArrowLeft} className="ico" />
                  Continue Shopping
                </Link>
              </div> */}
              <div className="d-flex price align-items-center">
                Total<span className="ml-2 mr-4">{totalcost} AED</span>
                <Link
                  to="/checkout"
                  className="checkout-btn-big bg-red-hover tim-btn"
                >
                  check out
                </Link>
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
    getfromcart: () => dispatch(actionCreators.getfromcart()),
    deletecart: (id) => dispatch(actionCreators.deletecart(id))

  };
};

const mapStateToProps = state => {
  return {
    cartitems: state.cartitems.items
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(cart);

