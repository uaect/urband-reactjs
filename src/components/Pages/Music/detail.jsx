import React, { Component } from "react";
class DetailHero extends Component {
  render() {
    const image_url = "http://happiness-spinner.com/storage/";
    const album = this.props.value;

    return (
      <div>
        <section className="album-info-wrapper">
          <div className="container">
            <div className="row single-album-info">
              <div className="col-md-6 p-2">
                <div className="single-album-image d-flex align-items-center justify-content-center fullWidthHeight">
                  <img src={image_url + "/" + album.image} alt="album Info" />
                </div>
              </div>

              <div className="col-md-6 padding-remove album-detail">
                <div className="single-album-details">
                  <div className="details-top">
                    <h6>{album.title ? album.title : ""}</h6>
                    <p>{album.description ? album.description : ""}</p>
                  </div>

                  {/*<ul>
                    <li>
                      Albume <span>Single</span>
                    </li>
                    <li>
                      Artist<span>Bernard Adamus</span>
                    </li>
                    <li>
                      Release Day{" "}
                      <span>
                        {moment(album.created_at).format("MMM Do YY")}
                      </span>
                    </li>
                    <li>
                      Genre <span>R&B,Jazz</span>
                    </li>
                    <li>
                      Produce By <span>ThemeIM Entertainment</span>
                    </li>
                    <li>
                      Number Of Track <span>{tracks} Tracks</span>
                    </li>
                  </ul>*/}

                  {/*<div className="single-album-description">
                    <h6>Album Description</h6>
                    <p>{album.description}</p>
                  </div>*/}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default DetailHero;
