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
import Colors from "./src/utils/colors";

export default function App() {
  const Tab = createBottomTabNavigator<TabsParams>();
  const Stack = createStackNavigator<StackParams>();

  function HandleTab() {
    return (
      <Tab.Navigator
        screenOptions={({ route, navigation }) => {
          const icon = () => {
            switch (route.name) {
              case "AllExpenses":
                return "alarm-outline";
              case "RecentExpenses":
                return "calendar-outline";
            }
          };

          return {
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
            tabBarActiveTintColor: Colors.others.grey,
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Ionicons
                  color={focused ? Colors.analogousPink[800] : "#888888"}
                  name={icon()}
                  size={size}
                ></Ionicons>
              );
            },
          };
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
              title: "Manage Expenses",
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
