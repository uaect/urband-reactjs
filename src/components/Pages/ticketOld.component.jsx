import React , {Component} from 'react';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faAt,faMapMarkerAlt,faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Link } from 'react-router-dom'

// library.add(faAt,faMapMarkerAlt,faPhoneAlt)


class Tickets extends Component{


    render(){
        const TicketSVG = ({
            style = {},
            fill = '',
            width = '100%',
            className = '',
            height = '100%',
            viewBox = '0 0 361 135',
          }) => 
            <svg
              width={width}
              style={style}
              height={height}
              viewBox={viewBox}
              className={className}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                
               <path id="XMLID_21_" className="st0" d="M305.1,0h-4.4c0.2,1,0.2,1.5,0.2,2.4c0,5.3-3,9.5-6.7,9.5c-3.7,0-6.7-4.2-6.7-9.5
						c0-0.9,0.1-1.4,0.2-2.4h-3.9c0.1,0,0.1,0.9,0.1,1.4c0,5.3-3,9.5-6.7,9.5c-3.7,0-6.7-4.2-6.7-9.5c0-0.5,0-1.4,0.1-1.4h-4.8
						c0.1,0,0.1,0.9,0.1,1.4c0,5.3-3,9.5-6.7,9.5c-3.7,0-6.7-4.2-6.7-9.5c0-0.5,0-1.4,0.1-1.4h-3.8c0.1,0,0.1,0.9,0.1,1.4
						c0,5.3-3,9.5-6.7,9.5c-3.7,0-6.7-4.2-6.7-9.5c0-0.5,0-1.4,0.1-1.4h-4.8c0.1,0,0.1,0.9,0.1,1.4c0,5.3-3,9.5-6.7,9.5
						c-3.7,0-6.7-4.2-6.7-9.5c0-0.5,0-1.4,0.1-1.4h-3.8c0.1,0,0.1,0.9,0.1,1.4c0,5.3-3,9.5-6.7,9.5c-3.7,0-6.7-4.2-6.7-9.5
						c0-0.5,0-1.4,0.1-1.4h-4.8c0.1,0,0.1,0.9,0.1,1.4c0,5.3-3,9.5-6.7,9.5c-3.7,0-6.7-4.2-6.7-9.5c0-0.5,0-1.4,0.1-1.4h-3.8
						c0.1,0,0.1,0.9,0.1,1.4c0,5.3-3,9.5-6.7,9.5c-3.7,0-6.7-4.2-6.7-9.5c0-0.5,0-1.4,0.1-1.4h-3.8c0.1,0,0.1,0.9,0.1,1.4
						c0,5.3-3,9.5-6.7,9.5c-3.7,0-6.7-4.2-6.7-9.5c0-0.5,0-1.4,0.1-1.4h-4.8c0.1,0,0.1,0.9,0.1,1.4c0,5.3-3,9.5-6.7,9.5
						c-3.7,0-6.7-4.2-6.7-9.5c0-0.5,0-1.4,0.1-1.4h-3.8c0.1,0,0.1,0.9,0.1,1.4c0,5.3-3,9.5-6.7,9.5c-3.7,0-6.7-4.2-6.7-9.5
						c0-0.5,0-1.4,0.1-1.4h-4.8c0.1,0,0.1,0.9,0.1,1.4c0,5.3-3,9.5-6.7,9.5c-3.7,0-6.7-4.2-6.7-9.5c0-0.5,0-1.4,0.1-1.4h-3.8
						c0.1,0,0.1,0.9,0.1,1.4c0,5.3-3,9.5-6.7,9.5c-3.7,0-6.7-4.2-6.7-9.5c0-0.5,0-1.4,0.1-1.4h-4.8c0.1,0,0.1,0.9,0.1,1.4
						c0,5.3-3,9.5-6.7,9.5c-3.7,0-6.7-4.2-6.7-9.5c0-0.5,0-1.4,0.1-1.4H56v2c0,0-4,54.7-56,63.4V135h361V65.6C314,59.8,305.7,5,305.1,0z"
						/>
            </svg>;

        return (
           
         <div>
             	<div className="pricing-table">
            <TicketSVG/>
            </div>
		</div>
           
           
        );
    }
}

export default Tickets;




