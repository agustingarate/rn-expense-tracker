import { FlatList, View, Text, StyleSheet, Pressable } from "react-native";
import ExpenseTile from "./expenses_tile";
import Expense from "../models/expense";
import { useNavigation } from "@react-navigation/native";
import { StackParams } from "../screens/screen_types";
import { StackNavigationProp } from "@react-navigation/stack";
import Colors from "../utils/colors";

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

  function onPressTile(expense: Expense) {
    navigation.navigate("ManageExpenses", {
      mode: "edit",
      id: expense.id,
      value: {
        amount: expense.expense,
        description: expense.title,
        date: expense.date.toDateString(),
      },
    });
  }

  return (
    <View style={styles.outer}>
      <View style={styles.totalContainer}>
        <Text style={styles.totalContainerText}>{totalContainerTitle}</Text>
        <Text style={styles.totalContainerText}>{`$${total}`}</Text>
      </View>
      <View>
        <FlatList
          data={expenses}
          renderItem={(value) => (
            <Pressable onPress={() => onPressTile(value.item)}>
              <ExpenseTile expenseItem={value.item} />
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
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
    backgroundColor: Colors.primary[700],
    borderRadius: 2,
    marginBottom: 10,
  },
  totalContainerText: {
    color: Colors.complementary[200],
  },
});

export default ExpensesList;
