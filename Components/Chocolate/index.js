import { View, Text } from "react-native";
import React from "react";

export default function Chocolate() {
  return (
    <View>
      <Text style={styles.container}>Chocolates Fav</Text>
      <Text> We love to eat chocolates</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "300px",
    backgroundColor: "yellow",
  },
});
