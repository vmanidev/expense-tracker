import React, { useEffect, useState } from "react";

import "./pageHeader.css";
import { useNavigate } from "react-router-dom";

export default function PageHeader() {
  const [mode, setMode] = useState("light_mode");

  useEffect(() => {
    if (mode === "dark_mode") document.body.classList.add("dark_mode");
    else document.body.classList.remove("dark_mode");
  }, [mode]);

  const navigate = useNavigate();

  return (
    <div id="header-wrapper">
      <span id="page-title" onClick={(e) => navigate("/")}>
        Expense Tracker
      </span>
      <span
        id="toggle-icon"
        className="material-icons material-symbols-outlined"
        onClick={(e) =>
          setMode((prev) =>
            prev === "light_mode" ? "dark_mode" : "light_mode"
          )
        }
      >
        {mode === "light_mode" ? "dark_mode" : "light_mode"}
      </span>
    </div>
  );
}
