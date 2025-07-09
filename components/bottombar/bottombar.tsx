import { useFonts } from "expo-font";
import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";

export default function BottomBar() {
const [fontsLoaded] = useFonts({
  "Pretendard-Bold": require("../../assets/fonts/Pretendard-Bold.ttf"),
  "Pretendard-ExtraBold": require("../../assets/fonts/Pretendard-ExtraBold.ttf"),
  "Pretendard-ExtraLight": require("../../assets/fonts/Pretendard-ExtraLight.ttf"),
  "Pretendard-Light": require("../../assets/fonts/Pretendard-Light.ttf"),
  "Pretendard-Regular": require("../../assets/fonts/Pretendard-Regular.ttf"),
  "Pretendard-SemiBold": require("../../assets/fonts/Pretendard-SemiBold.ttf"),
});
  
  const reverseNavItems = [
    { type: "image", src: require("../../assets/images/file-cliked-02.png") },
    {
      type: "image",
      src: require("../../assets/images/file-check-cliked-02.png"),
    },
    {
      type: "image",
      src: require("../../assets/images/Logo.png"),
    },
    { type: "image", src: require("../../assets/images/meal.png") },
    { type: "image", src: require("../../assets/images/menu.png") },
  ];
  const navItems = [
    { type: "image", src: require("../../assets/images/file-02.png") },
    { type: "image", src: require("../../assets/images/file-check-02.png") },
    {
      type: "image",
      src: require("../../assets/images/Logo.png"),
    },
    { type: "image", src: require("../../assets/images/meal2.png") },
    { type: "image", src: require("../../assets/images/menu2.png") },
  ];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (!fontsLoaded) return null;
  return (
    <View style={{ flex: 0, backgroundColor: "white" }}>
      {/* 하단 탭바 */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 80,
          backgroundColor: "#3366FF",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {/* 탭바 안 메뉴들 */}
        {navItems.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => setActiveIndex(index)}>
            {item.type === "image" && (
              <Image
                source={
                  activeIndex === index && reverseNavItems[index]
                    ? reverseNavItems[index].src
                    : item.src
                }
                style={{
                  width: index === 2 ? 60 : 30, // 로고만 50, 나머진 30
                  height: index === 2 ? 41 : 30, // 로고만 50, 나머진 30
                  shadowColor: "#000",
                  shadowOffset: { width: 3, height: 3 },
                  shadowOpacity: 0.25,
                  shadowRadius: 1,
                }}
              />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
