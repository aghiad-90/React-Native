import React from "react";
import { StyleSheet, View, Animated } from "react-native";
import Config from "./config";

export default function Item({
  imageUri,
  heading,
  description,
  ScrollX,
  index,
}) {
  const inputRange = [
    (index - 1) * Config.width,
    index * Config.width,
    (index + 1) * Config.width,
  ];

  const inputRangeOpacity = [
    (index - 0.3) * Config.width,
    index * Config.width,
    (index + 0.3) * Config.width,
  ];

  const scale = ScrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });

  const opacity = ScrollX.interpolate({
    inputRange: inputRangeOpacity,
    outputRange: [0, 1, 0],
  });

  const translateHeadingX = ScrollX.interpolate({
    inputRange,
    outputRange: [Config.width * 0.1, 0, -Config.width * 0.1],
  });

  const translateDescripX = ScrollX.interpolate({
    inputRange,
    outputRange: [Config.width * 0.5, 0, -Config.width * 0.5],
  });

  return (
    <View style={styles.itemContainer}>
      <Animated.Image
        source={imageUri}
        style={[styles.image, { transform: [{ scale }] }]}
      />
      <View style={styles.textContainer}>
        <Animated.Text
          style={[
            styles.heading,
            { opacity, transform: [{ translateX: translateHeadingX }] },
          ]}
        >
          {heading}
        </Animated.Text>
        <Animated.Text
          style={[
            styles.description,
            { opacity, transform: [{ translateX: translateDescripX }] },
          ]}
        >
          {description}
        </Animated.Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: Config.width,
    height: Config.height,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: Config.width * 0.75,
    height: Config.height * 0.75,
    resizeMode: "contain",
    flex: 1,
  },
  textContainer: {
    position: "absolute",
    bottom: "20%",
    left: "20%",
    width: 300,
  },
  heading: {
    color: "#000",
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
  },
});
