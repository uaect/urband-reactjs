import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import BannerHero from "../../Banners/bannerHero";
import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions";

class ShopHome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      category: "",
      priceMin: "",
      priceMax: "",
      sort: ""
    };
  }

  componentDidMount() {
    this.props.fetchStoreList(this.state);
    this.props.fetchStoreCategory();
  }

  handleScroll = (e) => {
    let element = e.target
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      this.setState({
        page: this.state.page++
      })
      this.props.fetchStoreList(this.state);
    }
  }

  handleChange(state,evt ) {
    let _state = this.state
    _state[state] = evt.target.value;
    this.setState({
      ..._state
    })
      this.props.fetchStoreList(this.state);
  }

  handleCategory(state, evt ) {
    if(evt.target.value == this.state.category){
      this.setState({
        category: ""
      })
    }else{
      this.setState({
        category: evt.target.value
      })
    }
    this.props.fetchStoreList(this.state);
  }

  render() {
    const image_url = "https://admin.urbandmusic.com/storage/";
    const storelist = this.props.storelist;
    
    return (
      <div>
        <BannerHero title={"Merchandise"} />
        <section className="shop header-padd"  onScroll={this.handleScroll}>
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-4">
                <aside className="widget widget-shop widget_price">
                  <h3 className="widget-title-shop">Filter by</h3>
                  <div className="filter-left-type">
                    <h3 className="title">By Category</h3>

                    {this.props.storecategory &&
                      this.props.storecategory.map(cat => {

                        return (<div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value={cat.id}
                            id="defaultCheck1"
                            onChange={this.handleCategory.bind(this, 'category')}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="defaultCheck1"
                          >
                            {cat.title}
                          </label>
                        </div>);

                      })
                    }

                  </div>
                  <div className="filter-left-type">
                    <h3 className="title">By Price</h3>
                    <div className="input-group price-range">
                      <div className="input-group-prepend price-group">
                        <span className="input-group-text">Min-Max</span>
                      </div>
                      <input type="text" aria-label="First name" onChange={this.handleChange.bind(this, 'priceMin')} className="form-control field-control" />
                      <input type="text" aria-label="Last name" onChange={this.handleChange.bind(this, 'priceMax')} className="form-control field-control" />
                    </div>
                  </div>

                </aside>
              </div>

              <div className="col-xl-8 col-lg-9 col-md-9">
                <div className="product-top-menu">
                  <div className="product-menu-wrapper">
                    <span>Short By</span>
                    <select id="product-short" className="product-select" onChange={this.handleChange.bind(this, 'sort')}>
                      <option value="">Sorting</option>
                      <option value="new">Newest</option>
                      <option value="old">Oldest</option>
                    </select>
                  </div>
                </div>
                {storelist.length &&
                  <div className="row store-products">
                    {storelist.map(item => {
                      return (
                        <div className="col-md-4 col-sm-6 col-12" key={item.id}>
                          <Link to={{ pathname: `/detail/${item.id}` }}>
                            <div className="product">
                              <div className="thumb-box fit-wrap">
                                <img
                                  className="fit-it store-img"
                                  src={image_url + item.files[0].image}
                                  alt="Product Thumb"
                                />
                              </div>
                              {/* <div className="product-thumb-hover">
                                                                <div className="btn-cart"><Link to="/">Add to Cart</Link></div>
                                                            </div> */}
                              <div className="product-detail bottom">
                                <h4 className="product-name">{item.title}</h4>
                                <p className="product-price">
                                  {item.price} AED
                                </p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                }
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
    fetchStoreList: (state) => dispatch(actionCreators.fetchStoreList(state)),
    fetchStoreCategory: () => dispatch(actionCreators.fetchStoreCategory())
  };
};

const mapStateToProps = state => {
  return {
    storelist: state.storelist.items,
    storecategory: state.storecategory.items
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopHome);
