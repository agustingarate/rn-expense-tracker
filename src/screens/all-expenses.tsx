import { StyleSheet, View } from "react-native";
import ExpensesList from "../components/expenses_list";
import Expense from "../models/expense";
import { ExpensesContext } from "../store/expenses-context";
import { useContext, useEffect, useState } from "react";
import { getExpenses } from "../utils/http";
import React from "react";
import { useFocusEffect } from "@react-navigation/native";
import LoadingSpinner from "../components/loadingSpinner";

function AllExpenses() {
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
  } else {
    return (
      <View style={styles.outerView}>
        <ExpensesList expenses={expenses} totalContainerTitle="Total" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerView: {
    padding: 20,
  },
});

export default AllExpenses;
