import { useFonts } from "expo-font";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

export default function MainContents() {
  const [fontsLoaded] = useFonts({
    "Pretendard-Bold": require("../../assets/fonts/Pretendard-Bold.ttf"),
    "Pretendard-ExtraBold": require("../../assets/fonts/Pretendard-ExtraBold.ttf"),
    "Pretendard-ExtraLight": require("../../assets/fonts/Pretendard-ExtraLight.ttf"),
    "Pretendard-Light": require("../../assets/fonts/Pretendard-Light.ttf"),
    "Pretendard-Regular": require("../../assets/fonts/Pretendard-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  const noticeTitles = [
    "대학혁신지원사업 전공 소모임 모집 안내",
    "INU 나노 디그리 교육과정 안내",
    "25-2학기 파견 교환학생 선발 공고",
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {/* 본문 스크롤 콘텐츠 */}
      <ScrollView
        style={{ paddingTop: 0 }}
        contentContainerStyle={{ paddingBottom: 0 }}
      >
        {[6, 5, 4, 3, 2].map((m) => (
          <View key={m} style={{ marginBottom: 0 }}>
            {/* 블록들 상단 날짜 텍스트 */}
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

            {/* 아래에 공지 블록 요소들 */}
            <View
              style={{
                gap: 10,
                marginTop: 10,
                paddingHorizontal: 15,
              }}
            >
              {noticeTitles.map((title, i) => (
                <View
                  key={i}
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

                    shadowColor: "#000",
                    shadowOffset: { width: 2, height: 2 },
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                    elevation: 4,
                  }}
                >
                  {/* 공지 블록 안 왼쪽 텍스트 묶음 */}
                  <View>
                    {/* ✅ 공지 제목만 Text로 분리 */}
                    <Text
                      style={{ fontFamily: "Pretendard-Light", fontSize: 15 }}
                    >
                      {title}
                    </Text>
                    {/* 날짜 */}
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 6,
                      }}
                    >
                      <Text
                        style={{ fontFamily: "Pretendard-Light", fontSize: 10 }}
                      >
                        2025-0{m}-28
                      </Text>
                      {/* 태그 */}
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

                  {/* 블록 안 오른쪽 북마크 이미지 */}
                  <Image
                    source={require("../../assets/images/bookmark.png")}
                    style={{
                      width: 24,
                      height: 24,
                    }}
                  />
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
