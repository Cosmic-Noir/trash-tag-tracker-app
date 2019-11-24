import React, { Component } from "react";

/* Styling & Images */
import "./landing.css";
import addSitePic from "./addSite.png";
import completeImg from "./example3.png";
import earthPic from "./earth2.jpg";
import logo from "../nav/logo1.png";

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
            Building on the viral #Trashtag Challenge, our app allows users to
            post "trash sites", coordinate with other users, and clean trash
            sites together!
          </p>
        </header>

        <div className="container">
          <section className="landingSection">
            <div className="landingContent">
              <h2>Create An Account And Make An Impact </h2>
              <p>
                Start with small suggested changes on your dashboard to earn
                points and reduce your everday waste and energy consumption.
                Then tackle trash sites and mark them as cleaned and post your
                success picture!
              </p>
            </div>
            <img src={completeImg} alt="Completed Trash site" id="ex"></img>
          </section>
          <section className="landingSection dark">
            <div className="landingContent">
              <h2>Post A Trash Site:</h2>
              <p>
                Use our app to report a new trash site that needs help. We don't
                always have time to clean a site when we first encounter it.
                This also allows users to comment on posted sites and make
                coordinated efforts to clean it together.
              </p>
            </div>
            <img alt="Add a site" id="addPic" src={addSitePic} />
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
