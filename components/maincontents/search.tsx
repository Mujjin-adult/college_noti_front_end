import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Search() {
  const [fontsLoaded] = useFonts({
    "Pretendard-Bold": require("../../assets/fonts/Pretendard-Bold.ttf"),
    "Pretendard-ExtraBold": require("../../assets/fonts/Pretendard-ExtraBold.ttf"),
    "Pretendard-ExtraLight": require("../../assets/fonts/Pretendard-ExtraLight.ttf"),
    "Pretendard-Light": require("../../assets/fonts/Pretendard-Light.ttf"),
    "Pretendard-Regular": require("../../assets/fonts/Pretendard-Regular.ttf"),
  });

  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    console.log("검색:", searchText);
  };

  if (!fontsLoaded) return null;

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 15 }}>
      {/* 검색 인풋 박스 */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#ffffff",
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "#BDBDBD",
          paddingHorizontal: 15,
          paddingVertical: 10,
          marginBottom: 20,
        }}
      >
        <Image
          source={require("../../assets/images/search.png")} // 검색 아이콘
          style={{
            width: 20,
            height: 20,
            marginRight: 10,
            tintColor: "#999",
          }}
        />
        <TextInput
          style={{
            flex: 1,
            fontFamily: "Pretendard-Regular",
            fontSize: 16,
            color: "#000",
          }}
          placeholder="공지사항, 대학교 정보 검색"
          placeholderTextColor="#999"
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
        />
        {searchText.length > 0 && (
          <TouchableOpacity onPress={() => setSearchText("")}>
            <Image
              source={require("../../assets/images/close.png")} // X 아이콘
              style={{
                width: 15,
                height: 15,
              }}
            />
          </TouchableOpacity>
        )}
      </View>

      {/* 검색 결과 영역 */}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginBottom: 100 }}>
        {searchText === "" ? (
          <Text
            style={{
              fontFamily: "Pretendard-Light",
              fontSize: 16,
              color: "#999",
            }}
          >
            검색어를 입력해주세요
          </Text>
        ) : (
          <Text
            style={{
              fontFamily: "Pretendard-Light",
              fontSize: 16,
              color: "#999",
            }}
          >
            "{searchText}"에 대한 검색 결과
          </Text>
        )}
      </View>
    </View>
  );
}