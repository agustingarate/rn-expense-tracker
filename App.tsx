import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RecentExpenses from "./src/screens/recent-expenses";
import { NavigationContainer } from "@react-navigation/native";
import { TabsParams } from "./src/screens/screen_types";
import AllExpenses from "./src/screens/all-expenses"; //
import Ionicons from "@expo/vector-icons/Ionicons";
import ExpensesContext from "./src/store/expenses-context";

export default function App() {
  const Tab = createBottomTabNavigator<TabsParams>();

  return (
    <ExpensesContext>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
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
            options={{ title: "Recent", headerTitle: "Recent Expenses" }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ExpensesContext>
  );
}

const styles = StyleSheet.create({});
