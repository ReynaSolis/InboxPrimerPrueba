import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../assets/colors";

const BottomTabContainer = (props) => {
  return <View style={styles.container}>{props.children}</View>;
};

export default BottomTabContainer;

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
});
