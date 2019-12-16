import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/css/modal-video.min.css'
import { connect } from "react-redux";
import * as actionCreators from "../../../src/store/actions/";
library.add(faPlay)


class ModalVideoComponent extends Component {
 
  componentDidMount() {
    var title = this.props.title;
    this.setState({ title: title })
  }

  constructor() {
    super()
    this.state = {
      isOpen: false,
      title:""
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal() {
    this.setState({ isOpen: true })
  }

  render() {
    //console.log("title", this.state.title);
    
    return (
      <div className="btn-wrap">
        <div onClick={this.openModal}>
          <div className="video-btn-three popup-video-btn">
            <FontAwesomeIcon icon={faPlay} />
          </div>
        </div>
       
          <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.state.title} onClose={() => this.setState({ isOpen: false })} />
      </div>



    )
  }
}

const mapDispatchToProps = dispatch => {
  // call action functions
  return {
    spotlight: () => dispatch(actionCreators.spotlight()),
    previousshow: () => dispatch(actionCreators.previousshow())
  };
};

const mapStateToProps = state => {
  return {
    spot_light: state.spotlight.items,
    previous: state.previousshow.items
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalVideoComponent);

