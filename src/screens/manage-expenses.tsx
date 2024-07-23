import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import { ManageExpensesProps, StackParams } from "./screen_types";
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomButton from "../components/custom_buttons";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

function ManageExpenses(props: ManageExpensesProps) {
  const params = props.route.params;
  const expensesContext = useContext(ExpensesContext);

  function cancel() {
    props.navigation.goBack();
  }

  function update() {
    switch (params.mode) {
      case "edit":
      case "add":
    }
  }

  function remove() {
    if (params.id != null) {
      expensesContext.removeExpense(params.id);
      props.navigation.goBack();
    }
  }
  return (
    <View style={styles.outerContainer}>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <CustomButton title="Cancel" onPress={cancel}></CustomButton>
        </View>
        <View style={styles.button}>
          <CustomButton title="Update" onPress={update}></CustomButton>
        </View>
      </View>

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
    flex: 1,
    alignItems: "center",
    padding: 20,
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    marginHorizontal: 5,
  },
  icon: {
    fontSize: 35,
  },
  line: {
    width: "100%",
    color: "#717171",
    marginVertical: 23,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default ManageExpenses;
