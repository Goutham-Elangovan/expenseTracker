//To calculate total amount
export const getSumOfExpenses = (expenses) => {
  let total = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return total;
};
