import { StyleSheet, View, Text } from "react-native";
import CustomInput from "./input";
import Colors from "../../utils/colors";
import { useState } from "react";
import CustomButton from "../custom_buttons";
import Expense, { expenses } from "../../models/expense";

export type ExpenseFormInputValuesType = {
  amount: string;
  date: string;
  description: string;
};

type ExpenseFormProps = {
  cancel: () => void;
  update: (values: ExpenseFormInputValuesType) => void;
  id?: string;
};

function ExpenseForm({ cancel, update, id }: ExpenseFormProps) {
  const expense = expenses.find((expense) => expense.id == id);
  const [inputValues, setInputsValues] = useState<ExpenseFormInputValuesType>({
    amount: expense?.expense ?? "",
    date: expense?.date.toDateString() ?? "",
    description: expense?.title ?? "",
  });

  function handleInputs(
    value: string,
    inputId: keyof ExpenseFormInputValuesType,
  ) {
    setInputsValues((currentInputValues) => {
      return { ...currentInputValues, [inputId]: value };
    });
  }

  function onCancel() {
    cancel();
  }

  function onUpdate() {
    console.log(inputValues);
    update(inputValues);
  }

  return (
    <View>
      <Text style={styles.title}>Your expense</Text>
      <View style={styles.row}>
        <View style={styles.rowInputs}>
          <CustomInput
            label="Amount"
            inputProps={{
              keyboardType: "decimal-pad",
              onChangeText: (amount) => handleInputs(amount, "amount"),
              value: inputValues.amount,
            }}
          />
        </View>

        <View style={styles.rowInputs}>
          <CustomInput
            label="Date"
            inputProps={{
              placeholder: "YYYY-MM-DD",
              maxLength: 10,
              onChangeText: (date) => handleInputs(date, "date"),
              value: inputValues.date,
            }}
          />
        </View>
      </View>

      <CustomInput
        label="Description"
        inputProps={{
          multiline: true,
          onChangeText: (description) =>
            handleInputs(description, "description"),
          value: inputValues.description,
        }}
      />
      <View style={styles.buttons}>
        <View style={styles.button}>
          <CustomButton title="Cancel" onPress={onCancel}></CustomButton>
        </View>
        <View style={styles.button}>
          <CustomButton title="Update" onPress={onUpdate}></CustomButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "700",
    marginVertical: 30,
    color: Colors.primary[700],
  },
  row: {
    flexDirection: "row",
  },
  rowInputs: {
    flex: 0.5,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    marginHorizontal: 5,
  },
});

export default ExpenseForm;
