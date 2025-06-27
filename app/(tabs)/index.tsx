import { useFonts } from "expo-font";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const [fontsLoaded] = useFonts({
    "Inter-Light": require("../../assets/fonts/Inter-Light.ttf"),
    "Inter-Bold": require("../../assets/fonts/Inter-Bold.ttf"),
  });
  const categories = [
    "학과",
    "학사",
    "장학",
    "취업",
    "교육",
    "창업",
    "행사",
    "기타",
  ];
  const navItems = [
    { type: "image", src: require("../../assets/images/article.png") },
    { type: "image", src: require("../../assets/images/check.png") },
    { type: "text", label: "로고" },
    { type: "image", src: require("../../assets/images/meal.png") },
    { type: "image", src: require("../../assets/images/menu.png") },
  ];
  const reverseNavItems = [
    { type: "image", src: require("../../assets/images/article2.png") },
    { type: "image", src: require("../../assets/images/check2.png") },
    { type: "text", label: "로고" },
    { type: "image", src: require("../../assets/images/meal2.png") },
    { type: "image", src: require("../../assets/images/menu2.png") },
  ];
  const [selected, setSelected] = useState("학과");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (!fontsLoaded) return null;

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {/* 헤더 영역 */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#bababa",
          paddingTop: 60,
          paddingBottom: 20,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontFamily: "Inter-Bold",
              fontSize: 30,
              textAlign: "center",
              marginLeft: 60,
            }}
          >
            띠링인캠퍼스
          </Text>
        </View>
        <Image
          source={require("../../assets/images/noti.png")}
          style={{
            width: 30,
            height: 30,
            marginRight: 30,
          }}
        />
      </View>

      {/* 탭 바 */}
      <View
        style={{
          position: "absolute",
          top: 116, // 헤더 바로 아래 위치
          left: 0,
          right: 0,
          zIndex: 10,
          backgroundColor: "#ffffff",
          borderBottomWidth: 1,
          borderBottomColor: "#bababa",
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
              height: 50,
            }}
          >
            {categories.map((category) => (
              <TouchableOpacity
                key={category}
                onPress={() => setSelected(category)}
              >
                <View
                  style={{
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    borderBottomWidth: selected === category ? 4 : 0,
                    borderBottomColor: "#bababa",
                  }}
                >
                  <Text
                    style={{
                      fontFamily:
                        selected === category ? "Inter-Bold" : "Inter-Light",
                      color: selected === category ? "black" : "#555",
                      fontSize: 16,
                    }}
                  >
                    {category}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* 본문 스크롤 콘텐츠 */}
      <ScrollView
        style={{ paddingTop: 40 }}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {[6, 5, 4, 3, 2].map((m) => (
          <View key={m} style={{ marginBottom: 0 }}>
            {/* 블록들 상단 날짜 텍스트 */}
            <Text
              style={{
                fontFamily: "Inter-Light",
                fontSize: 12,
                marginTop: 20,
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
                    borderRadius: 10,
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
      {/* 하단 탭바 */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 70,
          backgroundColor: "#bababa",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          borderTopWidth: 1,
          borderTopColor: "#bababa",
        }}
      >
        {/* 탭바 안 메뉴들 */}
        {navItems.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => setActiveIndex(index)}>
            {item.type === "image" ? (
              <Image
                source={
                  activeIndex === index && reverseNavItems[index]
                    ? reverseNavItems[index].src
                    : item.src
                }
                style={{
                  width: 30,
                  height: 30,
                  shadowColor: "#000",
                  shadowOffset: { width: 3, height: 3 },
                  shadowOpacity: 0.3,
                  shadowRadius: 1,
                }}
              />
            ) : (
              <Text style={{ fontSize: 16 }}>{item.label}</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
