import React from "react";
import { StyleSheet, View } from "react-native";

import BottomBar from "../bottombar/bottombar";
import Header from "../header/header";
import MainContents from "../maincontents/maincontents";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <MainContents />
      <BottomBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
