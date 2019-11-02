import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import BannerHero from "../Banners/bannerHero";
import 'react-web-tabs/dist/react-web-tabs.css';
import { useState } from 'react';
import FsLightbox from 'fslightbox-react';

import { connect } from "react-redux";
import * as actionCreators from "../../../src/store/actions/";


function Gallery() {
    const [category, setCategory] = React.useState({
        categories: []
    });

    const [gallery, setGallery] = React.useState({
        galleries: []
    });

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
            "page": "1"
        };
        fetch("https://admin.urbandmusic.com/api/gallerycategory", {
            method: "POST",
            body: JSON.stringify(body)
        })
            .then(results => results.json())
            .then(result => {
                setCategory({ categories: result });
            });
    }, []);

    React.useEffect(() => {
        const body = {
            "page": "1",
            "category":""
        };
        fetch("https://admin.urbandmusic.com/api/gallery", {
            method: "POST",
            body: JSON.stringify(body)
        })
            .then(results => results.json())
            .then(result => {
                setGallery({ galleries: result });
            });
    }, []);

    



    function activateTabs(e) {

        
    }

    const categories = category.categories.result;
    const galleries = gallery.galleries.result;
    console.log("galleries",galleries);
    return ( 
        <div>
            <section className="page-header store-banner">
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
            <section className="section-padding">
                <div className="tim-container">
                    <div className="section-title style-four text-center">
                        <h2>Music Gallery</h2>
                    </div>
                    <div className="tim-isotope tim-isotope-2">
                        <Tabs
                            defaultTab="All"
                            onChange={(tabId) => { console.log(tabId) }}
                        >
                            <div className="tim-isotope-filter album-filter-button album-filter-button-two">
                                <TabList>
                                <Tab tabFor="all" onClick={activateTabs}>all</Tab>
                                    {categories && categories.map(item => {
                                        return (
                                                <Tab tabFor="{item.title}" onClick={activateTabs}>{item.title}</Tab>
                                            );
                                    })}
                                   
                                </TabList>
                            </div>
                            <div className="col-xl-10 mx-auto">
                                <TabPanel tabId="All">
                                    <ul class="tim-filter-items tim-album-items grid">
                                        <li className="tim-album-item grid-item">
                                            <div className="tim-isotope-grid__img effect-active">
                                                <Link onClick={() => openLightboxOnSourceIndex(1)}>
                                                    <img src={require('../../media/gallery/1.jpg')} alt="album thumb" />
                                                </Link>
                                            </div>
                                            <div className="gallery_details_wrap">
                                                <div className="gallery-info">
                                                    <h4 className="album-title">Hot Party</h4>
                                                    <h5 className="artist-name">Music on Night</h5>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="tim-album-item grid-item">
                                            <div className="tim-isotope-grid__img effect-active">
                                                <Link onClick={() => openLightboxOnSourceIndex(2)}>
                                                    <img src={require('../../media/gallery/2.jpg')} alt="album thumb" />
                                                </Link>
                                            </div>
                                            <div className="gallery_details_wrap">
                                                <div className="gallery-info">
                                                    <h4 className="album-title">Hot Party</h4>
                                                    <h5 className="artist-name">Music on Night</h5>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="tim-album-item grid-item">
                                            <div className="tim-isotope-grid__img effect-active">
                                                <Link onClick={() => openLightboxOnSourceIndex(3)}>
                                                    <img src={require('../../media/gallery/3.jpg')} alt="album thumb" />
                                                </Link>
                                            </div>
                                            <div className="gallery_details_wrap">
                                                <div className="gallery-info">
                                                    <h4 className="album-title">Hot Party</h4>
                                                    <h5 className="artist-name">Music on Night</h5>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="tim-album-item grid-item">
                                            <div className="tim-isotope-grid__img effect-active">
                                                <Link onClick={() => openLightboxOnSourceIndex(4)}>
                                                    <img src={require('../../media/gallery/4.jpg')} alt="album thumb" />
                                                </Link>
                                            </div>
                                            <div className="gallery_details_wrap">
                                                <div className="gallery-info">

                                                    <h4 className="album-title">Hot Party</h4>
                                                    <h5 className="artist-name">Music on Night</h5>

                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </TabPanel>
                                <TabPanel tabId="Drum">
                                    <ul class="tim-filter-items tim-album-items grid">
                                        <li className="tim-album-item grid-item">
                                            <div className="tim-isotope-grid__img effect-active">
                                                <Link onClick={() => openLightboxOnSourceIndex(1)}>
                                                    <img src={require('../../media/gallery/1.jpg')} alt="album thumb" />
                                                </Link>
                                            </div>
                                            <div className="gallery_details_wrap">
                                                <div className="gallery-info">

                                                    <h4 className="album-title">Hot Party</h4>
                                                    <h5 className="artist-name">Music on Night</h5>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="tim-album-item grid-item">
                                            <div className="tim-isotope-grid__img effect-active">
                                                <Link onClick={() => openLightboxOnSourceIndex(2)}>
                                                    <img src={require('../../media/gallery/2.jpg')} alt="album thumb" />
                                                </Link>
                                            </div>
                                            <div className="gallery_details_wrap">
                                                <div className="gallery-info">
                                                    <h4 className="album-title">Hot Party</h4>
                                                    <h5 className="artist-name">Music on Night</h5>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="tim-album-item grid-item">
                                            <div className="tim-isotope-grid__img effect-active">
                                                <img src={require('../../media/gallery/2.jpg')} alt="album thumb" />
                                            </div>
                                            <div className="gallery_details_wrap">
                                                <div className="gallery-info">

                                                    <h4 className="album-title">Hot Party</h4>
                                                    <h5 className="artist-name">Music on Night</h5>

                                                </div>
                                            </div>
                                        </li>
                                        <li className="tim-album-item grid-item">
                                            <div className="tim-isotope-grid__img effect-active">
                                                <img src={require('../../media/gallery/2.jpg')} alt="album thumb" />
                                            </div>

                                            <div className="gallery_details_wrap">
                                                <div className="gallery-info">

                                                    <h4 className="album-title">Hot Party</h4>
                                                    <h5 className="artist-name">Music on Night</h5>

                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </TabPanel>
                                <TabPanel tabId="Guiter">
                                    <p>Tab 3 content</p>
                                </TabPanel>
                            </div>
                        </Tabs>
                        <FsLightbox
                            toggler={lightboxController.toggler}
                            sources={[
                                require('../../media/gallery/1.jpg'),
                                require('../../media/gallery/2.jpg'),
                                require('../../media/gallery/3.jpg'),
                                require('../../media/gallery/4.jpg')
                            ]}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}


const mapDispatchToProps = dispatch => {
    // call action functions
    return {
        fetchContact: () => dispatch(actionCreators.fetchContact())
    };
};

const mapStateToProps = state => {
    return {
        contact: state.contact.items
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);



