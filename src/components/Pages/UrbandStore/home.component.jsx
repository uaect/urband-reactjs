import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import FilterLeft from '../../Pages/UrbandStore/filter.component'
import '../ListingGrid/product-list.component.css';
import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions";
class ShopHome extends Component {
    componentDidMount() {
        this.props.fetchStoreList();
    }
    render() {
        const image_url = "https://admin.urbandmusic.com/storage/";
        const storelist = this.props.storelist;
        
        return (

            <div>
                <section className="page-header store-banner">
                    <div className="tim-container">
                        <div className="page-header-title text-center">
                            <h3>Store</h3>
                            <h2>Feel our Shop</h2>
                        </div>

                        <div className="breadcrumbs">
                            <Link to="/">Home</Link>
                            <span>/</span>
                            <span>Store</span>
                        </div>

                    </div>
                </section>

                <section className="shop site-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-4">
                                <aside id="product-price" className="widget widget-shop widget_price">
                                    <h3 className="widget-title-shop">Filter by</h3>
                                    <FilterLeft />

                                </aside>
                            </div>

                            <div className="col-xl-8 col-lg-9 col-md-9">
                                <div className="product-top-menu">
                                    <div className="product-menu-wrapper">
                                        <span>Short By</span>
                                        <select id="product-short" className="product-select">
                                            <option value="">Featured</option>
                                            <option value="january">Best Selling</option>
                                            <option value="march">Price, high to low</option>
                                        </select>

                                    </div>
                                </div>
                                {storelist.length ? (

                                    <div className="row store-products">
                                        {storelist.map(item => {
                                            return (
                                                <div className="col-md-4 col-sm-6 col-12" key={item.id}>
                                                      <Link to={{ pathname: `/detail/${item.id}` }}>
                                                    <div className="product">
                                                                <div className="thumb-box fit-wrap">
                                                                <img className="fit-it store-img" src={image_url + item.files[0].image} alt="Product Thumb" />
                                                                </div>
                                                            {/* <div className="product-thumb-hover">
                                                                <div className="btn-cart"><Link to="/">Add to Cart</Link></div>
                                                            </div> */}
                                                        <div className="product-detail bottom">
                                                            <h4 className="product-name">{item.title}</h4>
                                                            <p className="product-price">{item.price} AED</p>

                                                        </div>
                                                    </div>
                                                    </Link>

                                                </div>

                                            );
                                        })}
                                    </div>

                                ) : ""}

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
        fetchStoreList: () => dispatch(actionCreators.fetchStoreList()),
    };
};

const mapStateToProps = state => {
    return {
        storelist: state.storelist.items
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopHome);





