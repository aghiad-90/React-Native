import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Animated, Dimensions } from "react-native";
import data from "./components/data";

import Circle from "./components/Circle";
import Item from "./components/item";
import Logo from "./components/Logo";
import Pagination from "./components/Pagination";
import Ticker from "./components/Ticker";

const { width, height } = Dimensions.get("window");

const DOT_SIZE = 40;
const TICKER_HEIGHT = 40;
const CIRCLE_SIZE = width * 0.6;

export default function App() {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <Circle scrollX={scrollX} data={data} />
      <Animated.FlatList
        data={data}
        keyExtractor={(item) => item.key}
        renderItem={({ item, index }) => (
          <Item {...item} index={index} ScrollX={scrollX} />
        )}
        horizontal
        pagingEnabled //to show only one element in one view
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
      />
      <Ticker scrollX={scrollX} data={data} />
      <Logo />
      <Pagination data={data} scrollX={scrollX} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
