import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

// 메인 콘텐츠
import Setting from "@/components/maincontents/setting";

// 상단 탭바
import Header from "@/components/topmenu/header";

// 하단 탭바
import BottomBar from "@/components/bottombar/bottombar";

export default function SettingScreen() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabPress = (index: number) => {
    setActiveTab(index);
  };

  return (
    <View style={styles.container}>
      <Header />
      <Setting />
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
