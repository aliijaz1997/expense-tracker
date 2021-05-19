import React from "react";
import "./App.css";
import Heading from "./components/heading.jsx";
import Balance from "./components/balance.jsx";
import Summary from "./components/Summary.jsx";
import TransactionSummary from "./components/transactionSummary.jsx";
import AddTransaction from "./components/addform";

function App() {
  return (
    <>
      <Heading />
      <Balance />
      <Summary />
      <TransactionSummary />
      <AddTransaction />
    </>
  );
}

export default App;
