import { StyleSheet, View } from "react-native";
import React from "react";
import { ExpensesList, ExpensesSummary } from "./Index";
import { DUMMY_EXPENSES } from "../../constants/dummy";
import { GlobalStyles } from "../../constants/styles";

const colors = GlobalStyles.colors;
const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary
        expenses={DUMMY_EXPENSES}
        expensesPeriod={expensesPeriod}
      />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        paddingBottom: 0,
        paddingHorizontal: 24,
        paddingTop: 24,
        backgroundColor: colors.primary700,
        flex: 1
    }
});
