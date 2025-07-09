import { useFonts } from "expo-font";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

export default function MainContents() {
  const [fontsLoaded] = useFonts({
    "Inter-Light": require("../../assets/fonts/Inter-Light.ttf"),
    "Inter-Bold": require("../../assets/fonts/Inter-Bold.ttf"),
  });

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
                fontFamily: "Inter-Light",
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
              {[
                "대학혁신지원사업 전공 소모임 모집 안내",
                "공지 2",
                "공지 3",
              ].map((title, i) => (
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
                    <Text style={{ fontFamily: "Inter-Light", fontSize: 15 }}>
                      {title}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 6,
                      }}
                    >
                      <Text style={{ fontFamily: "Inter-Light", fontSize: 10 }}>
                        2025-0{m}-28
                      </Text>
                      <Text
                        style={{
                          fontFamily: "Inter-Light",
                          fontSize: 10,
                          color: "#ffffff",
                          marginLeft: 8,
                          paddingHorizontal: 4,
                          paddingVertical: 1,
                          borderRadius: 4,
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
