import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
} from "react-native";
import ExpenseTile from "./expenses_tile";
import Expense from "../models/expense";
import { useState } from "react";
import ManageExpenses from "../screens/manage-expenses";

type ExpensesListProps = {
  expenses: Expense[];
  totalContainerTitle: string;
};

function ExpensesList({ expenses, totalContainerTitle }: ExpensesListProps) {
  const [showModal, setShowModal] = useState(false);
  let total = 0;
  expenses.forEach((expense) => {
    total = total + Number.parseFloat(expense.expense);
  });

  function onPressTile() {
    setShowModal(true);
  }

  function onPressClose() {}

  function onPressAdd() {}

  return (
    <View>
      <Modal
        animationType="slide"
        presentationStyle="formSheet"
        visible={showModal}
        style={{
          height: 10,
        }}
      >
        <ManageExpenses />
      </Modal>
      <View style={styles.totalContainer}>
        <Text>{totalContainerTitle}</Text>
        <Text>{`$${total}`}</Text>
      </View>
      <FlatList
        data={expenses}
        renderItem={(value) => (
          <Pressable onPress={onPressTile}>
            <ExpenseTile expenseItem={value.item} />
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#fe9191",
    borderRadius: 2,
    marginBottom: 30,
  },
  outerContainer: {},
});

export default ExpensesList;
