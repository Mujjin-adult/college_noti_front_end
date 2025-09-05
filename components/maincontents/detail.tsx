import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Share, Text, TouchableOpacity, View } from "react-native";

export default function Detail() {
  const { title } = useLocalSearchParams();
  const router = useRouter();

  const [bookmarkedTitles, setBookmarkedTitles] = useState<string[]>([]);
  const detailTitle = "[인천학연구원] 25-2 국가근로 장학생 모집";
  const detailText = "공지 본문 내용";

  useEffect(() => {
    const loadBookmarks = async () => {
      try {
        const saved = await AsyncStorage.getItem("bookmarkedTitles");
        if (saved) {
          setBookmarkedTitles(JSON.parse(saved));
        }
      } catch (error) {
        console.error("북마크 불러오기 오류:", error);
      }
    };
    loadBookmarks();
  }, []);

  const handleBookmark = async (title: string) => {
    try {
      let updatedBookmarks;

      if (bookmarkedTitles.includes(title)) {
        // 북마크 제거
        updatedBookmarks = bookmarkedTitles.filter((t) => t !== title);
        alert("북마크에서 제거되었습니다.");
      } else {
        // 북마크 추가
        updatedBookmarks = [...bookmarkedTitles, title];
        alert("북마크에 추가되었습니다.");
      }

      setBookmarkedTitles(updatedBookmarks);
      await AsyncStorage.setItem(
        "bookmarkedTitles",
        JSON.stringify(updatedBookmarks)
      );
    } catch (error) {
      console.error("북마크 처리 중 오류:", error);
    }
  };

  // 공유 탭 띄우기 함수
  const handleShare = async (title: string) => {
    try {
      await Share.share({
        message: `${title}\n\n띠링인캠퍼스에서 확인하세요!`,
        title: title,
      });
    } catch (error) {
      console.error("공유 오류:", error);
    }
  };

  const swipe = (title: string) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: "#ffffff",
          justifyContent: "center",
          alignItems: "center",
          width: 80,
          borderRadius: 12,
          marginRight: 0,
        }}
        onPress={() => handleShare(title)}
      >
        {/* 북마크 아이콘 */}
        <TouchableOpacity
          style={{
            zIndex: 10,
            elevation: 10,
            position: "relative",
          }}
          onPress={(e) => {
            e.stopPropagation();
            handleBookmark(title);
          }}
        >
          <Image
            source={
              bookmarkedTitles.includes(title)
                ? require("../../assets/images/bookmark2.png")
                : require("../../assets/images/bookmark.png")
            }
            style={{
              width: 20,
              height: 20,
              tintColor: "white",
              resizeMode: "contain",
            }}
          />
        </TouchableOpacity>
        {/* 공유하기 버튼 */}
        <Image
          source={require("../../assets/images/export.png")}
          style={{
            width: 27,
            height: 27,
            resizeMode: "contain",
            marginBottom: 25,
          }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginTop: 20,
          marginLeft: 15,
          marginRight: 15,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              fontFamily: "Pretendard-regular",
              fontSize: 15,
              marginBottom: 3,
            }}
          >
            {detailTitle}
          </Text>
          <Text
            style={{
              fontFamily: "Pretendard-Light",
              fontSize: 12,
              marginTop: 10,
              marginBottom: 0,
            }}
          >
            2025-09-28
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
            <Text
              style={{
                fontFamily: "Pretendard-Light",
                fontSize: 12,
                marginTop: 10,
                marginBottom: 0,
                marginLeft: 8,
              }}
            >
              조회 123456
            </Text>
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => handleBookmark(detailTitle)}>
            <Image
              source={
                bookmarkedTitles.includes(detailTitle)
                  ? require("../../assets/images/bookmark2.png")
                  : require("../../assets/images/bookmark.png")
              }
              style={{
                width: 25,
                height: 25,
                resizeMode: "contain",
                marginLeft: 10,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleShare(detailTitle)}>
            <Image
              source={require("../../assets/images/export.png")}
              style={{
                width: 27,
                height: 27,
                resizeMode: "contain",
                marginLeft: 10,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          marginTop: 40,
        }}
      >
        <Text
          style={{
            fontFamily: "Pretendard-Bold",
            fontSize: 20,
            marginLeft: 10,
          }}
        >
          {detailTitle}
        </Text>
        <Text
          style={{
            fontFamily: "Pretendard-regular",
            fontSize: 18,
            marginTop: 20,
            marginLeft: 10,
            marginRight: 20,
          }}
        >
          {detailText}
        </Text>
      </View>
    </View>
  );
}
