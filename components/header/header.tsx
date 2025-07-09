import { useFonts } from "expo-font";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Header() {
  const [fontsLoaded] = useFonts({
    "Pretendard-Bold": require("../../assets/fonts/Pretendard-Bold.ttf"),
    "Pretendard-ExtraBold": require("../../assets/fonts/Pretendard-ExtraBold.ttf"),
    "Pretendard-ExtraLight": require("../../assets/fonts/Pretendard-ExtraLight.ttf"),
    "Pretendard-Light": require("../../assets/fonts/Pretendard-Light.ttf"),
    "Pretendard-Regular": require("../../assets/fonts/Pretendard-Regular.ttf"),
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

  const [selected, setSelected] = useState("학과");

  if (!fontsLoaded) return null;

  return (
    <View
      style={{
        width: "100%",
        height: 160,
        backgroundColor: "white",
      }}
    >
      {/* 헤더 영역 */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#3366FF",
          paddingTop: 60,
          paddingBottom: 10,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text
            style={{
              color: "#FFFFFF",
              fontFamily: "Pretendard-SemiBold",
              fontSize: 20,
              textAlign: "center",
              marginLeft: 60,
            }}
          >
            띠링인캠퍼스
          </Text>
        </View>
        <Image
          source={require("../../assets/images/종.png")}
          style={{
            width: 22,
            height: 27,
            marginRight: 30,
          }}
        />
      </View>

      {/* 탭 바 (크기 고정) */}
      <View
        style={{
          width: "100%",
          height: 47, // 탭 바 높이
          backgroundColor: "#ffffff",
          borderBottomWidth: 1,
          borderBottomColor: "#bababa",
        }}
      >
        {/* 탭 바 안 카테고리 */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: 50, // 내부 row
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
                        selected === category
                          ? "Pretendard-Bold"
                          : "Pretendard-Light",
                      color: selected === category ? "black" : "#555",
                      fontSize: 15,
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
    </View>
  );
}
