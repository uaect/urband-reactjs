import React, { Component } from 'react';
import moment from 'moment';
class DetailHero extends Component {


	render() {
		const image_url = "https://admin.urbandmusic.com/storage/"
		const album = this.props.value;
		console.log("album", album);
		
		if (album.tracks) {
			var tracks = album.tracks.length;
		} else {
			tracks = 0;
		}
		return (

			<div>

				<section className="section-padding album-info-wrapper">
					<div className="container">
						<div className="row single-album-info">

							<div className="col-md-6 padding-remove">
								<div className="single-album-image">
									<img src={image_url + "/" + album.image} alt="album Info" />
								</div>
							</div>


							<div className="col-md-6 padding-remove album-detail">
								<div className="single-album-details">
									<div className="details-top">
										<h6>{album.title?album.title:""}</h6>
										<p>{album.description?album.description:""}</p>
									</div>

									<ul>
										<li>Albume <span>Single</span></li>
										<li>Artist<span>Bernard Adamus</span></li>
										<li>Release Day <span>{moment(album.created_at).format("MMM Do YY")}</span></li>
										<li>Genre <span>R&B,Jazz</span></li>
										<li>Produce By <span>ThemeIM Entertainment</span></li>
										<li>Number Of Track <span>{tracks} Tracks</span></li>
									</ul>

									<div className="single-album-description">
										<h6>Album Description</h6>
										<p>{album.description}</p>
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

export default DetailHero;




