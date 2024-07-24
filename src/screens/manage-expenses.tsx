import { View, StyleSheet, Pressable } from "react-native";
import { ManageExpensesProps } from "./screen_types";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

import Expense, { expenses } from "../models/expense";
import { deleteExpense, storeExpense, updateExpense } from "../utils/http";
import ExpenseForm, {
  ExpenseFormInputValuesType,
} from "../components/manage_expense/expense_form";

function ManageExpenses(props: ManageExpensesProps) {
  const params = props.route.params;
  const expensesContext = useContext(ExpensesContext);

  function cancel() {
    props.navigation.goBack();
  }

  function update(values: ExpenseFormInputValuesType) {
    switch (params.mode) {
      case "edit":
        // const currentExpense = expenses.find(
        //   (expense) => expense.id == params.id,
        // );
        // const newExpense = currentExpense?.copyWith(
        //   null,
        //   values.description,
        //   new Date(values.date),
        //   values.amount,
        // );

        // console.log(newExpense);

        // expensesContext.modifyExpense(newExpense!);
        updateExpense(params.id!, values);
        props.navigation.goBack();
        break;

      case "add":
        // const expense = new Expense(
        //   (+Expense.lastId + 1).toString(),
        //   values.description,
        //   new Date(values.date),
        //   values.amount,
        // );
        // expensesContext.addExpense(expense);
        storeExpense(values);
        // Expense.lastId = (+Expense.lastId + 1).toString();
        props.navigation.goBack();
        break;
    }
  }

  function remove() {
    if (params.id != null) {
      // expensesContext.removeExpense(params.id);
      deleteExpense(params.id);
      props.navigation.goBack();
    }
  }
  return (
    <View style={styles.outerContainer}>
      <ExpenseForm cancel={cancel} update={update} value={params.value} />

      <View style={styles.line}></View>

      {params.mode == "edit" && (
        <Pressable onPress={remove}>
          <Ionicons name="trash-outline" style={styles.icon} />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    padding: 20,
  },

  icon: {
    fontSize: 35,
    textAlign: "center",
  },
  line: {
    width: "100%",
    color: "#717171",
    marginVertical: 23,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default ManageExpenses;
