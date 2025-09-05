import { useFonts } from "expo-font";
import React, { useState } from "react";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";

export default function Alert() {
  const [fontsLoaded] = useFonts({
    "Pretendard-Bold": require("../../assets/fonts/Pretendard-Bold.ttf"),
    "Pretendard-ExtraBold": require("../../assets/fonts/Pretendard-ExtraBold.ttf"),
    "Pretendard-ExtraLight": require("../../assets/fonts/Pretendard-ExtraLight.ttf"),
    "Pretendard-Light": require("../../assets/fonts/Pretendard-Light.ttf"),
    "Pretendard-Regular": require("../../assets/fonts/Pretendard-Regular.ttf"),
  });

  const categories = [
    "학사",
    "학점교류",
    "일반/행사/모집",
    "장학금",
    "등록금 납부",
    "교육시험",
    "봉사",
    "채용정보",
  ];

  const subCategories = [
    ["전체"],
    ["전체"],
    ["전체", "일반", "행사", "모집"],
    ["국가장학금", "교외장학금", "기타","국가근로장학금","교내 봉사장학금"],
    ["전체"],
    ["전체"],
    ["전체"],
    ["전체","모집중","마감"],
  ];

  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>([]);

  const toggleSubCategory = (categoryIndex: number, subCategory: string) => {
    const uniqueKey = `${categoryIndex}-${subCategory}`;
    setSelectedSubCategories((prev) =>
      prev.includes(uniqueKey)
        ? prev.filter((c) => c !== uniqueKey)
        : [...prev, uniqueKey]
    );
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#ffffffff",
      }}
    >
      <Text
        style={{
          fontFamily: "Pretendard-Bold",
          fontSize: 15,
          textAlign: "center",
          paddingVertical: 15,
          borderColor: "#D1D1D1",
          borderBottomWidth: 1,
        }}
      >
        알림 키워드 설정
      </Text>

      <View style={{ flex: 1 }}>
        {categories.map((category, index) => (
          <View
            key={index}
            style={{
              borderBottomWidth: 1,
              borderColor: "#D1D1D1",
            }}
          >
            <View style={{ padding: 15 }}>
              <Text
                style={{
                  fontFamily: "Pretendard-Bold",
                  fontSize:23,
                  color: "black",
                  marginBottom: 5,
                }}
              >
                {category}
              </Text>
              <View style={{ 
                flexDirection: "row", 
                flexWrap: "wrap", 
                marginTop: 10,
                gap: 15,
              }}>
                {subCategories[index].map((subCategory, subIndex) => {
                  const uniqueKey = `${index}-${subCategory}`;
                  return (
                    <TouchableOpacity
                      key={subIndex}
                      onPress={() => toggleSubCategory(index, subCategory)}
                      style={{
                        backgroundColor: selectedSubCategories.includes(uniqueKey) ? "#3366FF" : "#ffffff",
                        paddingHorizontal: 5,
                        paddingVertical: 2,
                        borderRadius: 3,
                        borderWidth: 1,
                        borderColor: "#D1D1D1",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "Pretendard-Regular",
                          fontSize: 17,
                          color: selectedSubCategories.includes(uniqueKey) ? "#ffffff" : "#555",
                        }}
                      >
                        {subCategory}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
