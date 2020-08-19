import React from "react";
import { StyleSheet, Image } from "react-native";

const LOGO_WIDTH = 220;
const LOGO_HEIGHT = 40;

export default function Logo() {
  return (
    <Image
      style={[styles.logo]}
      source={require("../assets/ue_black_logo.png")}
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    position: "absolute",
    left: 10,
    bottom: 10,
    height: LOGO_HEIGHT,
    width: LOGO_WIDTH,
    resizeMode: "contain",
    transform: [
      { translateX: -LOGO_WIDTH / 2 },
      { translateY: -LOGO_HEIGHT / 2 },
      { rotateZ: "-90deg" },
      { translateX: LOGO_WIDTH / 2 },
      { translateY: LOGO_HEIGHT / 2 },
    ],
  },
});
