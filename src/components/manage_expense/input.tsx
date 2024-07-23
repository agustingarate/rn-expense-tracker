import {
  View,
  Text,
  TextInputProps,
  TextInput,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from "react-native";
import Colors from "../../utils/colors";

function CustomInput({
  label,
  inputProps,
}: {
  label: string;
  inputProps: TextInputProps;
}) {
  let textInputStyles: StyleProp<ViewStyle>[] = [styles.input];
  if (inputProps && inputProps.multiline) {
    textInputStyles.push(styles.multilineInput);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={textInputStyles}
        selectionColor={Colors.primary[700]}
        {...inputProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    margin: 5,
  },
  label: {
    marginBottom: 10,
    fontSize: 13,
  },
  input: {
    backgroundColor: Colors.others.white,
    padding: 10,
    borderRadius: 4,
  },
  multilineInput: {
    minHeight: 100,
    maxHeight: 200,
    textAlignVertical: "top",
  },
});

export default CustomInput;
