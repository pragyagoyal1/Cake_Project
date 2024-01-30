import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';

export default function Home1() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    // Use the navigate function to go to the "/HomePage" route
    navigate("/HomePage");
  };

  return (
    <div className="cont">
      <div className="content">
        <div className="square twitch" style={{ marginBottom: "50px" }}>
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
          <div className="circle">
            <h4 className="DrugRadar">Your Wealthy Life Grows Here</h4>
            <p>One-stop tracker for all your expenses</p>
          </div>
        </div>

        <button className="button" onClick={handleGetStartedClick}>
          <span className="actual-text">&nbsp;GET&nbsp;STARTED&nbsp;</span>
          <span className="hover-text" aria-hidden="true">
            &nbsp;GET&nbsp;STARTED&nbsp;
          </span>
        </button>
      </div>
    </div>
  );
}
