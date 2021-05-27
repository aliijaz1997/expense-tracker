import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import shortid from "shortid";
export const ExpenseContext = createContext();

function ExpenseProvider({ children }) {
  const initialState = {
    transaction: [
      {
        id: shortid.generate(),
        description: "Salaray Transfered",
        amount: 200,
      },
      {
        id: shortid.generate(),
        description: "Salaray Transfered",
        amount: -300,
      },
      {
        id: shortid.generate(),
        description: "Salaray Transfered",
        amount: 200,
      },
    ],
  };
  const getIncome = () => {
    let income = 0;
    for (var i = 0; i < state.transaction.length; i++) {
      if (state.transaction[i].amount > 0)
        income += state.transaction[i].amount;
    }
    console.log(typeof parseInt(income, 10));
    return parseInt(income, 10);
  };

  const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < state.transaction.length; i++) {
      if (state.transaction[i].amount < 0)
        expense += state.transaction[i].amount;
    }
    return expense;
  };
  function handleAddTransaction(data) {
    dispatch({
      type: "ADD_TRANSACTION",
      description: data.description,
      amount: parseInt(data.amount, 10),
      id: shortid.generate(),
    });
  }
  function handleDeleteTransaction(id) {
    // console.log(id);
    dispatch({
      type: "DELETE_TRANSACTION",
      id: id,
    });
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ExpenseContext.Provider
      value={{
        state,
        handleAddTransaction,
        handleDeleteTransaction,
        getIncome,
        getExpense,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}

export default ExpenseProvider;
