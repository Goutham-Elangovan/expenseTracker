import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { getSumOfExpenses } from "../../helpers/ExpensesHelpers";
import { GlobalStyles } from "../../constants/styles";

const colors = GlobalStyles.colors;
const ExpensesSummary = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.expensesPeriod}>{expensesPeriod}</Text>
      <Text style={styles.sum}>${getSumOfExpenses(expenses).toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  expensesPeriod: {
    fontSize: 12,
    color: colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary500,
  },
});
