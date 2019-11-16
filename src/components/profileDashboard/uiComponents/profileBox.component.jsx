import React, { Component } from "react";
const ProfileBox = ({buttonText }) => {
    return(
        <div>
            <div className="AddNewBox101">
                <div>
                  <form className="mt-4">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control field-control"
                            placeholder="Ijas"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control field-control"
                            placeholder="Nechipparamban"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control field-control"
                            placeholder="ijas.prof@mail.com"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control field-control"
                            placeholder="+971-525995503"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control field-control"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control field-control"
                            placeholder="Repeate Password"
                          />
                        </div>
                      </div>
                      
                    </div>
                    <div>
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
        </div>
    );
}
export default ProfileBox;