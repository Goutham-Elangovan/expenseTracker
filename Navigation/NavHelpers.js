import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecentExpenses from "../screens/RecentExpenses";
import AllExpenses from "../screens/AllExpenses";
import { GlobalStyles } from "../constants/styles";
import { Ionicons } from "@expo/vector-icons";
import AddButton from "../components/Buttons/AddButton";

const BottomTabs = createBottomTabNavigator();
const colors = GlobalStyles.colors;

const screenOptions = ({navigation}) => ({ //Inorder to use "navigation" prop here, react navigation allows us to use it as a prop here, rather than using useNavigation hook here and then using navigate function to navigate.
  headerStyle: { backgroundColor: colors.primary500 },
  headerTintColor: "white",
  tabBarStyle: { backgroundColor: colors.primary500 },
  tabBarActiveTintColor: colors.accent500,
  //React navigation provides access to "headerTintColor to use inside screenOptions, you can use this inside functions by destructuring it like ({tintColor}). tintColor is the prop"
  headerRight: ({ tintColor }) => (
    <AddButton
      iconName="add"
      size={24}
      color={tintColor}
      onPress={() => navigation.navigate('ManageExpense')}
    />
  ),
});

const recentExpenseOptions = {
  title: "Recent Expenses",
  tabBarLabel: "Recent",
  tabBarIcon: ({ size, color }) => (
    <Ionicons name="hourglass" size={size} color={color} />
  ),
};

const allExpenseOptions = {
  title: "All Expenses",
  tabBarLabel: "All Expenses",
  tabBarIcon: ({ size, color }) => (
    <Ionicons name="calendar" size={size} color={color} />
  ),
};

export const ExpensesOverview = () => {
  return (
    <BottomTabs.Navigator screenOptions={screenOptions}>
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={recentExpenseOptions}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={allExpenseOptions}
      />
    </BottomTabs.Navigator>
  );
};
