import React from "react";
import ToggleButton from "../ToggleButton";
import "./index.css";

const Controls = ({ initialState, onToggle }) => {
  return (
    <div className="dashboard-controls-container">
      <p className="dashboard-controls-text">Encender / Apagar</p>
      <ToggleButton initialState={initialState} onToggle={onToggle} />
    </div>
  );
};

export default Controls;
