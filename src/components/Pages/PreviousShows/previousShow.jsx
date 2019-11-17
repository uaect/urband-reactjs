
import React, { Component } from 'react'
import ModalVideo from '../../VideoModal/video-modal.component';
import './style.css'
import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions/";
class previousShowHome extends Component {
	componentDidMount() {
		this.props.previousshow();
	}

	render() {
		const image_url = "https://admin.urbandmusic.com/storage/";
		const previous = this.props.previous;
		var imageArray = [];
		var videoArray = [];
		if (previous.video_url) {
			var videoo = previous.video_url.split('v=').map(function (videoo, index) {
				videoArray.push(videoo)

			});
		}

		if (previous.images) {
			var imagess = previous.images.split(',').map(function (imagess, index) {
				imageArray.push(imagess)


			});
		}

		return (

			<section className="show-archive">
				{previous ? (
					<div className="container">
						<div className="d-flex justify-content-center row">
							<div className="col-xl-10">
								<div className="section-title style-five">
									<h2>PREVIOUS SHOWS</h2>
									<p>{previous.title ? previous.title : ""}</p>
								</div>
								<div className="show-archive-wrapper row no-gutters">
									{imageArray[0] ? (
										<div className="offset-xs-0 offset-sm-4 col-sm-4 col-6">
											<div className="single-show-archive">
												<img src={image_url + imageArray[0]} alt="" />
												<a href="index.html#"><i className="fa fa-link" aria-hidden="true"></i>
												</a>
											</div>
										</div>) : ""}
									{imageArray[1] ? (
										<div className="col-6 col-sm-4">
											<div className="single-show-archive">
												<img src={image_url + imageArray[1]} alt="" />
												<a href="index.html#"><i className="fa fa-link" aria-hidden="true"></i>
												</a>
											</div>
										</div>) : ""}

									{imageArray[0] ? (

										<div className="col-xs-12 col-sm-8">

											<div className="single-show-archive video-archive">
												<img src={image_url + imageArray[0]} alt="" />
												<div className="video-player">

													<div className="text">
														<p>{previous.title}</p>
														{/* <span>(Live in Tokyo, 2017)</span> */}
													</div>

												</div>
											</div>
										</div>) : ""}
									{/* <div className="col-12 col-sm-4">
								<div className="single-show-archive">
									<img src="media/album/21.jpg" alt=""/>
									<a href="index.html#"><i className="fa fa-link" aria-hidden="true"></i>
									</a>
								</div>
							</div> */}
								</div>

							</div>

						</div>

					</div>
				) : ""}
				{videoArray[1] ? (<ModalVideo title={videoArray[1]} />) : ""}


			</section>

		);
	}
}




const mapDispatchToProps = dispatch => {
	// call action functions
	return {
		previousshow: () => dispatch(actionCreators.previousshow())
	};
};

const mapStateToProps = state => {
	return {
		previous: state.previousshow.items
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(previousShowHome);






