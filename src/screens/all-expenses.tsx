import { StyleSheet, View } from "react-native";
import ExpensesList from "../components/expenses_list";
import { expenses } from "../models/expense";
import { ExpensesContext } from "../store/expenses-context";
import { useContext } from "react";

function AllExpenses() {
  const expensesContext = useContext(ExpensesContext);

  return (
    <View style={styles.outerView}>
      <ExpensesList
        expenses={expensesContext.expenses}
        totalContainerTitle="Total"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  outerView: {
    padding: 20,
  },
});

export default AllExpenses;
