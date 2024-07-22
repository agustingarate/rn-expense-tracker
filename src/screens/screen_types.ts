import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type TabsParams = {
  AllExpenses: undefined;
  RecentExpenses: undefined;
};

export type AllExpensesProps = BottomTabScreenProps<TabsParams, "AllExpenses">;
export type RecentExpensesProps = BottomTabScreenProps<
  TabsParams,
  "RecentExpenses"
>;
