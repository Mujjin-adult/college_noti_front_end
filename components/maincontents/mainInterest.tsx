// @ts-ignore

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  ScrollView,
  Share,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";

export default function MainContents() {
  const [fontsLoaded] = useFonts({
    "Pretendard-Bold": require("../../assets/fonts/Pretendard-Bold.ttf"),
    "Pretendard-ExtraBold": require("../../assets/fonts/Pretendard-ExtraBold.ttf"),
    "Pretendard-ExtraLight": require("../../assets/fonts/Pretendard-ExtraLight.ttf"),
    "Pretendard-Light": require("../../assets/fonts/Pretendard-Light.ttf"),
    "Pretendard-Regular": require("../../assets/fonts/Pretendard-Regular.ttf"),
  });

  const noticeTitles = [
    "대학혁신지원사업 전공 소모임 모집 안내",
    "INU 나노 디그리 교육과정 안내",
    "25-2학기 파견 교환학생 선발 공고",
  ];

  const navi = useNavigation();
  const [readTitles, setReadTitles] = useState<string[]>([]); //이해가 안감
  const [bookmarkedTitles, setBookmarkedTitles] = useState<string[]>([]);
  const swipeRefs = useRef<{ [key: string]: Swipeable | null }>({});

  // 앱 시작 시 읽은 목록과 북마크 목록 불러오기
  useEffect(() => {
    const loadData = async () => {
      const storedRead = await AsyncStorage.getItem("readTitles");
      if (storedRead) {
        setReadTitles(JSON.parse(storedRead));
      }
      
      const storedBookmarks = await AsyncStorage.getItem("bookmarkedTitles");
      if (storedBookmarks) {
        setBookmarkedTitles(JSON.parse(storedBookmarks));
      }
    };
    loadData();
  }, []);

  // 읽은 제목 추가 + 저장
  const handleTitlePress = async (title: string) => {
    try {
      if (!readTitles.includes(title)) {
        const updated = [...readTitles, title];
        setReadTitles(updated);
        await AsyncStorage.setItem("readTitles", JSON.stringify(updated));
      }
      (navi as any).navigate("notice/detail", { title });
    } catch (error) {
      console.error("제목 클릭 처리 중 오류:", error);
    }
  };

const handleBookmark = async (title: string) => {
  try {
    let updatedBookmarks;
    
    if (bookmarkedTitles.includes(title)) {
      // 북마크 제거
      updatedBookmarks = bookmarkedTitles.filter(t => t !== title);
      alert("북마크에서 제거되었습니다.");
    } else {
      // 북마크 추가
      updatedBookmarks = [...bookmarkedTitles, title];
      alert("북마크에 추가되었습니다.");
    }
    
    setBookmarkedTitles(updatedBookmarks);
    await AsyncStorage.setItem("bookmarkedTitles", JSON.stringify(updatedBookmarks));
  } catch (error) {
    console.error("북마크 처리 중 오류:", error);
  }
};

  // 공유 탭 띄우기 함수
  const handleShare = async (title: string) => {
    try {
      await Share.share({
        message: `${title}\n\n띠링인캠퍼스에서 확인하세요!`,
        title: title,
      });
    } catch (error) {
      console.error("공유 오류:", error);
    }
  };

  const swipe = (title: string) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: "#ffffff",
          justifyContent: "center",
          alignItems: "center",
          width: 80,
          borderRadius: 12,
          marginRight: 0,
        }}
        onPress={() => handleShare(title)}
      >
        {/* 북마크 아이콘 */}
        <TouchableOpacity 
          style={{
            zIndex: 10,
            elevation: 10,
            position: "relative",
          }}
          onPress={(e) => {
            e.stopPropagation();
            handleBookmark(title);
          }}
        >
          <Image
            source={bookmarkedTitles.includes(title) 
              ? require("../../assets/images/bookmark2.png") 
              : require("../../assets/images/bookmark.png")}
            style={{
              width: 20,
              height: 20,
              tintColor: "white",
              resizeMode: "contain",
            }}
          />
        </TouchableOpacity>
        {/* 공유하기 버튼 */}
        <Image
          source={require("../../assets/images/export.png")}
          style={{
            width: 27,
            height: 27,
            resizeMode: "contain",
            marginBottom: 25,
          }}
        />
      </TouchableOpacity>
    );
  };

  if (!fontsLoaded) return null;

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 0 }}>
        {[6, 5, 4, 3, 2].map((m) => {
          return (
            <View key={m}>
              <Text
                style={{
                  fontFamily: "Pretendard-Light",
                  fontSize: 12,
                  marginTop: 10,
                  marginBottom: 0,
                  marginLeft: 15,
                }}
              >
                2025-0{m}
              </Text>

              <View
                style={{
                  gap: 10,
                  marginTop: 10,
                  paddingHorizontal: 15,
                  overflow: "visible",
                }}
              >
                {noticeTitles.map((title, i) => {
                  const swipeKey = `${m}-${title}`;
                  return (
                    <Swipeable
                      key={swipeKey}
                      renderRightActions={() => swipe(title)}
                      containerStyle={{ overflow: "visible" }}
                      friction={0.7}
                      rightThreshold={40}
                      onSwipeableWillOpen={() => {
                        // 다른 모든 열린 스와이프를 닫기
                        Object.keys(swipeRefs.current).forEach((key) => {
                          if (key !== swipeKey && swipeRefs.current[key]) {
                            swipeRefs.current[key]?.close();
                          }
                        });
                      }}
                      ref={(ref) => {
                        swipeRefs.current[swipeKey] = ref;
                      }}
                    >
                    <TouchableOpacity onPress={() => handleTitlePress(title)}>
                      <View
                        style={{
                          width: "100%",
                          height: 80,
                          backgroundColor: "#ffffff",
                          borderRadius: 12,
                          paddingHorizontal: 20,
                          paddingVertical: 12,
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                          elevation: 4,
                          marginHorizontal: 2,
                          marginVertical: 2,
                        }}
                      >
                        <View>
                          <Text
                            style={{
                              color: readTitles.includes(title)
                                ? "#909090"
                                : "#000000",
                              fontFamily: "Pretendard-Light",
                              fontSize: 15,
                            }}
                          >
                            {title}
                          </Text>
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                              marginTop: 6,
                            }}
                          >
                            <Text
                              style={{
                                fontFamily: "Pretendard-Light",
                                fontSize: 10,
                              }}
                            >
                              2025-0{m}-28
                            </Text>
                            <Text
                              style={{
                                fontFamily: "Pretendard-Light",
                                fontSize: 12,
                                color: "#ffffff",
                                marginLeft: 8,
                                paddingHorizontal: 4,
                                paddingTop: 1,
                                paddingBottom: 1,
                                lineHeight: 14,
                                borderRadius: 5,
                                backgroundColor: "#8e8e8e",
                              }}
                            >
                              전공
                            </Text>
                          </View>
                        </View>

                        <TouchableOpacity
                          onPress={(e) => {
                            e.stopPropagation();
                            handleBookmark(title);
                          }}
                          style={{
                            padding: 10,
                          }}
                        >
                          <Image
                            source={bookmarkedTitles.includes(title) 
                              ? require("../../assets/images/bookmark2.png") 
                              : require("../../assets/images/bookmark.png")}
                            style={{
                              width: 24,
                              height: 24,
                              resizeMode: "contain",
                            }}
                          />
                        </TouchableOpacity>
                      </View>
                    </TouchableOpacity>
                  </Swipeable>
                  );
                })}
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
