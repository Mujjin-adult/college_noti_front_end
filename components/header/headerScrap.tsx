import { useFonts } from "expo-font";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function HeaderScreen() {
  const [fontsLoaded] = useFonts({
    "Pretendard-Bold": require("../../assets/fonts/Pretendard-Bold.ttf"),
    "Pretendard-ExtraBold": require("../../assets/fonts/Pretendard-ExtraBold.ttf"),
    "Pretendard-ExtraLight": require("../../assets/fonts/Pretendard-ExtraLight.ttf"),
    "Pretendard-Light": require("../../assets/fonts/Pretendard-Light.ttf"),
    "Pretendard-Regular": require("../../assets/fonts/Pretendard-Regular.ttf"),
  });
  const categories = ["관심 공지", "스크랩 공지"];

  const [selected, setSelected] = useState("관심 공지");

  if (!fontsLoaded) return null;

  return (
    <View
      style={{
        width: "100%",
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
          justifyContent: "space-between",
          paddingHorizontal: 30,
        }}
      >
        <View style={{ flex: 1,  }} />
        <Text
          style={{
            color: "#FFFFFF",
            fontFamily: "Pretendard-SemiBold",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          띠링인캠퍼스
        </Text>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <Image
            source={require("../../assets/images/종.png")}
            style={{
              width: 25,
              height: 25,
              resizeMode: "contain",
            }}
          />
        </View>
      </View>

      {/* 탭 바 (크기 고정) */}
      <View
        style={{
          width: "100%",
          backgroundColor: "#ffffff",
          borderBottomWidth: 1,
          borderBottomColor: "#bababa",
        }}
      >
        {/* 탭 바 안 카테고리 */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            height: 50,
            flex: 1,
          }}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={{ flex: 1 }}
              onPress={() => setSelected(category)}
            >
              <View
                style={{
                  paddingHorizontal: 0,
                  paddingVertical: 15,
                  borderBottomWidth: selected === category ? 4 : 0,
                  borderBottomColor: "#bababa",
                  alignItems: "center",
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
      </View>
    </View>
  );
}
