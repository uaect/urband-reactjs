import React, { Component } from "react";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "./image-gallery.scss";
import "./ionicons.scss";
import "./_ionicons-variables.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartPlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faCartPlus);

class ShopDetail extends Component {
  render() {
    const images = [
      {
        original:
          "https://rukminim1.flixcart.com/image/660/792/jlgwmfk0/t-shirt/g/w/9/l-blubrdr01-diwazzo-original-imaf8h3gzhgnuw7h.jpeg?q=50",
        thumbnail:
          "https://rukminim1.flixcart.com/image/660/792/jlgwmfk0/t-shirt/g/w/9/l-blubrdr01-diwazzo-original-imaf8h3gzhgnuw7h.jpeg?q=50"
      },
      {
        original:
          "https://rukminim1.flixcart.com/image/660/792/jybvafk0/t-shirt/z/z/n/xl-092-henley-try-this-original-imafghb9gpxgaarg.jpeg?q=50",
        thumbnail:
          "https://rukminim1.flixcart.com/image/660/792/jybvafk0/t-shirt/z/z/n/xl-092-henley-try-this-original-imafghb9gpxgaarg.jpeg?q=50"
      }
    ];
    return (
      <div>
        <section className="page-header store-banner">
          <div className="tim-container">
            <div className="page-header-title text-center">
              <h3>Store</h3>
              <h2>Metalica Printed T-shirt</h2>
            </div>

            <div className="breadcrumbs">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Store</span>
            </div>
          </div>
        </section>

        <section className="single-product">
          <div className="container">
            <div className="single-product-wrapper">
              <div className="row">
                <div className="col-md-5 col-sm-6">
                  <ImageGallery
                    items={images}
                    showPlayButton={false}
                    showFullscreenButton={false}
                  />
                </div>

                <div className="col-md-7 col-sm-6">
                  <div className="single-product-details">
                    <h2 className="product-title">Metalica Printed T-shirt</h2>

                    <p className="price">
                      <ins>
                        <span className="woocommerce-Price-amount amount">
                          <span className="woocommerce-Price-currencySymbol">
                            AED
                          </span>
                          100
                        </span>
                      </ins>

                      <del>
                        <span className="woocommerce-Price-amount amount">
                          <span className="woocommerce-Price-currencySymbol">
                            AED
                          </span>
                          200
                        </span>
                      </del>
                    </p>

                    <div className="product-cart">
                      <div className="quantity-input">
                        <button className="quantity-input__modifier quantity-input__modifier--left">
                          —
                        </button>
                        <input
                          type="text"
                          className="quantity-input__screen"
                          value="0" defaultValue="0" onChange={this.handleChange}
                        />
                        <button className="quantity-input__modifier quantity-input__modifier--right">
                          ＋
                        </button>
                      </div>

                      <button
                        type="submit"
                        name="add-to-cart"
                        value="0"
                        className="tim-cart-btn"
                      >
                         <FontAwesomeIcon
                        icon={faCartPlus}
                        className="cart-icon"
                      />Add to cart
                      </button>
                    </div>
                    <div className="woocommerce-product-details__short-description">
									<h4>Product Details</h4>
									<p>
										Deep engagement, diversification stakeholders prevention strengthen democracy change. Life-expectancy advocate; social innovation, cross-cultural; dialogue inclusive participatory monitoring think tank.
									</p>

									

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

export default ShopDetail;
