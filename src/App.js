//TODO: STEP 1 - Import the useState hook.
import React,  { useState, useEffect } from "react";
import "./App.css";
import BottomRow from "./Components/BottomRow";
import ToGoForm from "./Components/ToGoForm";
import BallOnForm from "./Components/BallOnForm";
import SetTimeForm from "./Components/SetTimeForm";
import HomeNameForm from "./Components/HomeNameForm";
import AwayNameForm from "./Components/AwayNameForm";
import HomeScoreForm from "./Components/HomeScoreForm";
import AwayScoreForm from "./Components/AwayScoreForm";


function App() {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [down, setDown] = useState(1);
  const [quarter, setQuarter] = useState(1);
  const [toGo, setToGo] = useState(10);
  const [toGoStatus, setToGoStatus] = useState(false);
  const [ballOn, setBallOn] = useState(1);
  const [ballOnStatus, setBallOnStatus] = useState(false);
  const [time, setTime] = useState(900);
  const [timeStatus, setTimeStatus] = useState(false);
  const [manualTimeStatus, setManualTimeStatus] = useState(false);
  const [homeName, setHomeName] = useState("Home");
  const [homeNameStatus, setHomeNameStatus] = useState(false);
  const [homeScoreStatus, setHomeScoreStatus] = useState(false);
  const [awayName, setAwayName] = useState("Away");
  const [awayNameStatus, setAwayNameStatus] = useState(false);
  const [awayScoreStatus, setAwayScoreStatus] = useState(false);
  const [homeTimeouts, setHomeTimeouts] = useState(3);
  const [awayTimeouts, setAwayTimeouts] = useState(3);
  
  useEffect(() => {
    let interval = null;
    if (timeStatus) {
      interval = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    } else if (!timeStatus && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timeStatus, time]);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{homeName}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
            <div className="home__timeouts">Timeouts: {homeTimeouts}</div>
          </div>
          <div className="timer">{time}</div>
          <div className="away">
            <h2 className="away__name">{awayName}</h2>
            <div className="away__score">{awayScore}</div>
            <div className="away__timeouts">Timeouts: {awayTimeouts}</div>
          </div>
        </div>
        <BottomRow down={down} quarter={quarter} toGo={toGo} ballOn={ballOn} />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown gray" onClick={() => {setHomeScore(homeScore + 6)}}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal gray" onClick={() => {setHomeScore(homeScore + 3)}}>Home Field Goal</button>
          <button className="homeButtons__extraPoint gray" onClick={() => {setHomeScore(homeScore + 1)}}>Home Extra Point</button>
          <button className="homeButtons__safety gray" onClick={() => {setHomeScore(homeScore + 2)}}>Home Safety</button>
          <button className="homeButtons__timeout gray" onClick={() => {setHomeTimeouts(homeTimeouts > 0 ? homeTimeouts - 1 : 0)}}>Use Home Timeout</button>
          <button className="homeButtons__customHomeScore gray" onClick={() => {setHomeScoreStatus(!homeScoreStatus)}}>Set Home Score</button>
          <button className="homeButtons__homeName gray" onClick={() => {setHomeNameStatus(!homeNameStatus)}} >Set Home Name</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown orange" onClick={() => {setAwayScore(awayScore + 6)}}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal orange" onClick={() => {setAwayScore(awayScore + 3)}}>Away Field Goal</button>
          <button className="awayButtons__extraPoint orange"onClick={() => {setAwayScore(awayScore + 1)}}>Away Extra Point</button>
          <button className="awayButtons__safety orange" onClick={() => {setAwayScore(awayScore + 2)}}>Away Safety</button>
          <button className="awayButtons__timeout orange" onClick={() => {setAwayTimeouts(awayTimeouts > 0 ? awayTimeouts - 1 : 0)}}>Use Away Timeout</button>
          <button className="awayButtons__customAwayScore orange" onClick={() => {setAwayScoreStatus(!awayScoreStatus)}}>Set Away Score</button>
          <button className="awayButtons__awayName orange" onClick={() => setAwayNameStatus(!awayNameStatus)}>Set Away Name</button>
        </div>
        <div className="otherButtons">
          <button className="otherButton blue" onClick={() => {down < 4 ? setDown(down + 1) : setDown(down / down)}}>Cycle Down</button>
          <button 
            className="otherButton blue" 
            onClick={() => {quarter < 4 ? setQuarter(quarter + 1) : setQuarter(quarter / quarter)}}
            >Cycle Quarter
          </button>
          <button 
            className="otherButton blue" 
            onClick={() => {setToGoStatus(!toGoStatus)}}
            >Set To Go
          </button>
          <button 
            className="otherButton blue" 
            onClick={() => {setBallOnStatus(!ballOnStatus)}}
            >Set Ball On
          </button>
          <button 
            className={`otherButton stopStart ${timeStatus ? "active" : "inactive"}`} 
            onClick={() => {setTimeStatus(!timeStatus)}}>
            {timeStatus ? "Stop Clock" : "Start Clock"}
          </button>
          <button className="otherButton blue" onClick={() => {setManualTimeStatus(!manualTimeStatus)}}>Set Clock Time</button>
          <button className="otherButton scary" onClick={() => {
            setTime(900);
            setTimeStatus(false);
          }}>Reset Clock</button>
          <button className="otherButton scary" onClick={() => {
            setHomeScore(homeScore * 0);
            setAwayScore(awayScore * 0);
            }} >Reset Scores
          </button>
          <button 
            className="otherButton scary"
            onClick={() => {
              setHomeScore(homeScore * 0);
              setAwayScore(awayScore * 0);
              setToGo(10);
              setBallOn(1);
              setDown(1);
              setQuarter(1);
              setHomeName("Home");
              setAwayName("Away");
              setHomeTimeouts(3);
              setAwayTimeouts(3);
              setTime(900);
              setTimeStatus(false);
              }}
            >Reset Scoreboard
          </button>
        </div>
      </section>
      <section className="forms">
        {toGoStatus ? <ToGoForm setToGo={setToGo} /> : null}
        {ballOnStatus ? <BallOnForm setBallOn={setBallOn} /> : null}
        {manualTimeStatus ? <SetTimeForm setTime={setTime} /> : null}
        {homeNameStatus ? <HomeNameForm setHomeName={setHomeName}/> : null}
        {awayNameStatus ? <AwayNameForm setAwayName={setAwayName} /> : null}
        {homeScoreStatus ? <HomeScoreForm setHomeScore={setHomeScore} /> : null}
        {awayScoreStatus ? <AwayScoreForm setAwayScore={setAwayScore} /> : null}
      </section>
    </div>
  );
}

export default App;
