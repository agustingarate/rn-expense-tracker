import axios from "axios";
import Expense from "../models/expense";
import { ExpenseFormInputValuesType } from "../components/manage_expense/expense_form";

const BASE_URL = "https://react-native-ab8b0-default-rtdb.firebaseio.com";

export function storeExpense(expenseValue: ExpenseFormInputValuesType) {
  axios.post(`${BASE_URL}/expenses.json`, expenseValue);
  console.log("post");
}

export async function getExpenses() {
  const response = await axios.get(`${BASE_URL}/expenses.json`);
  const expenses = Object.entries<any>(response.data).map(([id, data]) => {
    return new Expense(id, data.description, new Date(data.date), data.amount);
  });
  //   for (const key in response.data) {
  //     const data = response.data[key];
  //     const newExpense = new Expense(
  //       key,
  //       data.description,
  //       data.date,
  //       data.amount,
  //     );
  //     expenses.push(newExpense);
  //   }
  return expenses;
}

export function deleteExpense(id: string) {
  axios.delete(`${BASE_URL}/expenses/${id}.json`);
}

export function updateExpense(
  id: string,
  expenseValue: ExpenseFormInputValuesType,
) {
  axios.put(`${BASE_URL}/expenses/${id}.json`, expenseValue);
}
