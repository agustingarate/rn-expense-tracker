import { createContext, useState } from "react";
import Expense, { expenses } from "../models/expense";

type ExpensesContextType = {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  removeExpense: (id: string) => void;
};

export const ExpensesContext = createContext<ExpensesContextType>({
  expenses: [],
  addExpense: (expense) => {},
  removeExpense: (id) => {},
});

function ExpenseContextProvider({ children }: { children: React.JSX.Element }) {
  const [expensesList, setExpenses] = useState<Expense[]>(expenses);

  function addExpense(expense: Expense) {
    setExpenses((list) => [expense, ...list]);
  }

  function removeExpense(id: string) {
    setExpenses(expensesList.filter((expense) => expense.id != id));
  }

  const value: ExpensesContextType = {
    expenses: expensesList,
    addExpense: addExpense,
    removeExpense: removeExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpenseContextProvider;
