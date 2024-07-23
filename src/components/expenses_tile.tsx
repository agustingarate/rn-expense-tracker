import { View, Text, Button, StyleSheet } from "react-native";
import Expense from "../models/expense";
import Colors from "../utils/colors";

type ExpenseTileProps = {
  expenseItem: Expense;
};

function ExpenseTile({ expenseItem }: ExpenseTileProps) {
  return (
    <View style={styles.tile}>
      <View>
        <Text style={styles.titleText}>{expenseItem.title}</Text>
        <Text>{expenseItem.date.toLocaleDateString()}</Text>
      </View>
      <View>
        <Text style={styles.expenseContainer}>{expenseItem.expense}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#e1e1e1",
    marginTop: 6,
    marginBottom: 6,
    padding: 12,
    // marginHorizontal: 10,
    borderRadius: 5,
  },
  titleText: {
    fontWeight: "500",
  },

  expenseContainer: {
    backgroundColor: Colors.analogousBlue[200],
    borderRadius: 5,
    padding: 10,
    minWidth: 80,
    textAlign: "center",
  },
});

export default ExpenseTile;
