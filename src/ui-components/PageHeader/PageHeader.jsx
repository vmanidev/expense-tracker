import React from "react";

import "./pageHeader.css";

export default function PageHeader() {
  return (
    <div id="header-wrapper">
      <span id="page-title">Expense Tracker</span>
      <span
        id="toggle-icon"
        className="material-icons material-symbols-outlined"
      >
        dark_mode
      </span>
    </div>
  );
}
