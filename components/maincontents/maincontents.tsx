import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function MainContents() {
  const [fontsLoaded] = useFonts({
    "Pretendard-Bold": require("../../assets/fonts/Pretendard-Bold.ttf"),
    "Pretendard-ExtraBold": require("../../assets/fonts/Pretendard-ExtraBold.ttf"),
    "Pretendard-ExtraLight": require("../../assets/fonts/Pretendard-ExtraLight.ttf"),
    "Pretendard-Light": require("../../assets/fonts/Pretendard-Light.ttf"),
    "Pretendard-Regular": require("../../assets/fonts/Pretendard-Regular.ttf"),
  });

  const noticeTitles = [
    "대학혁신지원사업 전공 소모임 모집 안내",
    "INU 나노 디그리 교육과정 안내",
    "25-2학기 파견 교환학생 선발 공고",
  ]

  const navi = useNavigation();
  const [readTitles, setReadTitles] = useState<string[]>([]); //이해가 안감

  // 앱 시작 시 읽은 목록 불러오기
  useEffect(() => {
    const loadReadTitles = async () => {
      const stored = await AsyncStorage.getItem("readTitles");
      if (stored) {
        setReadTitles(JSON.parse(stored));
      }
    };
    loadReadTitles();
  }, []);

  // 읽은 제목 추가 + 저장
  const handleTitlePress = async (title: string) => {
    try {
      if (!readTitles.includes(title)) {
        const updated = [...readTitles, title];
        setReadTitles(updated);
        await AsyncStorage.setItem("readTitles", JSON.stringify(updated));
      }
      (navi as any).navigate("detail", { title });
    } catch (error) {
      console.error("제목 클릭 처리 중 오류:", error);
    }
  };

  if (!fontsLoaded) return null;

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 0 }}>
        {[6, 5, 4, 3, 2].map((m) => {
          return (
            <View key={m}>
              <Text
                style={{
                  fontFamily: "Pretendard-Light",
                  fontSize: 12,
                  marginTop: 10,
                  marginBottom: 0,
                  marginLeft: 15,
                }}
              >
                2025-0{m}
              </Text>

              <View
                style={{
                  gap: 10,
                  marginTop: 10,
                  paddingHorizontal: 15,
                }}
              >
                {noticeTitles.map((title, i) => (
                  <TouchableOpacity
                    key={`${m}-${title}`}
                    onPress={() => handleTitlePress(title)}
                  >
                    <View
                      style={{
                        width: "100%",
                        height: 80,
                        backgroundColor: "#ffffff",
                        borderRadius: 12,
                        paddingHorizontal: 20,
                        paddingVertical: 12,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        shadowColor: "#000",
                        shadowOffset: { width: 2, height: 2 },
                        shadowOpacity: 0.3,
                        shadowRadius: 3,
                        elevation: 4,
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            color: readTitles.includes(title)
                              ? "#909090"
                              : "#000000",
                            fontFamily: "Pretendard-Light",
                            fontSize: 15,
                          }}
                        >
                          {title}
                        </Text>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 6,
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: "Pretendard-Light",
                              fontSize: 10,
                            }}
                          >
                            2025-0{m}-28
                          </Text>
                          <Text
                            style={{
                              fontFamily: "Pretendard-Light",
                              fontSize: 12,
                              color: "#ffffff",
                              marginLeft: 8,
                              paddingHorizontal: 4,
                              paddingTop: 1,
                              paddingBottom: 1,
                              lineHeight: 14,
                              borderRadius: 5,
                              backgroundColor: "#8e8e8e",
                            }}
                          >
                            전공
                          </Text>
                        </View>
                      </View>

                      <Image
                        source={require("../../assets/images/bookmark.png")}
                        style={{
                          width: 24,
                          height: 24,
                          resizeMode: "contain",
                          overflow: "visible",
                          padding: 10,
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
