import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
const noAction = (e) => e.preventDefault();
const AdvSearch = () => {
  return (
    <Fragment>
      <div className="directory_content_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="search_title_area">
                <h2 className="title">
                  India’s Biggest Resolution & Distress Marketplace
                </h2>
                <p className="sub_title">
                  Search anything in any or all categories & also find all
                  resources
                </p>
              </div>
              {/* ends: .search_title_area */}
              <form action="/" className="search_form">
                <div className="atbd_seach_fields_wrapper">
                  <div className="single_search_field search_query">
                    <input
                      className="form-control search_fields"
                      type="text"
                      placeholder="What are you looking for?"
                    />
                  </div>
                  <div className="single_search_field search_category">
                    <select className="search_fields" id="at_biz_dir-category">
                      <option value>Select a category</option>
                      <option value="automobile">Automobile</option>
                      <option value="education">Education</option>
                      <option value="event">Event</option>
                    </select>
                  </div>

                  <div className="atbd_submit_btn">
                    <button
                      type="submit"
                      onClick={noAction}
                      className="btn btn-block btn-gradient btn-gradient-one btn-md btn_search"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
              {/* ends: .search_form */}
              <div className="directory_home_category_area">
                <ul className="categories">
                  <li>
                    <NavLink onClick={noAction} to="/at_demo">
                      <span className="color-primary">
                        <i className="la la-map" />
                      </span>
                      Marketplace
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={noAction} to="/at_demo">
                      <span className="color-success">
                        <i className="la la-users" />
                      </span>
                      Community
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={noAction} to="/at_demo">
                      <span className="color-warning">
                        <i className="la la-comments" />
                      </span>
                      Discussion Forum
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={noAction} to="/at_demo">
                      <span className="color-danger">
                        <i className="la la-cog" />
                      </span>
                      Resources
                    </NavLink>
                  </li>
                </ul>
              </div>
              {/* ends: .directory_home_category_area */}
            </div>
            {/* ends: .col-lg-10 */}
          </div>
        </div>
      </div>
      {/* ends: .directory_search_area */}
    </Fragment>
  );
};

export default AdvSearch;
