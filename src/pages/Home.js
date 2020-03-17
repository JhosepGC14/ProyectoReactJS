import React from "react";
import "../styles/Home.css";
import platzi_conf from "../images/platziconf-logo.svg"
import astronauta from "../images/astronauts.svg"
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
    <div className="Home__col">
      <img src={platzi_conf} alt="platziconf"/>
      <h1>PRINT YOUR BADGES</h1>
      <p>The easiest way to manage your conference</p>
      <Link to="/badges" className="btn btn-primary">Start Now!</Link>
    </div>
    <div className="Home__col">
      <img src={astronauta} alt="astronauta"/>
    </div>
    </div>
  );
}

export default Home;
