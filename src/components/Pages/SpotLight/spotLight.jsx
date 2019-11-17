import React, { Component } from 'react'
import ModalVideo from '../../VideoModal/video-modal.component';
import './style.css'
import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions/";
class spotLight extends Component {
	componentDidMount() {
		this.props.spotlight();
	}


	render() {
		const spotlight = this.props.spot_light;
		const image_url = "https://admin.urbandmusic.com/storage/";
		var imageArray = [];
		var videoArray = [];
		if (spotlight.video_url) {
			var videoo = spotlight.video_url.split('v=').map(function (videoo, index) {
			  videoArray.push(videoo)
	
			});
		  }
		if (spotlight.images) {
			var imagess = spotlight.images.split(',').map(function (imagess, index) {
				imageArray.push(imagess)


			});
		}

		console.log("spotlight", spotlight);

		return (
			<section className="section-padding-two wide_line_bg">
				<div className="container">
					<div className="d-flex justify-content-center row">
						<div className="col-xl-10">
							<div className="section-title style-five">
								<h2>SPOTLIGHT</h2>
								<p>There are many variations of passages of Lorem Ipsum available but the majority.</p>
							</div>
							<div className="row">

								{spotlight ? (
									<div className="grid-60">
										<div className="spotlight-inner">
											<img src={image_url + imageArray[0]} alt="" />
											<div className="video-player-three">


												<div className="text">
													<p>Show Stoppers Time</p>
													<span>(Live in Tokyo, 2017)</span>
												</div>
											</div>
										</div>
									</div>
								) : ""}


								<div className="grid-40">
									<div className="subscribe-two">
										<div className="section-title style-five">
											<h2>SUBSCRIBE</h2>
											<p>There are many variations of passages of Lorem Ipsum available but the majority.</p>
										</div>
										<form action="#">
											<input placeholder="Enter Your Email" type="text" />
											<button type="submit" className="submit">send me</button>
										</form>
									</div>

								</div>

							</div>

						</div>

					</div>
					{videoArray[1]?(<ModalVideo  title={videoArray[1]}/>):""}

				</div>

			</section>

		)
	}
}



const mapDispatchToProps = dispatch => {
	// call action functions
	return {
		spotlight: () => dispatch(actionCreators.spotlight())
	};
};

const mapStateToProps = state => {
	return {
		spot_light: state.spotlight.items
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(spotLight);

