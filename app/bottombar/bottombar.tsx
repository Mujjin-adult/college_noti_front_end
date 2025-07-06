import { useFonts } from "expo-font";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function BottomBar() {
  const [fontsLoaded] = useFonts({
    "Inter-Light": require("../../assets/fonts/Inter-Light.ttf"),
    "Inter-Bold": require("../../assets/fonts/Inter-Bold.ttf"),
  });
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
