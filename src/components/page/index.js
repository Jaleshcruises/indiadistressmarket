import React, { Fragment, Component } from "react";
import Header from "../layout/header";
import { Footer } from "../layout/footer";
import { NavLink } from "react-router-dom";
import { PlaceList } from "../content/element/place-list";
import Testimonial from "../content/element/carousel/testimonial";
import ClientLogo from "../content/element/carousel/client-logo";
import { Subscribe } from "../content/element/subscribe";
import { connect } from "react-redux";
import ListingCardGrid12 from "../content/element/card/card-listion-grid-12";

import { ContentBlockHome } from "../content/element/content-block";
import CardListingGrid4 from "../content/element/card/card-listing-grid-4";
import AdvSearch from "../content/element/advance-search";
import { SectionTitle } from "../content/element/section-title";
import CardCategoryGrid4 from "../content/element/card/card-category-grid-4";
import CardCategoryGrid2 from "../content/element/card/card-category-grid-2";
import LatestArticles from "../LatestUpdates/LatestArticles/";
import CommunityNetwork from "../LatestUpdates/CommunityNetwork/";
import AssetsOnSale from "../LatestUpdates/AssetsOnSale/";
import LatestConsultation from "../LatestUpdates/LatestConsultation/";

import AboutOurCommunity from "../content/element/AboutOurCommunity";
import { Counter } from "../content/element/counter";

const noAction = (e) => e.preventDefault();

class Index extends Component {
  render() {
    const logdIn = () => {
      return this.props.login;
    };
    const light = this.props.logo[0].light;
    return (
      <Fragment>
        {/* Header section start */}
        <section className="intro-wrapper bgimage overlay overlay--dark">
          <div className="bg_image_holder">
            <img src="./assets/img/intro.jpg" alt="" />
          </div>
          <div className="mainmenu-wrapper">
            <Header logo={light} class="menu--light" />
          </div>
          {/* <!-- ends: .mainmenu-wrapper --> */}
          <AdvSearch />
        </section>
        {/* Header section end */}

        {/*About Our Community and Our Expertise Section*/}
        <AboutOurCommunity />
        {/*About Our Community and Our Expertise Section end*/}

        {/* Category section start */}
        <section className="categories-cards section-padding-two">
          <div className="container">
            <SectionTitle
              title="Popular Assets / Business Categories"
              content="Buy a Running Business or its assets. Or buy something that can get you profits."
            />
            <div className="row">
              <CardCategoryGrid4 />
            </div>
          </div>
        </section>
        {/* Category section end */}

        {/*CommunityNetwork Section*/}
        <CommunityNetwork />
        {/*CommunityNetwork Section end*/}

        {/*AssetsOnSale Section*/}
        <AssetsOnSale />
        {/*AssetsOnSale Section end*/}

        {/*LatestConsultation Section*/}
        <LatestConsultation />
        {/*LatestConsultation Section end*/}

        {/*LatestUpdates Section*/}
        <LatestArticles />
        {/*LatestUpdates Section end*/}

        {/*Why join India Distress Market ?  Section*/}
        <ContentBlockHome />
        {/*Why join India Distress Market ? Section end*/}

        {/* Counter section end */}
        <Counter />
        {/* Counter section end */}

        {/* Place section start */}
        <section className="places section-padding sectionbg3">
          <div className="container">
            <SectionTitle
              title="Popular Distress Destinations"
              content="Explore best listings around the world by city (keep as it is)"
            />
            <div className="row">
              <div className="col-lg-12">
                <div className="cat-places-wrapper">
                  <CardCategoryGrid2 />
                </div>
              </div>
              <PlaceList />
            </div>
          </div>
        </section>
        {/* Place section end */}

        {/* Listing section start */}
        <section className="listing-cards section-padding ">
          <div className="container">
            <SectionTitle
              title="Best Listings Around the World"
              content="Explore the popular listings around the world"
            />
            <div className="row">
              <div className="listing-cards-wrapper col-lg-12">
                <div className="row">
                  <CardListingGrid4 logdIn={logdIn()} />
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
            </div>
          </div>
        </section>
        {/* Listing section end */}

        {/* Testimonial section start */}
        <section className="testimonial-wrapper">
          <div className="container">
            <SectionTitle
              title="Trusted By Over 4000+ Users"
              content="Here is what people say about India Distress Market"
            />
            <div className="row">
              <Testimonial />
            </div>
          </div>
        </section>
        {/* Testimonial section end */}

        {/* Client section start */}
        <section className="clients-logo-wrapper border-top p-top-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <ClientLogo />
              </div>
            </div>
          </div>
        </section>
        {/* client section end */}

        <Subscribe />
        <Footer />
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    list: state.list,
    login: state.login,
    logo: state.logo,
  };
};

export default connect(mapStateToProps)(Index);
