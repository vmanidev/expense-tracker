import React from "react";
import Summary from "./components/Summary/Summary";
import TransactionList from "../Transactions/components/TransactionList/TransactionList";

export default function Dashboard() {
  return (
    <>
      <Summary />
      <TransactionList limit="5" />
    </>
  );
}
