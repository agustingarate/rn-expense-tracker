import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type TabsParams = {
  AllExpenses: undefined;
  RecentExpenses: undefined;
};

export type StackParams = {
  ManageExpenses: {
    mode: "edit" | "add";
    id?: string;
  };
  Tab: undefined;
};

//Navigation props

export type ManageExpensesProps = NativeStackScreenProps<
  StackParams,
  "ManageExpenses"
>;
export type AllExpensesProps = BottomTabScreenProps<TabsParams, "AllExpenses">;
export type RecentExpensesProps = BottomTabScreenProps<
  TabsParams,
  "RecentExpenses"
>;
