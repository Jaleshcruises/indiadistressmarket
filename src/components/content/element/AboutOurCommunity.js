import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
const noAction = (e) => e.preventDefault();

const AboutOurCommunity = () => {
  return (
    <Fragment>
      <section className="about-contents section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 contents-wrapper">
              <div className="contents">
                <div className="row align-items-center">
                  <div className="col-lg-5 col-sm-6">
                    <img src="./assets/img/about-img1.png" alt="" />
                  </div>
                  <div className="col-lg-6 offset-lg-1 col-sm-6 mt-5 mt-md-0">
                    <h1>About Our Community and Our Expertise</h1>
                    <p>
                      Excepteur sint occaecat cupidatat non proident sunt in
                      culpa officia runmollit anim laborum occaecat cupidatat
                      proident. Cupidatat non proident sunt in culpa officia
                      deserunt.
                    </p>
                  </div>
                </div>
              </div>
              {/*<!-- ends: .contents -->*/}
            </div>
            {/*<!-- ends: .content-block -->*/}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AboutOurCommunity;
