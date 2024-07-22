import { View, Text, StyleSheet } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { RecentExpensesProps, TabsParams } from "./screen_types";
import ExpensesList from "../components/expenses_list";
import { expenses } from "../models/expense";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

function RecentExpenses({ navigation, route }: RecentExpensesProps) {
  const expensesContext = useContext(ExpensesContext);
  return (
    <View style={styles.outerView}>
      <ExpensesList
        expenses={expensesContext.expenses}
        totalContainerTitle="Last 7 days"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  outerView: {
    padding: 20,
  },
});

export default RecentExpenses;
