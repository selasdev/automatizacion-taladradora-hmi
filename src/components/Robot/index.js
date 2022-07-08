import React, { useState } from "react";
import { useEffect } from "react";
import "./index.css";

const Robot = ({ processIsActive }) => {
  const [activeRun, setActiveRun] = useState(false);
  const [drillIsActive, setDrillIsActive] = useState(false);

  useEffect(() => {
    if (!activeRun && processIsActive) {
      setActiveRun(true);
    }
  }, [processIsActive, activeRun]);

  useEffect(() => {
    let firstDrillInterval;
    let secondDrillInterval;
    let activeRunInterval;

    if (activeRun) {
      firstDrillInterval = setTimeout(() => {
        if (activeRun) {
          setDrillIsActive(true);
        }
      }, 2000);
      secondDrillInterval = setTimeout(() => {
        if (activeRun) {
          setDrillIsActive(false);
        }
      }, 7000);
      activeRunInterval = setTimeout(() => {
        setActiveRun(false);
      }, 10000);
    } else {
      setDrillIsActive(false);
    }

    return () => {
      if (firstDrillInterval) {
        clearTimeout(firstDrillInterval);
      }
      if (secondDrillInterval) {
        clearTimeout(secondDrillInterval);
      }
      if (activeRunInterval) {
        clearTimeout(activeRunInterval);
      }
    };
  }, [activeRun]);

  return (
    <div className="robot-main-container">
      <div
        className={activeRun ? "robot-conveyor-belt on" : "robot-conveyor-belt"}
      ></div>

      <div
        className={processIsActive ? "robot-generator on" : "robot-generator"}
      ></div>
      <div
        className={activeRun ? "robot-final-box on" : "robot-final-box"}
      ></div>
      <div className={drillIsActive ? "robot-drill on" : "robot-drill"}></div>
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
      <div className={activeRun ? "robot-piece on" : "robot-piece"}></div>
    </div>
  );
};

export default Robot;
