import React from "react";

import "./PageFooter.css";

export default function PageFooter() {
  return (
    <div id="footer-container">
      <span>Made with ❤️.</span>
      <span>Open Source under MIT License.</span>
      <a href="https://github.com/vmanidev/expense-tracker" target="_blank">
        <img className="icon" src="/images/github.svg" />
      </a>
    </div>
  );
}
