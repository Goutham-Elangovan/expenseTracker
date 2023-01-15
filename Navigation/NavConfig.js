import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ExpensesOverview } from "./NavHelpers";

import ManageExpense from "../screens/ManageExpense";

const Stack = createNativeStackNavigator();

const NavConfig = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ExpensesOverview">
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="ManageExpense" component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default NavConfig;
