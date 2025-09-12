import React from "react";

import "./pageHeader.css";

export default function PageHeader() {
  return (
    <div id="header-wrapper">
      <span id="page-title">Expense Tracker</span>
      <span id="settings-icon" className="material-icons material-icons-round">
        settings
      </span>
    </div>
  );
}
