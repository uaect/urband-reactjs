import React , {Component} from 'react';
import './header.component.css'
class StoreHeader extends Component{


    render(){
        

        return (
           
        <div className="container-fluid">
            <div class="catalog-tab-discography">
                <div class="heading">
                    <div class="cell cell-title"><h2 class="heading-2">Albums</h2></div>
                    <div class="cell cell-line"><div class="line"></div></div>
                    <div class="cell cell-sort">
                    <div className="product-top-menu">
                                    <div className="product-menu-wrapper">
                                        <span>Short By</span>
                                        <select id="product-short" class="product-select">
                                            <option value="">Featured</option>
                                            <option value="january">Best Selling</option>
                                            <option value="march">Price, high to low</option>
                                        </select>
                                        
                                    </div>
                                </div>       

                    </div>
                 </div>
            </div>
             
		</div>
           
           
        );
    }
}

export default StoreHeader;




