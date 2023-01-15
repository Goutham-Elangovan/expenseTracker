import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { ExpensesItem } from "./Index";

const renderExpenseItem = (data) => {
  return <ExpensesItem {...data.item} />;
};

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;

const styles = StyleSheet.create({});
