import { ActivityIndicator, StyleSheet, View } from "react-native";
import Colors from "../utils/colors";

function LoadingSpinner() {
  return (
    <View style={styles.view}>
      <ActivityIndicator size={80} color={Colors.triadicYellow[700]} />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
  },
});

export default LoadingSpinner;
