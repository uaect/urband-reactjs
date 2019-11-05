import React, { Component } from "react";
import ComingSoon from "../Pages/comingsoon.component";
import BannerHero from "../Banners/bannerHero";



class Radio extends Component{


    render(){

         

        return (
           
         <div>
            <BannerHero title={"radio"} /> 
            <section className="">
                <div className="container">
                <ComingSoon/>
                </div>
                </section> 
		</div>
           
           
        );
    }
}

export default Radio;




