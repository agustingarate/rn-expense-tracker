import { FlatList, View, Text, StyleSheet, Pressable } from "react-native";
import ExpenseTile from "./expenses_tile";
import Expense from "../models/expense";
import { useNavigation } from "@react-navigation/native";
import { StackParams } from "../screens/screen_types";
import { StackNavigationProp } from "@react-navigation/stack";

type ExpensesListProps = {
  expenses: Expense[];
  totalContainerTitle: string;
};

function ExpensesList({ expenses, totalContainerTitle }: ExpensesListProps) {
  // const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation<StackNavigationProp<StackParams>>();
  let total = 0;
  expenses.forEach((expense) => {
    total = total + Number.parseFloat(expense.expense);
  });

  function onPressTile(id: string) {
    navigation.navigate("ManageExpenses", {
      mode: "add",
      id: id,
    });
  }

  function onPressClose() {}

  function onPressAdd() {}

  return (
    <View style={styles.outer}>
      <View style={styles.totalContainer}>
        <Text>{totalContainerTitle}</Text>
        <Text>{`$${total}`}</Text>
      </View>
      <View>
        <FlatList
          data={expenses}
          renderItem={(value) => (
            <Pressable onPress={() => onPressTile(value.item.id)}>
              <ExpenseTile expenseItem={value.item} />
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  outer: {
    height: "94%",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#fe9191",
    borderRadius: 2,
    marginBottom: 10,
  },
});

export default ExpensesList;
