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
    </div>
  );
};

export default Robot;
