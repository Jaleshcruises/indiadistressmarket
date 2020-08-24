import React from "react";
import Profile from "./Profile";
import { NavLink } from "react-router-dom";

const LatestUpdates = () => {
  const noAction = (e) => e.preventDefault();

  return (
    <div className="xs_pad section fullsection fp-section section4">
      <div className="feature_section">
        <h2 className="feature_heading">Latest Articles / News / Resources</h2>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="row">
                <Profile />
                <Profile />
                <Profile />
                <Profile />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 text-center m-top-20">
          <NavLink
            onClick={noAction}
            to="/at_demo"
            className="btn btn-gradient btn-gradient-two"
          >
            Explore All 200+
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LatestUpdates;
