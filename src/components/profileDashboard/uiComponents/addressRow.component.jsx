import React, { Component } from "react";
import AddressColumn from '../uiComponents/addressColumn.component';
import AddressHeader  from '../uiComponents/addressHeader.component';
const AddressRow = () => {
    return(
        <div>
            <AddressHeader addressType="Work"/>
            <div className="RowType1">
                <AddressColumn textType1="Name" textType2="ijas Np"/>
                <AddressColumn textType1="Address" textType2="Nechipparamban House, Pallippadi, Pookkottur"/>
                <AddressColumn textType1="Phone Number" textType2="+971-525995503"/>
                <AddressColumn>
                    <div className="BtnBoxType2">
                        <div>
                            <div className="btnType1">Edit</div>
                            <div className="btnType1">Delete</div>
                        </div>
                    </div>
                </AddressColumn>
            </div>
        </div>
    );
}
export default AddressRow;