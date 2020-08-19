import React from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import Config from "./config";
import config from "./config";

export default function Circle({ data, scrollX }) {
  return (
    <View style={[styles.container, StyleSheet.absoluteFillObject]}>
      {data.map(({ color }, index) => {
        const inputRange = [
          (index - 0.55) * Config.width,
          index * Config.width,
          (index + 0.55) * Config.width,
        ];

        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0, 0.2, 0],
        });

        return (
          <Animated.View
            style={[
              styles.circle,
              { backgroundColor: color },
              { opacity },
              { transform: [{ scale }] },
            ]}
            key={index}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  circle: {
    width: config.CIRCLE_SIZE,
    height: Config.CIRCLE_SIZE,
    borderRadius: Config.CIRCLE_SIZE / 2,
    top: "25%",
    position: "absolute",
  },
});
