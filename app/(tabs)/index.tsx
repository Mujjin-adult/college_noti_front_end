import React from "react";
import { StyleSheet, View } from "react-native";

import Splash from "../../components/splash/splash";
import MainContents from "@/components/maincontents/maincontents";
import BottomBar from "@/components/bottombar/bottombar";
import HeaderScript from "@/components/header/headerScrap";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* <HeaderMaj />
      <MainContents />
      <BottomBar /> */}
      {/* <Splash /> */}
      <HeaderScript />
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
