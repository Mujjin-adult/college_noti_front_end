import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import Splash from "../../components/splash/splash";
import MainContents from "@/components/maincontents/mainInterest";
import BottomBar from "@/components/bottombar/bottombar";
import HeaderAll from "@/components/header/headerAll";
import HeaderScrap from "@/components/header/headerScrap";

export default function HomeScreen() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState<number>(0); // 0: 공지사항, 1: 관심공지

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // 3초 후 스플래쉬에서 메인으로 전환

    return () => clearTimeout(timer);
  }, []);

  const handleTabPress = (index: number) => {
    setActiveTab(index);
  };

  if (showSplash) {
    return <Splash />;
  }

  return (
    <View style={styles.container}>
      {activeTab === 1 ? <HeaderScrap /> : <HeaderAll />}
      <MainContents />
      <BottomBar onTabPress={handleTabPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
