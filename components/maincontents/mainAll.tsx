// @ts-ignore

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Image,
  RefreshControl,
  ScrollView,
  Share,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { getNotices, Notice } from "../../services/crawlerAPI";

// 목데이터 (API 실패 시 사용)
const MOCK_NOTICES: Notice[] = [
  {
    id: "mock-1",
    title: "[학사] 2025학년도 1학기 수강신청 안내",
    content: "2025학년도 1학기 수강신청 일정 및 유의사항을 안내드립니다.\n\n1. 수강신청 기간: 2025.02.24(월) ~ 02.28(금)\n2. 수강정정 기간: 2025.03.03(월) ~ 03.07(금)\n\n자세한 내용은 학사공지를 확인해주세요.",
    categoryCode: "학사",
    publishedAt: new Date().toISOString(),
    viewCount: 1234,
    isImportant: true,
    author: "학사팀",
    url: "https://www.inu.ac.kr/ite/3472/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGaXRlJTJGMzczJTJGNDE0OTAxJTJGYXJ0Y2xWaWV3LmRvJTNG",
  },
  {
    id: "mock-2",
    title: "[장학금] 2025-1학기 교내장학금 신청 안내",
    content: "2025학년도 1학기 교내장학금 신청 안내입니다.\n\n신청기간: 2025.02.17(월) ~ 02.21(금)\n신청방법: 포털시스템 > 장학금 신청",
    categoryCode: "장학금",
    publishedAt: new Date(Date.now() - 86400000).toISOString(), // 하루 전
    viewCount: 856,
    isImportant: false,
    author: "장학팀",
    url: "https://www.inu.ac.kr/ite/3472/subview.do",
  },
  {
    id: "mock-3",
    title: "[일반] 2025년 캠퍼스 축제 자원봉사자 모집",
    content: "2025년 봄 캠퍼스 축제 자원봉사자를 모집합니다.\n\n모집기간: 2025.03.01 ~ 03.15\n활동기간: 2025.05.15 ~ 05.17",
    categoryCode: "일반/행사/모집",
    publishedAt: new Date(Date.now() - 172800000).toISOString(), // 이틀 전
    viewCount: 423,
    isImportant: false,
    author: "학생처",
  },
];

interface MainContentsProps {
  category?: string;
  onCategoriesExtracted?: (categories: string[]) => void;
}

export default function MainContents({ category, onCategoriesExtracted }: MainContentsProps) {
  const [fontsLoaded] = useFonts({
    "Pretendard-Bold": require("../../assets/fonts/Pretendard-Bold.ttf"),
    "Pretendard-ExtraBold": require("../../assets/fonts/Pretendard-ExtraBold.ttf"),
    "Pretendard-ExtraLight": require("../../assets/fonts/Pretendard-ExtraLight.ttf"),
    "Pretendard-Light": require("../../assets/fonts/Pretendard-Light.ttf"),
    "Pretendard-Regular": require("../../assets/fonts/Pretendard-Regular.ttf"),
  });

  const navi = useNavigation();
  const [readTitles, setReadTitles] = useState<string[]>([]);
  const [bookmarkedItems, setBookmarkedItems] = useState<string[]>([]);
  const swipeRefs = useRef<{ [key: string]: Swipeable | null }>({});
  const [allNotices, setAllNotices] = useState<Notice[]>([]); // 전체 공지사항
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  // 전체 공지사항 데이터 가져오기
  const fetchNotices = async () => {
    setIsLoading(true);
    try {
      const result = await getNotices(1, 100); // 카테고리 없이 전체 조회
      if (result.success && result.data.length > 0) {
        setAllNotices(result.data);

        // 실제 존재하는 카테고리 추출
        const uniqueCategories = Array.from(
          new Set(
            result.data
              .map((notice: Notice) => notice.categoryCode || notice.category)
              .filter(Boolean) // null/undefined 제거
          )
        ) as string[];

        // 카테고리 목록을 상위 컴포넌트로 전달
        onCategoriesExtracted?.(uniqueCategories);
      } else {
        // API 실패 또는 데이터 없음 - 목데이터 사용
        console.warn("공지사항 조회 실패, 목데이터 사용:", result.message);
        setAllNotices(MOCK_NOTICES);

        // 목데이터에서 카테고리 추출
        const mockCategories = Array.from(
          new Set(MOCK_NOTICES.map((n) => n.categoryCode).filter(Boolean))
        ) as string[];
        onCategoriesExtracted?.(mockCategories);
      }
    } catch (error) {
      // 오류 발생 시 목데이터 사용
      console.error("공지사항 조회 오류, 목데이터 사용:", error);
      setAllNotices(MOCK_NOTICES);

      const mockCategories = Array.from(
        new Set(MOCK_NOTICES.map((n) => n.categoryCode).filter(Boolean))
      ) as string[];
      onCategoriesExtracted?.(mockCategories);
    } finally {
      setIsLoading(false);
    }
  };

  // 카테고리별로 필터링된 공지사항
  const notices = category
    ? allNotices.filter(notice =>
        notice.categoryCode === category || notice.category === category
      )
    : allNotices;

  // 새로고침
  const onRefresh = async () => {
    setRefreshing(true);
    await fetchNotices();
    setRefreshing(false);
  };

  // 앱 시작 시 읽은 목록과 북마크 목록 불러오기 + 공지사항 불러오기
  useEffect(() => {
    const loadData = async () => {
      const storedRead = await AsyncStorage.getItem("readTitles");
      if (storedRead) {
        setReadTitles(JSON.parse(storedRead));
      }

      const storedBookmarks = await AsyncStorage.getItem("bookmarkedItems");
      if (storedBookmarks) {
        setBookmarkedItems(JSON.parse(storedBookmarks));
      }

      // 전체 공지사항 불러오기 (1회만)
      await fetchNotices();
    };
    loadData();
  }, []);

  // 읽은 제목 추가 + 저장
  const handleTitlePress = async (notice: Notice) => {
    try {
      if (!readTitles.includes(notice.id)) {
        const updated = [...readTitles, notice.id];
        setReadTitles(updated);
        await AsyncStorage.setItem("readTitles", JSON.stringify(updated));
      }
      (navi as any).navigate("detail", { notice });
    } catch (error) {
      console.error("제목 클릭 처리 중 오류:", error);
    }
  };

  const handleBookmark = async (uniqueKey: string) => {
    try {
      let updatedBookmarks;

      if (bookmarkedItems.includes(uniqueKey)) {
        // 북마크 제거
        updatedBookmarks = bookmarkedItems.filter((key) => key !== uniqueKey);
        alert("북마크에서 제거되었습니다.");
      } else {
        // 북마크 추가
        updatedBookmarks = [...bookmarkedItems, uniqueKey];
        alert("북마크에 추가되었습니다.");
      }

      setBookmarkedItems(updatedBookmarks);
      await AsyncStorage.setItem(
        "bookmarkedItems",
        JSON.stringify(updatedBookmarks)
      );
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

  const swipe = (title: string, uniqueKey: string) => {
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
            handleBookmark(uniqueKey);
          }}
        >
          <Image
            source={
              bookmarkedItems.includes(uniqueKey)
                ? require("../../assets/images/bookmark2.png")
                : require("../../assets/images/bookmark.png")
            }
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

  // 날짜별로 그룹화
  const groupedNotices: { [key: string]: Notice[] } = {};
  notices.forEach((notice) => {
    const dateStr = notice.publishedAt || notice.date || new Date().toISOString();
    const date = new Date(dateStr).toISOString().split("T")[0]; // YYYY-MM-DD
    if (!groupedNotices[date]) {
      groupedNotices[date] = [];
    }
    groupedNotices[date].push(notice);
  });

  const dates = Object.keys(groupedNotices).sort((a, b) => b.localeCompare(a)); // 최신 날짜순

  // 첫 로딩 중일 때만 로딩 화면 표시
  if (isLoading && allNotices.length === 0) {
    return (
      <View style={{ flex: 1, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#3366FF" />
        <Text style={{ fontFamily: "Pretendard-Regular", fontSize: 14, marginTop: 10 }}>
          공지사항을 불러오는 중...
        </Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 0 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
          {dates.map((date) => {
            return (
              <View key={date}>
                <Text
                  style={{
                    fontFamily: "Pretendard-Light",
                    fontSize: 12,
                    marginTop: 10,
                    marginBottom: 0,
                    marginLeft: 15,
                  }}
                >
                  {date}
                </Text>

                <View
                  style={{
                    gap: 10,
                    marginTop: 10,
                    paddingHorizontal: 15,
                    overflow: "visible",
                  }}
                >
                  {groupedNotices[date].map((notice, i) => {
                    const swipeKey = `${notice.id}`;
                    return (
                      <Swipeable
                        key={swipeKey}
                        renderRightActions={() => swipe(notice.title, swipeKey)}
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
                        <TouchableOpacity onPress={() => handleTitlePress(notice)}>
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
                            <View style={{ flex: 1 }}>
                              <View style={{ flexDirection: "row", alignItems: "center" }}>
                                {notice.isImportant && (
                                  <Text
                                    style={{
                                      fontFamily: "Pretendard-Bold",
                                      fontSize: 12,
                                      color: "#FF3B30",
                                      marginRight: 4,
                                    }}
                                  >
                                    [중요]
                                  </Text>
                                )}
                                <Text
                                  style={{
                                    color: readTitles.includes(notice.id)
                                      ? "#909090"
                                      : "#000000",
                                    fontFamily: "Pretendard-Light",
                                    fontSize: 15,
                                    flex: 1,
                                  }}
                                  numberOfLines={1}
                                >
                                  {notice.title}
                                </Text>
                              </View>
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
                                  {new Date(notice.publishedAt || notice.date || new Date()).toLocaleDateString("ko-KR")}
                                </Text>
                                {(notice.categoryCode || notice.category) && (
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
                                    {notice.categoryCode || notice.category}
                                  </Text>
                                )}
                              </View>
                            </View>

                            <TouchableOpacity
                              onPress={(e) => {
                                e.stopPropagation();
                                handleBookmark(swipeKey);
                              }}
                              style={{
                                padding: 10,
                              }}
                            >
                              <Image
                                source={
                                  bookmarkedItems.includes(swipeKey)
                                    ? require("../../assets/images/bookmark2.png")
                                    : require("../../assets/images/bookmark.png")
                                }
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

        {notices.length === 0 && !isLoading && (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 100 }}>
            <Text style={{ fontFamily: "Pretendard-Light", fontSize: 16, color: "#999" }}>
              공지사항이 없습니다
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
