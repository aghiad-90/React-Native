import React from "react";
import { StyleSheet, Animated, Text, View } from "react-native";
import Config from "./config";
const TICKER_HEIGHT = 40;

export default function Ticker({ data, scrollX }) {
  const inputRange = [-Config.width, 0, Config.width];
  const translateY = scrollX.interpolate({
    inputRange,
    outputRange: [TICKER_HEIGHT, 0, -TICKER_HEIGHT],
  });
  return (
    <View style={styles.TickerContainer}>
      <Animated.View style={{ transform: [{ translateY }] }}>
        {data.map(({ type }, index) => (
          <Text key={index} style={[styles.Text]}>
            {type}
          </Text>
        ))}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  TickerContainer: {
    position: "absolute",
    top: 40,
    left: 20,
    height: TICKER_HEIGHT,
    overflow: "hidden",
  },
  Text: {
    fontSize: TICKER_HEIGHT,
    fontWeight: "800",
    lineHeight: TICKER_HEIGHT,
  },
});
