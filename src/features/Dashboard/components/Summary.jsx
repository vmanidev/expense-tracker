import React from "react";

import "./summary.css";

export default function Summary() {
  return (
    <div>
      <div id="summary-header">
        <div className="section-title">Summary</div>
        <select id="year-select-field">
          <option>2025</option>
          <option>2024</option>
          <option>2023</option>
        </select>
      </div>
      <div id="summary-main-container">
        <div id="income">
          <span>Income</span>
          <span>Rs. 15,000</span>
        </div>
        <div id="expenses">
          <span>Expenses</span>
          <span>Rs. 10,000</span>
        </div>
        <div id="balance">
          <span>Balance</span>
          <span>Rs. 5,000</span>
        </div>
      </div>
    </div>
  );
}
