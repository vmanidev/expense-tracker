import React from "react";

import "./PageFooter.css";

export default function PageFooter() {
  return (
    <footer>
      &copy; {new Date().getFullYear()} | Expense Manager | MIT License | <a href="https://github.com/vmanidev/expense-tracker">GitHub</a>
    </footer>
  );
}
