import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface HeaderProps {
  showBackButton?: boolean;
}

export default function Header({ showBackButton = false }: HeaderProps) {
  const router = useRouter();
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
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {showBackButton ? (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                padding: 10,
                marginLeft: -20,
              }}
            >
              <Image
                source={require("../../assets/images/back.png")}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>
          ) : (
            <View style={{ width: 40 }} />
          )}
          <Image
            source={require("../../assets/images/종.png")}
            style={{
              width: 20,
              height: 25,
              resizeMode: "contain",
            }}
          />
        </View>
        <Text
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            color: "#FFFFFF",
            fontFamily: "Pretendard-SemiBold",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          띠링인캠퍼스
        </Text>
      </View>
    </View>
  );
}
