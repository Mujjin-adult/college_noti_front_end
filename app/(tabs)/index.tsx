import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

// 스플래쉬 화면
import Splash from "../../components/splash/splash";

// 메인 콘텐츠
import Detail from "@/components/maincontents/detail";
import MainContents from "@/components/maincontents/mainAll";
import Search from "@/components/maincontents/search";
import EmptyScrap from "@/components/maincontents/emptyScrap";

// 상단 탭바
import All from "@/components/topmenu/all";
import Header from "@/components/topmenu/header";
import Scrap from "@/components/topmenu/scrap";
import Alert from "@/components/maincontents/alert";

// 하단 탭바
import BottomBar from "@/components/bottombar/bottombar";

export default function HomeScreen() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState<number>(0); // 0: 공지사항, 1: 관심공지
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [previousComponent, setPreviousComponent] = useState<'main' | 'detail'>('main');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // 3초 후 스플래쉬에서 메인으로 전환

    return () => clearTimeout(timer);
  }, []);

  const handleTabPress = (index: number) => {
    setActiveTab(index);
  };

  const handleAlertToggle = () => {
    if (!showAlert) {
      // 알림 페이지로 이동할 때, 현재 상태 저장
      setPreviousComponent('detail'); // 현재 Detail 화면을 기억
    }
    setShowAlert(!showAlert);
  };

  const handleBackPress = () => {
    // Detail 페이지에서 뒤로 가기 버튼을 눌렀을 때의 로직
    // 여기서는 단순히 아무것도 하지 않거나 특정 동작을 정의할 수 있습니다
    console.log("Back button pressed from Detail page");
  };

  if (showSplash) {
    return <Splash />;
  }

  return (
    <View style={styles.container}>
      {/* emptyScrap */}
      {/* <Header />
      <Scrap />
      <EmptyScrap />
      <BottomBar onTabPress={handleTabPress} /> */}

      {/* 메인 페이지 */}
      {/* <Header />
      {activeTab === 1 ? <Scrap /> : <All />}
      <MainContents />
      <BottomBar onTabPress={handleTabPress} /> */}

      {/* 검색 페이지 */}
      <Header />
      <Search />
      <BottomBar onTabPress={handleTabPress} />

      {/* 공지 상세 화면 */}
      {/* <Header showBackButton={true} />
      {activeTab === 1 ? <Scrap /> : <All />}
      <Detail />
      <BottomBar onTabPress={handleTabPress} /> */}

      {/* alert 페이지 조건부 렌더링 */}
      {/* {showAlert ? (
        <>
          <Header showBackButton={true} onAlertToggle={handleAlertToggle} onBackPress={handleBackPress} />
          <Alert />
          <BottomBar onTabPress={handleTabPress} />
        </>
      ) : (
        <>
          <Header showBackButton={true} onAlertToggle={handleAlertToggle} onBackPress={handleBackPress} />
          {activeTab === 1 ? <Scrap /> : <All />}
          <Detail />
          <BottomBar onTabPress={handleTabPress} />
        </>
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
