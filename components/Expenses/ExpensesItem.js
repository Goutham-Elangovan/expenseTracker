import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../helpers/date";

const colors = GlobalStyles.colors;
const ExpensesItem = ({ description, date, amount }) => {
  const handlePress = () => null;
  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => pressed && styles.isPressed}
    >
      <View style={styles.expenseItemContainer}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amountText}>${amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpensesItem;

const styles = StyleSheet.create({
  expenseItemContainer: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 70,
  },
  amountText: {
    color: colors.primary500,
    fontWeight: "bold",
  },
  isPressed: {
    opacity: 0.75,
  },
});
