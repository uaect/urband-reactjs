import React, { Component } from 'react';
import ReactPlayer from 'react-player'
class BottomPlayer extends Component{
    componentDidMount () {
    
      }
    render(){
        return(
            <div>
                <div className="BottomPlayerTp1">
                    <div className="row">
                        <div className="col">
                            <ReactPlayer ref='reactPlayer' url='https://urband-t891.nodeboost.io/streams/hls/live/urband.m3u8' playing />
                        </div>
                        <div className="col-auto">Close</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default BottomPlayer;