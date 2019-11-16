
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'
import cover from '../../../media/album/cover.jpg';
import record from '../../../media/background/record.png';
import recordshade from '../../../media/background/record-shade.png';
import playerkey from '../../../media/background/player-key.png';
import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions/";
library.add(faPlay)

class playAnimation extends Component {
	componentDidMount() {
		this.props.fetchAlbums();
	  }

	render() {
		const image_url = "https://admin.urbandmusic.com/storage/";
		const events = this.props.albums.result;
		console.log("tttoooooooot", events);
		
		return (
			
			<section className="section-padding latest-relese">
				{events && events[0]? (
				<div className="container">
					<div className="row">
						<div className="section-title style-four">
							<h2>LATEST RELEASE</h2>
						</div>
						<div className="d-flex justify-content-center">
							<div className="col-xl-10" id="moving-player">
								<div className="row">
									<div className="col-sm-8 col-md-9 col-lg-8">
										<div className="latest-album-left">
											<div className="cover-img">
												<img src={image_url + events[0].image} alt="" />
											</div>
											<div className="albun-details">
												<h6>{events[0].title}</h6>
												<p>{events[0].description}</p>
											</div>
										</div>

									</div>
									<div className="col-sm-4 col-md-3 col-lg-4">
										<div className="latest-album-right">
											<h6>LISTEN DEMO NOW</h6>
											<div className="latest-album-btn">
												<Link to="/" className="sm2_button"><FontAwesomeIcon icon={faPlay} /></Link>
											</div>

										</div>
									</div>
									<div className="col-xl-12">
										<div className="record-player">
											<div className="player-main">
												<img src={record} alt="" />
											</div>
											<div className="player-main-shade">
												<img src={recordshade} alt="" />
											</div>
											<div className="record-key">
												<img src={playerkey} alt="" />
											</div>
										</div>

									</div>





								</div>
							</div>
						</div>

					</div>

				</div>):""}

			</section>


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
  )(playAnimation);
  


