import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import GiftItem from "../GiftItem";
import styles from "./styles";
import gift from "./gift";

const ChocolateList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={gift}
        renderItem={({ item }) => <GiftItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default ChocolateList;
