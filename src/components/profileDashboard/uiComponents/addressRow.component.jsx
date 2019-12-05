import React, { Component } from "react";
import AddressColumn from '../uiComponents/addressColumn.component';
import AddressHeader from '../uiComponents/addressHeader.component';
import BoxTypeOne from '../uiComponents/BoxTypeOne.component';

import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions/";

class AddressRow extends Component {

    componentDidMount() {
        this.props.getaddress();
    }

    render() {
        const address = this.props.address;
        console.warn("sss", address);

        return (
            <div>
                {/* {address ? (
                    address.map(item => { */}
                        <div className="AddressBoxTpWrp mb-2">
                            <BoxTypeOne boxHeader="primary Address">
                                <AddressHeader addressType="Work" />
                                <div className="RowType1">
                                    <AddressColumn textType1="Name" textType2="ijas Np" />
                                    <AddressColumn textType1="Address" textType2="Nechipparamban House, Pallippadi, Pookkottur" />
                                    <AddressColumn textType1="Phone Number" textType2="+971-525995503" />
                                    <AddressColumn>
                                        <div className="BtnBoxType2">
                                            <div>
                                                <div className="btnType1">Edit</div>
                                                <div className="btnType1">Delete</div>
                                            </div>
                                        </div>
                                    </AddressColumn>
                                </div>
                            </BoxTypeOne>
                        </div>
                    {/* })) : ""} */}

            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getaddress: () => dispatch(actionCreators.getaddress())
    };
};

const mapStateToProps = state => {
    return {
        address: state.getaddress.address
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressRow);