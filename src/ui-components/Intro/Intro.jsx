import React from "react";

import "./Intro.css";

export default function Intro() {
  return (
    <div id="intro-main-container">
      <h1>Welcome to Expense Tracker</h1>
      <p id="info-txt">
        Keep track of your income and expenses in one place. It's simple, fast,
        and free!
      </p>
      <p>
        To get started, please click the <strong>Add Transaction</strong> button
        to begin.
      </p>
      <button id="add-btn">Add Transaction</button>
    </div>
  );
}
