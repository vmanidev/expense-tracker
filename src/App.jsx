import React from "react";
import PageHeader from "./components/PageHeader/PageHeader";
import Dashboard from "./features/Dashboard/Dashboard";

import "./app.css";

export default function App() {
  return (
    <div id="app">
      <PageHeader></PageHeader>
      <Dashboard />
    </div>
  );
}
