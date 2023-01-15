import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NavConfig from "./Navigation/NavConfig";

export default function App() {
  return (
    <>
      <NavConfig>
        <StatusBar style="auto" />
      </NavConfig>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
