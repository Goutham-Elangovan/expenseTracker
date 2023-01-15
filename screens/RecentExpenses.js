import { StyleSheet } from "react-native";
import React from "react";
import { ExpensesOutput } from "../components/Expenses/Index";

const RecentExpenses = () => {
  return <ExpensesOutput expensesPeriod="Last 7 Days" />;
};

export default RecentExpenses;

const styles = StyleSheet.create({});
