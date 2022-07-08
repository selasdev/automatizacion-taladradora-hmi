import React, { useState } from "react";
import { PROCESS_DEFAULT_INITIALIZED } from "../../config";
import Controls from "../Controls";
import Robot from "../Robot";
import "./index.css";

const Dashboard = () => {
  const [processInitialized, setProcessInitialization] = useState(
    PROCESS_DEFAULT_INITIALIZED
  );

  console.log("process initialized", processInitialized);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header-1">Dashboard</h1>
      <Controls
        initialState={PROCESS_DEFAULT_INITIALIZED}
        onToggle={setProcessInitialization}
      />
      <Robot processIsActive={processInitialized} />
    </div>
  );
};

export default Dashboard;
