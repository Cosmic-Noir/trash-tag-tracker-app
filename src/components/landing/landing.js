import React, { Component } from "react";
import { Link } from "react-router-dom";

/* Styling & Images */
import "./landing.css";
import addTrashSite from "./images/addSite1.png";
import cleanSite from "./images/cleanSite.png";
import darkLogo from "../nav/logo2.png";
import completeImg from "./images/example3.png";
import earthPic from "./images/earth2.jpg";
import logo from "../nav/logo1.png";
import trashSite from "./images/trashSite2.png";

/* Context */
import siteContext from "../../siteContext";

class Landing extends Component {
  static contextType = siteContext;

  /* Custom Methods */

  demoLogin = () => {
    console.log("Hey things");
  };

  render() {
    return (
      <div className="flex-column" id="home">
        <header className="flex-column" role="banner">
          <h1 data-aos="fade-in" data-aos-duration="2000">
            Welcome to Trash
            <img alt="logo" className="logo" src={logo} />
            Tracker!
          </h1>
          <img
            alt="Earth"
            data-aos="fade-in"
            data-aos-duration="2000"
            className="earth"
            src={earthPic}
          />
          <p data-aos="fade-in" data-aos-duration="2000">
            Targeting, tracking, and eliminating pollution one site at a time.
          </p>
        </header>

        <div className="flex-column width100">
          <section
            className="landingSection"
            data-aos="fade-in"
            data-aos-duration="2000"
          >
            <div className="landingContent">
              <h2>Create An Account And Make An Impact </h2>
              <p>
                Building on the viral #Trashtag Challenge, our app allows users
                to post "trash sites", coordinate with other users, and clean
                trash sites together!
              </p>
            </div>
            <img alt="Completed Trash site" id="ex" src={completeImg}></img>
          </section>
          <section className="landingSection dark">
            <div
              className="landingContent"
              data-aos="fade-in"
              data-aos-duration="2000"
            >
              <h2>Post A Trash Site:</h2>
              <p>
                Use our app to report a new trash site that needs help.
                Coordinate with others, clean up the site, and then mark it as
                clean and post your success picture!
              </p>
            </div>
            <div className="landingImages">
              <img
                alt="Add a trash site"
                className="exImg"
                data-aos="fade-in"
                data-aos-duration="2000"
                id="addPic"
                src={addTrashSite}
              />
              <img
                alt="View a posted trash site"
                className="exImg"
                data-aos="fade-in"
                data-aos-duration="2000"
                src={trashSite}
              />
              <img
                alt="Mark a site as cleaned"
                className="exImg"
                data-aos="fade-in"
                data-aos-duration="2000"
                src={cleanSite}
              />
            </div>
          </section>
          <section className="flex-column">
            <div
              className="landingContent"
              data-aos="fade-in"
              data-aos-duration="2000"
            >
              <h2 id="cleaning">Cleaning Our World Together:</h2>
              <p>
                Whether it is a small ditch on the side of a highway, or an oil
                spill requiring hundreds of hands, together we can undo the
                damage done to our planet. By raising more enviornmental
                awareness we can prevent further pollution of our most precious
                resource: Our planet.
              </p>
            </div>
            <Link
              className="whiteButton"
              to="/dashboard"
              onClick={this.demoLogin()}
            >
              Demo
            </Link>
            <a href="#home" id="landingLogo">
              <img alt="Logo" className="logo" src={darkLogo} />
            </a>
          </section>
        </div>
      </div>
    );
  }
}

export default Landing;
