import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import BannerHero from "../Banners/bannerHero";
import "react-web-tabs/dist/react-web-tabs.css";
import { useState } from "react";
import FsLightbox from "fslightbox-react";

import { connect } from "react-redux";
import * as actionCreators from "../../../src/store/actions/";

function Gallery() {
  const [category, setCategory] = React.useState({
    categories: []
  });

  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    sourceIndex: 0,
    sourceImg: "https://admin.urbandmusic.com/storage/"
  });

  function openLightboxOnSourceIndex(sourceIndex, sourceImg) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      sourceIndex: sourceIndex,
      sourceImg: sourceImg
    });
  }

  React.useEffect(() => {
    const body = {
      page: "1"
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

  const image_url = "https://admin.urbandmusic.com/storage/";
  const categories = category.categories.result;
  console.log("categoriescategoriescategories", categories);

  return (
    <div>
      <BannerHero title={"gallery"} />
      <section className="section-padding">
        <div className="tim-container">
          <div className="section-title style-four text-center">
            <h2>Music Gallery</h2>
          </div>
          <div className="tim-isotope tim-isotope-2">
            <Tabs
              defaultTab="Drum"
              onChange={tabId => {
                console.log(tabId);
              }}
            >
              <div className="tim-isotope-filter album-filter-button album-filter-button-two">
                <TabList>
                  {categories &&
                    categories.map(item => {
                      return (
                        <Tab tabFor={item.title} key={item.id}>
                          {item.title}
                        </Tab>
                      );
                    })}
                </TabList>
              </div>
              <div className="col-xl-10 mx-auto">
                {categories &&
                  categories.map(item => {
                    return (
                      <TabPanel tabId={item.title}>
                        <ul class="tim-filter-items tim-album-items grid">
                          {item.gallery[0].files &&
                            item.gallery[0].files.map(gal => {
                              return (
                                <li className="tim-album-item grid-item">
                                  <div className="tim-isotope-grid__img effect-active">
                                    <Link
                                      onClick={() =>
                                        openLightboxOnSourceIndex(
                                          1,
                                          image_url + "/" + gal.image
                                        )
                                      }
                                    >
                                      <img
                                        src={image_url + "/" + gal.image}
                                        alt={gal.title}
                                      />
                                    </Link>
                                  </div>
                                  <div className="gallery_details_wrap">
                                    <div className="gallery-info">
                                      <h4 className="album-title">
                                        {item.gallery[0].title}
                                      </h4>
                                      <h5 className="artist-name">
                                        {item.gallery[0].sub_title}
                                      </h5>
                                    </div>
                                  </div>
                                </li>
                              );
                            })}
                        </ul>
                      </TabPanel>
                    );
                  })}
              </div>
            </Tabs>
            {console.log("xxxxx :", lightboxController.sourceImg)}
            <FsLightbox
              toggler={lightboxController.toggler}
              sourceImg={lightboxController.sourceImg}
              sources={[lightboxController.sourceImg]}
              types={["image"]}
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
