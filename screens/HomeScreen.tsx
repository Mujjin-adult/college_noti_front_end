import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../App";

// 스플래쉬 화면
import Splash from "../components/splash/splash";

// 메인 콘텐츠
import MainContents from "@/components/maincontents/mainAll";

// 상단 탭바
import All from "@/components/topmenu/all";
import Header from "@/components/topmenu/header";
import Scrap from "@/components/topmenu/scrap";

// 하단 탭바
import BottomBar from "@/components/bottombar/bottombar";

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
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

    // 탭 인덱스에 따라 다른 화면으로 네비게이션
    switch (index) {
      case 0: // 공지사항
        // 이미 Home 화면이므로 아무것도 하지 않음
        break;
      case 1: // 관심공지
        navigation.navigate('Scrap');
        break;
      case 2: // AI 챗봇
        // TODO: AI 챗봇 화면 추가
        console.log('AI 챗봇 - 준비 중');
        break;
      case 3: // 검색
        navigation.navigate('Search');
        break;
      case 4: // 메뉴
        navigation.navigate('Setting');
        break;
    }
  };

  if (showSplash) {
    return <Splash />;
  }

  return (
    <View style={styles.container}>
      <Header />
      <All />
      <MainContents />
      <BottomBar onTabPress={handleTabPress} activeTab={0} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
