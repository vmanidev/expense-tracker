import React from "react";
import Summary from "./components/Summary";
import TransactionList from "../Transactions/components/TransactionList";

export default function Dashboard() {
  return (
    <>
      <Summary />
      <TransactionList />
    </>
  );
}
