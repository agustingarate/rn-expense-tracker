import { createContext, useState } from "react";
import Expense, { expenses } from "../models/expense";

type ExpensesContextType = {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  removeExpense: (id: string) => void;
  modifyExpense: (newExpense: Expense) => void;
};

export const ExpensesContext = createContext<ExpensesContextType>({
  expenses: [],
  addExpense: (expense) => {},
  removeExpense: (id) => {},
  modifyExpense: (newExpense: Expense) => {},
});

function ExpenseContextProvider({ children }: { children: React.JSX.Element }) {
  const [expensesList, setExpenses] = useState<Expense[]>(expenses);

  function addExpense(expense: Expense) {
    setExpenses((list) => [expense, ...list]);
  }

  function removeExpense(id: string) {
    setExpenses(expensesList.filter((expense) => expense.id != id));
  }

  function modifyExpense(newExpense: Expense) {
    setExpenses((list) => [
      newExpense,
      ...list.filter((element) => element.id != newExpense.id),
    ]);
  }

  const value: ExpensesContextType = {
    expenses: expensesList,
    addExpense: addExpense,
    removeExpense: removeExpense,
    modifyExpense: modifyExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpenseContextProvider;
