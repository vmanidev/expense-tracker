import React, { useState } from "react";

import "./pageHeader.css";

export default function PageHeader() {
  const [theme, setTheme] = useState("dark_mode");
  const toggleMode = () => {
    setTheme((prev) => (prev === "light_mode" ? "dark_mode" : "light_mode"));
  };

  return (
    <div id="header-wrapper">
      <span id="page-title">Expense Tracker</span>
      <span
        id="settings-icon"
        className="material-icons material-symbols-outlined"
        onClick={toggleMode}
      >
        {theme}
      </span>
    </div>
  );
}
