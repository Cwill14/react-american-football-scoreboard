import React from "react";
import "../App";

const BottomRow = props => {
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{props.down}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        {props.toGo >= 1 ? 
          <div className="toGo__value">{props.toGo}</div> :
          <div className="toGo__value valueInches">{props.toGo}</div>
        }
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{props.ballOn}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{props.quarter}</div>
      </div>
    </div>
  );
};

export default BottomRow;
