import React, { Component } from "react";
import siteContext from "../siteContext";

// Styling and Images:
import completeImg from "./example3.png";
import logo from "../nav/logo1.png";
import earthPic from "./earth2.jpg";
import addSitePic from "./addSite.png";
import "./landing.css";

class Landing extends Component {
  static contextType = siteContext;
  render() {
    return (
      <div className="landing">
        <header>
          <h1>
            Welcome to Trash
            <img src={logo} alt="logo" className="logo" />
            Tracker!
          </h1>
          <img src={earthPic} alt="Earth" id="earth" />
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
                success picture!{" "}
              </p>{" "}
            </div>
            <img src={completeImg} alt="Completed Trash site" id="ex"></img>
          </section>

          {/* <h2>Global EnvoScore:</h2>
        <h3>Current Global EnvoScore:</h3>
        <h4>{this.context.totalScore}</h4>
        <p>
          {" "}
          Our app shows how many small efforts add up to make a large impact.
          The Global EnvoScore tracks the points of all users.
        </p> */}
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
