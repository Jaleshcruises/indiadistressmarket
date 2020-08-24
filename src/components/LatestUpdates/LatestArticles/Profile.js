import React from "react";

const Profile = () => {
  return (
    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 vendor-box">
      <div className="con_wrap">
        <div className="main_content">
          <div className="top_sec">
            <div className="price pull-left">Advocate, Vellore </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 no-padding">
            <div className="leftcol">
              <img src="./assets/img/dummy.jpg" className="img-responsive" />
            </div>
            <div className="rightcol">
              <div className="heighlights" style={{ top: "10px" }}>
                {" "}
                Family Law{" "}
              </div>
              <div className="heighlights" style={{ top: "42px" }}>
                {" "}
                Criminal Law{" "}
              </div>
              <div className="heighlights " style={{ top: "74px" }}>
                {" "}
                Property Law{" "}
              </div>
              {/* <div class="heighlights hidden-sm" style="top:100px;"> Business Law </div> */}
            </div>
          </div>
        </div>
        <div className="vendor-detail">
          <div className="business_heading ">Advocate T Kala Swami</div>
          <div className="sub_content">
            <h2>
              <a href="#" target="_blank" className="title">
                Practice Areas
              </a>
            </h2>
            <p className="business_info">
              Lawyer from Bangalore, presently practice law based at Vellore, in
              District courts and family court at Vellore and Vellore district,
            </p>
          </div>
          <div className="vendor_btlinks">
            <div>
              <div className="pull-left">
                <a href="javascript:void(0);" className="fgh">
                  <i className="fa fa-heart-o" /> Shortlist
                </a>
              </div>
              <div className="pull-right">
                <a href="javascript:void(0);">
                  <i className="fa fa-eye" /> Quick View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
