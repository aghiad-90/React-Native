import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const DOT_SIZE = 40;
const TICKER_HEIGHT = 40;
const CIRCLE_SIZE = width * 0.6;

export default {
  width,
  height,
  DOT_SIZE,
  TICKER_HEIGHT,
  CIRCLE_SIZE,
};
