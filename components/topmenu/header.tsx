import { useFonts } from "expo-font";
import React from "react";
import { Image, Text, View } from "react-native";

export default function Header() {
  const [fontsLoaded] = useFonts({
    "Pretendard-Bold": require("../../assets/fonts/Pretendard-Bold.ttf"),
    "Pretendard-ExtraBold": require("../../assets/fonts/Pretendard-ExtraBold.ttf"),
    "Pretendard-ExtraLight": require("../../assets/fonts/Pretendard-ExtraLight.ttf"),
    "Pretendard-Light": require("../../assets/fonts/Pretendard-Light.ttf"),
    "Pretendard-Regular": require("../../assets/fonts/Pretendard-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <View
      style={{
        width: "100%",
        height: 100,
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
        <View style={{ flex: 1 }} />
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
    </View>
  );
}
