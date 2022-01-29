import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Image } from "react-native-web";

export default function Pictures() {
  return (
    <View>
      <Text>All pictures are there</Text>
      <Image
        style={styles.pic1}
        source={{
          uri: "https://i.ibb.co/4Jd86pf/pic1.jpg",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pic1: {
    width: "200px",
  },
});
