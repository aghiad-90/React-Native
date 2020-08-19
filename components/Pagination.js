import React from "react";
import { StyleSheet, View, Animated } from "react-native";
import config from "./config";

export default function Pagination({ data, scrollX }) {
  const inputRange = [-config.width, 0, config.width];
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: [-30, 0, 30],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.paginationIndicator, { transform: [{ translateX }] }]}
      />
      {data.map(({ color }, index) => {
        return (
          <View key={index} style={styles.DotContainer}>
            <View style={[styles.dot, { backgroundColor: color }]} />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    position: "absolute",
    bottom: "10%",
    left: "50%",
    justifyContent: "center",
  },
  DotContainer: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  paginationIndicator: {
    width: 30,
    height: 30,
    borderRadius: 15,
    position: "absolute",

    left: 0,
    borderWidth: 2,
    borderColor: "#ddd",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
  },
});
