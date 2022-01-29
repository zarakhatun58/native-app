import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./Components/Home";
import Pictures from "./Components/Pictures";
import Chocolate from './Components/Chocolate';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Hi This is my First Project in React Native</Text>
      <StatusBar style="auto" />
      <Home />
      <Pictures />
      <Chocolate/>
    </View>
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
