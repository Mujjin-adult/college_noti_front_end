import { useFonts } from "expo-font";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Header() {
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

  const [selected, setSelected] = useState("학과");

  if (!fontsLoaded) return null;

  return (
    <View
      style={{
        width: "100%", // 좌우는 부모 기준으로 가득
        height: 180,
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
          paddingBottom: 20,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text
            style={{
              color: "#FFFFFF",
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
          source={require("../../assets/images/종.png")}
          style={{
            width: 22, // 픽셀로 고정하는 게 보통 더 안정적
            height: 27,
            marginRight: 30,
          }}
        />
      </View>

      {/* 탭 바 (크기 고정) */}
      <View
        style={{
          width: "100%", // 좌우는 부모 기준으로 가득
          height: 50, // 상하는 고정 (원하는 값으로 조정)
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
    </View>
  );
}
