import React, { Component } from "react";

/* Styling & Images */
import "./landing.css";
import addTrashSite from "./images/addTrashSite.png";
import cleanSite from "./images/cleanSite.png";
import completeImg from "./images/example3.png";
import earthPic from "./images/earth2.jpg";
import logo from "../nav/logo1.png";
import trashSite from "./images/trashSite.png";

/* Context */
import siteContext from "../../siteContext";

class Landing extends Component {
  static contextType = siteContext;

  render() {
    return (
      <div className="landing">
        <header>
          <h1>
            Welcome to Trash
            <img alt="logo" className="logo" src={logo} />
            Tracker!
          </h1>
          <img alt="Earth" id="earth" src={earthPic} />
          <p>
            Targeting, tracking, and eliminating pollution one site at a time.
          </p>
        </header>

        <div className="container">
          <section className="landingSection">
            <div className="landingContent">
              <h2>Create An Account And Make An Impact </h2>
              <p>
                Building on the viral #Trashtag Challenge, our app allows users
                to post "trash sites", coordinate with other users, and clean
                trash sites together!
              </p>
            </div>
            <img src={completeImg} alt="Completed Trash site" id="ex"></img>
          </section>
          <section className="landingSection dark">
            <div className="landingContent">
              <h2>Post A Trash Site:</h2>
              <p>
                Use our app to report a new trash site that needs
                help.Coordinate with others, clean up the site, and then mark it
                as clean and post your success picture!
              </p>
            </div>
            <div className="landingImages">
              <img
                alt="Add a site"
                className="exImg"
                id="addPic"
                src={addTrashSite}
              />
              <img alt="Add a site" className="exImg" src={trashSite} />
              <img alt="Add a site" className="exImg" src={cleanSite} />
            </div>
          </section>
          <section className="landingSection flex-column">
            <div className="landingContent">
              <h2>Cleaning Our World Together:</h2>
              <p>
                Whether it is a small ditch on the side of a highway, or an oil
                spill requiring hundreds of hands, together we can undo the
                damage done to our planet. By raising more enviornmental
                awareness we can prevent further pollution of our most precious
                resrouce: Our planet.
              </p>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Landing;
