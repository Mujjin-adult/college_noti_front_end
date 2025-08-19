import React from "react";
import { StyleSheet, View } from "react-native";

import Splash from "../../components/splash/splash";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* <Header />
      <MainContents />
      <BottomBar /> */}
      <Splash />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
