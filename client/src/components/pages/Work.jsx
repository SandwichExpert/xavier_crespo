import React, { useState } from "react";

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
                  src="./jab.png" alt="project" />
                </div>
                <div className="project__title">
                  <h3>JAB</h3><br/>
                  A martial arts news hub made with <b>HBS</b>
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
                  src="./maptee.png" alt="project" style={{height:"100%",width:"100%", size:"cover", overflow:"hidden"}}/>
                </div>
                <div className="project__title">
                  <h3>MAPTEE</h3><br/>
                  A mobile-first fullstack <b>ReactJs</b> App
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
        </div>
      </div>
    </div>
  );
}
