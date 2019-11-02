import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './product-list.component.css';
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions";
class ProductListHero extends Component {


    componentDidMount() {
        this.props.fetchAlbums();
    }

    render() {
        const image_url = "http://167.71.231.3/storage/"
        const albums = this.props.albums;

        return (

            <div>


                {albums.length > 0
                    ? albums.map(item => {
                        return (
                            <div className="product" key={item.id}>
                                <div className="product-thumb">
                                    <img className="img-responsive" src={image_url + item.image} alt="Product Thumb" />
                                    <div className="product-thumb-hover">
                                        <div className="btn-cart"><Link to="/">Add to Cart</Link></div>
                                    </div>
                                </div>
                                <div className="product-detail">
                                    <h4 className="product-name">Music Album</h4>
                                    {/* <p className="product-price">$15</p>
                                    <div className="detail"> 
                                    {this.props.children}
                                    </div>    */}
                                </div>
                            </div>
                        );
                    })
                    : ""}

            </div>


        );
    }
}
const mapDispatchToProps = dispatch => {
    // call action functions
    return {
        fetchAlbums: () => dispatch(actionCreators.fetchAlbums())
    };
};

const mapStateToProps = state => {
    return {
        albums: state.albums.items
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductListHero);






