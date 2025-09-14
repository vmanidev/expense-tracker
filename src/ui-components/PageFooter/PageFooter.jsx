import React from "react";

import "./PageFooter.css";

export default function PageFooter() {
  return (
    <footer>
      &copy; {new Date().getFullYear()} | Expense Tracker | MIT License | <a className="link" href="https://github.com/vmanidev/expense-tracker" target="_blank">GitHub</a>
    </footer>
  );
}
