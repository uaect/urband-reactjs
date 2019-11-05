import React, {Component} from 'react';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
class VolumeSlider extends Component {
    constructor(props, context) {
      super(props, context)
      this.state = {
        value: 0
      }
    }
   
    handleOnChange = (value) => {
      this.setState({
        value: value
      })
    }
   
    render() {
    const { value } = this.state
      return (
          <div>
              <div className="store-ranger">
                <div className="value"><span>Price:&nbsp;</span>{value}</div>
                <Slider
                value={value}
                min={30}
                max={500}
                orientation="horizontal"
                onChange={this.handleOnChange}
                />
            </div>
            <div className="filter-left-type">
              <h3 className="title">By Category</h3>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                <label className="form-check-label" htmlFor="defaultCheck1">
                  Popular
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                <label className="form-check-label" htmlFor="defaultCheck1">
                  Charts
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                <label className="form-check-label" htmlFor="defaultCheck1">
                  New Releases
                </label>
              </div>
           </div>

        
          

        </div>
      )
    }
  }
  export default VolumeSlider;