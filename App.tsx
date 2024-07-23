import "react-native-gesture-handler";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import RecentExpenses from "./src/screens/recent-expenses";
import { NavigationContainer } from "@react-navigation/native";
import { StackParams, TabsParams } from "./src/screens/screen_types";
import AllExpenses from "./src/screens/all-expenses"; //
import Ionicons from "@expo/vector-icons/Ionicons";
import ExpensesContext from "./src/store/expenses-context";
import ManageExpenses from "./src/screens/manage-expenses";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const Tab = createBottomTabNavigator<TabsParams>();
  const Stack = createStackNavigator<StackParams>();

  function HandleTab() {
    const navigation = useNavigation<StackNavigationProp<StackParams>>();

    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            position: "static",
          },
          headerRight: ({}) => {
            return (
              <Pressable
                onPress={() =>
                  navigation.navigate("ManageExpenses", { mode: "add" })
                }
              >
                <Ionicons
                  style={styles.addButton}
                  name="add-circle-outline"
                ></Ionicons>
              </Pressable>
            );
          },
          headerTitleAlign: "center",
          tabBarActiveTintColor: "#006120",
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                color={focused ? "#00d948" : "#888888"}
                name="time"
                size={size}
              ></Ionicons>
            );
          },
        }}
      >
        <Tab.Screen
          name="AllExpenses"
          component={AllExpenses}
          options={{ title: "All Expenses" }}
        />
        <Tab.Screen
          name="RecentExpenses"
          component={RecentExpenses}
          options={{
            title: "Recent",
            headerTitle: "Recent Expenses",
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <ExpensesContext>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Tab"
            component={HandleTab}
          ></Stack.Screen>
          <Stack.Screen
            options={{
              presentation: "modal",
            }}
            name="ManageExpenses"
            component={ManageExpenses}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ExpensesContext>
  );
}

const styles = StyleSheet.create({
  addButton: {
    fontSize: 27,
    marginRight: 20,
  },
});
