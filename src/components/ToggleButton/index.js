import React, { useState } from "react";
import "./index.css";

const ToggleButton = ({ initialState = false, onToggle }) => {
  const [toggle, setToggle] = useState(initialState);

  const triggerToggle = () => {
    setToggle(!toggle);
    if (onToggle) {
      onToggle(!toggle);
    }
  };

  return (
    <div
      onClick={triggerToggle}
      className={`toggle ${toggle ? "toggle--checked" : ""}`}
    >
      <div className="toggle-container">
        <div className="toggle-check">
          <span>ON</span>
        </div>
        <div className="toggle-uncheck">
          <span>OFF</span>
        </div>
      </div>
      <div className="toggle-circle"></div>
      <input
        className="toggle-input"
        type="checkbox"
        aria-label="Encender/Apagar"
      />
    </div>
  );
};

export default ToggleButton;
