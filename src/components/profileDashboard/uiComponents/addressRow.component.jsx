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

    deleteAddress(item) {
        this.props
            .deleteaddress(item.id)
            .then(() => {
                this.props.getaddress();
            })
            .catch(error => {
                if (error.error == "Unauthorised") {
                    this.setState({
                        errpassword: "Invalid credential check username or passsord"
                    });
                }
            });
    }

    render() {
        const address = this.props.address;
        //console.warn("sss :", address);
        //console.warn("length :", address.length);

        return (
            <div>
                {address ? (
                    address.map(item => {
                        return (<div className="AddressBoxTpWrp mb-2">
                            <BoxTypeOne boxHeader="primary Address">
                                <AddressHeader addressType="Work" />
                                <div className="RowType1">
                                    <AddressColumn textType1="Name" textType2={item.first_name + ' ' + item.last_name} />
                                    <AddressColumn textType1="Address" textType2={item.last_name} />
                                    <AddressColumn textType1="Phone Number" textType2={item.mobile} />
                                    <AddressColumn>
                                        <div className="BtnBoxType2">
                                            <div>
                                                {/* <div className="btnType1">Edit</div> */}
                                                <div className="btnType1" onClick={() => this.deleteAddress(item)} >Delete</div>
                                            </div>
                                        </div>
                                    </AddressColumn>
                                </div>
                            </BoxTypeOne>
                        </div>)
                    })) : ""}

            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getaddress: () => dispatch(actionCreators.getaddress()),
        deleteaddress: id => dispatch(actionCreators.deleteaddress(id))
    };
};

const mapStateToProps = state => {
    return {
        address: state.getaddress.address
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressRow);