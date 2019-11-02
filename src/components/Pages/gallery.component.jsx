import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';
import FsLightbox from 'fslightbox-react';


function Gallery() {
 
    const [firstName, setFirstName] = React.useState({});
    const [lastName, setLastName] = React.useState({});
  
       
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        sourceIndex: 0
        });
        
        function openLightboxOnSourceIndex(sourceIndex) {
        setLightboxController({
        toggler: !lightboxController.toggler,
        sourceIndex: sourceIndex,
        });
        }
        React.useEffect(() => {
            const body = {
                "page":"1"
            };
            fetch("https://admin.urbandmusic.com/api/gallerycategory", {
                method: "POST",
                body: JSON.stringify(body)
            })
              .then(results => results.json())
              .then(result => {
                //console.log("iiiiiiiiiii", result);
                
                
                setFirstName(result.result[0].id);
                //console.log("iiiiiitttttttiiiii", firstName);
                setLastName();
              });
          }, []);
        
        //   useEffect(() => {
        //     fetchData();
        //     console.log("dddddddd", planets);
            
        //   }, []);
        return (
           
            <div>
                 <section className="page-header artist-banner">
                    <div className="tim-container">
                        <div className="page-header-title text-center">
                        <h2>Gallery</h2>
                        </div>

                        <div className="breadcrumbs">
                        <Link to="/">Home</Link>
                            <span>/</span>
                            <span>Gallery</span>
                        </div>

                    </div>
                </section>  

            </div>
        );
    }


    export default Gallery;



