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
    <View style={{ flex: 0.35, backgroundColor: "white" }}>
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
    </View>
  );
}
