import { View, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { RecentExpensesProps, TabsParams } from "./screen_types";
import ExpensesList from "../components/expenses_list";
import Expense from "../models/expense";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getExpenses } from "../utils/http";
import React from "react";
import LoadingSpinner from "../components/loadingSpinner";

function RecentExpenses({ navigation, route }: RecentExpensesProps) {
  const expensesContext = useContext(ExpensesContext);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [isFetchingExpenses, setIsFetchingExpenses] = useState<boolean>(false);

  async function fetchExpenses() {
    setIsFetchingExpenses(true);
    const expenses = await getExpenses();
    setExpenses(expenses);
    setIsFetchingExpenses(false);
  }

  useFocusEffect(
    React.useCallback(() => {
      fetchExpenses();
      console.log("render");
    }, []),
  );

  useEffect(() => {
    async function fetchExpenses() {
      const expenses = await getExpenses();
      setExpenses(expenses);
    }

    fetchExpenses();
    console.log("render");
  }, []);

  if (isFetchingExpenses) {
    return <LoadingSpinner />;
  }
  return (
    <View style={styles.outerView}>
      <ExpensesList expenses={expenses} totalContainerTitle="Last 7 days" />
    </View>
  );
}

const styles = StyleSheet.create({
  outerView: {
    padding: 20,
  },
});

export default RecentExpenses;
