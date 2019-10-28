import React from "react";

export default function Work() {
  return (
    <div className="page__container">
      <div className="welcome">
          <h1>Projects</h1> <br/>
        <div className="work">
          
          <div className="card-container">
            <div className="card">
              <div
                className="front"
              >
                <div className="project__image">
                  <img 
                  className="project__pic"
                  src="./patxi.png" alt="project" style={{height:"100%",width:"100%", size:"cover", overflow:"hidden"}}/>
                </div>
                <div className="project__title">
                  <h3>The Adventures of Patxi Patxaran</h3><br/>
                  A <b>Vanilla JS</b> RPG
                </div>
                

              </div>
              <div className="back">
                <h4>Ironhack Project #1</h4>
                <div className="back__text">
                This was my very first Ironhack project. A short jRPG, greatly inspired by games such as Final Fantasy or Chrono Trigger that I entirely coded in HTML, CSS and JavaScript (no frameworks).<br/>
                I also wrote and recorded the entire soundtrack.<br/>
                <br/>
                <a href="https://sandwichexpert.github.io/Patxi_Patxaran/" className="portfolink"><h5>Link to the game</h5></a>
                </div>
              </div>
            </div>
          </div>

          <div className="card-container">
            <div className="card">
              <div
                className="front"
              >
                <div className="project__image">
                  <img 
                  className="project__pic"
                  src="./jabbed.png" alt="project" style={{height:"100%",width:"100%", size:"cover", overflow:"hidden", backgroundColor:"black"}}/>
                </div>
                <div className="project__title">
                  <h3>JAB</h3><br/>
                  A full-stack martial arts news hub made with <b>HBS</b>
                </div>
                

              </div>
              <div className="back">
                <h4>Ironhack Project #2</h4>
                <div className="back__text">
                As a team of three, we created a full-stack app gathering news from APIs. Each user could filter the news they wanted to see and set their preferences on given sports or martial artists.<br/>
                <br/>
                <a href="https://jabironhack.herokuapp.com" className="portfolink"><h5>Link to the app</h5></a>
                </div>
              </div>
            </div>
          </div>

          <div className="card-container">
            <div className="card">
              <div
                className="front"
              >
                <div className="project__image">
                  <img 
                  className="project__pic"
                  src="./maptee.png" alt="project" style={{height:"100%",width:"100%", size:"cover", overflow:"hidden"}}/>
                </div>
                <div className="project__title">
                  <h3>MAPTEE</h3><br/>
                  A mobile-first fullstack <b>ReactJs</b> App
                </div>
                

              </div>
              <div className="back">
                <h4>Ironhack Project #3</h4>
                <div className="back__text">
                This was our final project with Ironhack. We were two working on it. It is an app allowing people to creating events and vote for locations on a map. Each event has a dedicated chat room allowing everyone to converse on the choice to make.
                <br/>
                <a href="https://maptee.herokuapp.com" className="portfolink"><h5>Link to the game</h5></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
