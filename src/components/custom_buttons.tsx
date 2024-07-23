import {
  StyleProp,
  TextStyle,
  View,
  ViewStyle,
  Text,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";

type CustomButtonsProps = {
  title: string;
  onPress: () => void;
  textStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  androidRippleColor?: string;
};

function CustomButton(props: CustomButtonsProps) {
  return (
    <Pressable
      style={({ pressed }) => pressed && [styles.pressedIOS]}
      onPress={props.onPress}
    >
      <View style={props.buttonStyle ?? styles.defaultButtonStyle}>
        <Text style={props.textStyle ?? styles.defaultTextStyle}>
          {props.title}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  defaultTextStyle: {
    color: "#110046",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  defaultButtonStyle: {
    backgroundColor: "#dbb9ff",

    borderRadius: 2,
  },
  pressedIOS: {
    opacity: 0.7,
  },
});

export default CustomButton;
