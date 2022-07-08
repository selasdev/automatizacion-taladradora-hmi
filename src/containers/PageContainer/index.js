import React from "react";
import "./index.css";

export const PageContainer = ({ children }) => {
  return (
    <div className="page-container-outter">
      <div className="page-container-inner">{children}</div>
    </div>
  );
};
