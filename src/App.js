//TODO: STEP 1 - Import the useState hook.
import React,  { useState } from "react";
import "./App.css";
import BottomRow from "./Components/BottomRow";
import ToGoForm from "./Components/ToGoForm";
import BallOnForm from "./Components/BallOnForm";
import SetTimeForm from "./Components/SetTimeForm";


function App() {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [down, setDown] = useState(1);
  const [quarter, setQuarter] = useState(1);
  const [toGo, setToGo] = useState(5);
  const [toGoStatus, setToGoStatus] = useState(false);
  const [ballOn, setBallOn] = useState(35);
  const [ballOnStatus, setBallOnStatus] = useState(false);
  const [time, setTime] = useState(10.00);
  const [timeStatus, setTimeStatus] = useState(false);

 

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{time}</div>
          {/* <div className="timer">00:03</div> */}
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow down={down} quarter={quarter} toGo={toGo} ballOn={ballOn} />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => {setHomeScore(homeScore + 6)}}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => {setHomeScore(homeScore + 3)}}>Home Field Goal</button>
          <button className="homeButtons__extraPoint" onClick={() => {setHomeScore(homeScore + 1)}}>Home Extra Point</button>
          <button className="homeButtons__customHomeScore" onClick={() => {setHomeScore(homeScore + 1)}}>Set Home Score</button>

        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => {setAwayScore(awayScore + 6)}}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => {setAwayScore(awayScore + 3)}}>Away Field Goal</button>
          <button className="awayButtons__extraPoint"onClick={() => {setAwayScore(awayScore + 1)}}>Away Extra Point</button>
          <button className="awayButtons__customAwayScore" onClick={() => {setAwayScore(awayScore + 1)}}>Set Away Score</button>

        </div>
        <div className="otherButtons">
          <button className="otherButton" onClick={() => {
            setHomeScore(homeScore * 0);
            setAwayScore(awayScore * 0);
            }} >Reset Scores
          </button>
          <button 
            className="otherButton"
            onClick={() => {
              setHomeScore(homeScore * 0);
              setAwayScore(awayScore * 0);
              setToGo(1);
              setBallOn(ballOn / ballOn);
              setDown(down / down);
              setQuarter(quarter / quarter);
              // setTime(time * 0);
              }}
            >Reset Scoreboard
          </button>
          <button className="otherButton" onClick={() => {down < 4 ? setDown(down + 1) : setDown(down / down)}}>Cycle Down</button>
          <button 
            className="otherButton" 
            onClick={() => {quarter < 4 ? setQuarter(quarter + 1) : setQuarter(quarter / quarter)}}
            >Cycle Quarter
          </button>
          <button 
            className="otherButton" 
            onClick={() => {setToGoStatus(!toGoStatus)}}
            >Set To Go
          </button>
          <button 
            className="otherButton" 
            onClick={() => {setBallOnStatus(!ballOnStatus)}}
            >Set Ball On
          </button>
          <button className="otherButton" onClick={() => {setTimeStatus(!timeStatus)}}>Set Time</button>
          <button className="otherButton">Stop/Start Time</button>
        </div>
      </section>
      <section className="forms">
        {toGoStatus ? <ToGoForm toGo={toGo} setToGo={setToGo} /> : null}
        {ballOnStatus ? <BallOnForm ballOn={ballOn} setBallOn={setBallOn} /> : null}
        {timeStatus ? <SetTimeForm time={time} setTime={setTime} /> : null}


      </section>
    </div>
  );
}

export default App;
