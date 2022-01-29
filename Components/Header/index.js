import { View, Text, Image } from "react-native";
import React from "react";

import styles from "./styles";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/choko2.jpg")}
      />
      <Image
        style={styles.menu}
        source={require("../../assets/images/choko6.jpg")}
      />
    </View>
  );
};

export default Header;
