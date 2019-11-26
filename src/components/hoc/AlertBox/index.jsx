import React, { Component } from "react";
class AlertBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ActiveOrNot: true
    };
  }
  componentDidMount() {
    this.setState({
      ActiveOrNot: this.props.ActiveOrNot
    });
    setInterval(() => {
      this.setState({
        ActiveOrNot: false
      });
    }, 3000);
  }

  render() {
    return (
      <div>
        {this.state.ActiveOrNot ? (
          <div className="AlertBoxTp1 text-center">
            <div className="AlertBoxContent ani-slideInDown">
              {this.props.alertMessage}
              <span
                className="BtnActionTp1"
                onClick={() => {
                  this.setState({
                    ActiveOrNot: false
                  });
                }}
              >
                close
              </span>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
// const AlertBox = props => {
//   var ActiveOrNot = props.ActiveOrNot;
//   const onClickCloseHandler = () => {
//     ActiveOrNot = !ActiveOrNot;
//     console.log(ActiveOrNot);
//   };
//   return (
//     <div>
//       {ActiveOrNot ? (
//         <div className="AlertBoxTp1 text-center">
//           <div className="AlertBoxContent">
//             {props.alertMessage}
//             <span className="BtnActionTp1" onClick={onClickCloseHandler}>
//               close
//             </span>
//           </div>
//         </div>
//       ) : (
//         ""
//       )}
//     </div>
//   );
// };
export default AlertBox;
