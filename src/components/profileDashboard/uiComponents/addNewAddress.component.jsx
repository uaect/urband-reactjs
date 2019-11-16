import React, { Component } from "react";
import { checkPropTypes } from "prop-types";
const AddNewAddress = (props) => {
    return(
        <div className="AddNewBox101">
           <div>
           <form className="mt-4">
                        <div className="row">
                            <div className="col-md-6">
                            <div className="form-group">
                                <input
                                type="text"
                                className="form-control field-control"
                                placeholder="First Name"
                                />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="form-group">
                                <input
                                type="text"
                                className="form-control field-control"
                                placeholder="Last Name"
                                />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="form-group">
                                <select
                                className="form-control field-control"
                                name="city"
                                title="Select Current Location"
                                >
                                <option value="">Select Location</option>
                                <option value="Dubai">Dubai</option>
                                <option value="Sharjah">Sharjah</option>
                                <option value="Abu Dhabi">Abu Dhabi</option>
                                <option value="Ras Al Khaimah">
                                    Ras Al Khaimah
                                </option>
                                <option value="Fujairah">Fujairah</option>
                                <option value="Ajman">Ajman</option>
                                <option value="Umm Al Qawain">
                                    Umm Al Qawain
                                </option>
                                <option value="Al Ain">Al Ain</option>
                                </select>
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="form-group">
                                <select
                                className="form-control field-control"
                                name="city"
                                title="Select Current Location"
                                >
                                <option value="">Select City</option>
                                <option value="54903">City centre</option>
                                <option value="181636102">Al Barsha Dubai</option>
                                </select>
                            </div>
                            </div>
                            <div className="col-md-12">
                            <div className="form-group">
                                <input
                                type="text"
                                className="form-control field-control"
                                name=""
                                placeholder="Apartment, villa no, etc."
                                />
                            </div>
                            </div>
                            <div className="col-md-12">
                            <div className="form-group">
                                <textarea
                                className="form-control field-control"
                                type="text"
                                name="description[]"
                                placeholder="Address"
                                rows="3"
                                ></textarea>
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="form-group">
                                <input
                                type="text"
                                className="form-control field-control"
                                name=""
                                placeholder="Landline Number"
                                />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="form-group">
                                <input
                                type="text"
                                className="form-control field-control"
                                name=""
                                placeholder="Mobile Number"
                                />
                            </div>
                            </div>
                        </div>
                      <div>
                      <button
                        type="btn"
                        className="tim-btn mt-4 ticket-btn-lg place-order CancelBtnTp1"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="tim-btn mt-4 ticket-btn-lg place-order"
                      >
                        Save
                      </button>
                      </div>
                    </form>
            </div>
        </div>
    );
}
export default AddNewAddress;