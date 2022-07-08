import React from "react";
import "./index.css";

const Robot = ({ processIsActive }) => {
  return (
    <div className="robot-main-container">
      <div
        className={
          processIsActive ? "robot-conveyor-belt on" : "robot-conveyor-belt"
        }
      ></div>

      <div
        className={processIsActive ? "robot-generator on" : "robot-generator"}
      ></div>
      <div
        className={processIsActive ? "robot-final-box on" : "robot-final-box"}
      ></div>
      <div className={processIsActive ? "robot-drill on" : "robot-drill"}></div>
      <div className="robot-e1">
        <span className="robot-sensor-span">E1</span>
      </div>
      <div className="robot-e2">
        <span className="robot-sensor-span">E2</span>
      </div>
      <div className="robot-t1">
        <span className="robot-sensor-span">T1</span>
      </div>
      <div className="robot-t2">
        <span className="robot-sensor-span">T2</span>
      </div>
      <div
        className={processIsActive ? "robot-piece on" : "robot-piece"}
      ></div>
    </div>
  );
};

export default Robot;
