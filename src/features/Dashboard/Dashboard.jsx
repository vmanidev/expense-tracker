import React from "react";
import Summary from "./components/Summary/Summary";
import TransactionList from "../Transactions/components/TransactionList/TransactionList";
import { useExpense } from "../../contexts/ExpenseContext";
import Intro from "../../ui-components/Intro/Intro";

export default function Dashboard() {
  const { expenses } = useExpense();

  if (expenses.length < 1) {
    return <Intro />;
  } else {
    <>
      <Summary />
      <TransactionList limit="5" />
    </>;
  }
}
