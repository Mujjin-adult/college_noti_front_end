import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import { Dimensions, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Login: undefined;
  EnterEmail: undefined;
  EnterPw: undefined;
  Home: undefined;
  Detail: undefined;
  Search: undefined;
  Setting: undefined;
  Alert: undefined;
  Scrap: undefined;
};

type EnterEmailScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'EnterEmail'>;

export default function EnterEmail() {
  const navigation = useNavigation<EnterEmailScreenNavigationProp>();
  const { width } = Dimensions.get("window");
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [timer, setTimer] = useState(0);

  const [fontsLoaded] = useFonts({
    "Pretendard-Bold": require("../../assets/fonts/Pretendard-Bold.ttf"),
    "Pretendard-ExtraBold": require("../../assets/fonts/Pretendard-ExtraBold.ttf"),
    "Pretendard-ExtraLight": require("../../assets/fonts/Pretendard-ExtraLight.ttf"),
    "Pretendard-Light": require("../../assets/fonts/Pretendard-Light.ttf"),
    "Pretendard-Regular": require("../../assets/fonts/Pretendard-Regular.ttf"),
    "Pretendard-SemiBold": require("../../assets/fonts/Pretendard-SemiBold.ttf"),
  });

  // 타이머 카운트다운
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isCodeSent && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isCodeSent, timer]);

  if (!fontsLoaded) return null;

  const handleSendVerification = () => {
    if (!isCodeSent) {
      // 인증번호 발송
      console.log("인증번호 발송:", email);
      setIsCodeSent(true);
      setTimer(180); // 3분 = 180초
    } else {
      // 인증하기
      console.log("인증 확인:", verificationCode);
      // 인증 성공 시 비밀번호 설정 화면으로 이동
      navigation.navigate('EnterPw');
    }
  };

  // 타이머 포맷 (mm:ss)
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 30,
        paddingTop: 60,
      }}
    >
      {/* 타이틀 */}
      <Text
        style={{
          fontFamily: "Pretendard-ExtraBold",
          fontSize: 24,
          color: "#3366FF",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        띠링인캠퍼스
      </Text>

      {/* 로고 이미지 */}
      <Image
        source={require("../../assets/images/Logo.png")}
        style={{
          width: 120,
          height: 120,
          resizeMode: "contain",
          alignSelf: "center",
          marginBottom: 50,
        }}
      />

      {/* 이메일 인증 텍스트 */}
      <Text
        style={{
          fontFamily: "Pretendard-Bold",
          fontSize: 24,
          color: "#333333",
          marginBottom: 40,
        }}
      >
        이메일 인증
      </Text>

      {/* 이메일 입력칸 */}
      <View style={{ marginBottom: 20 }}>
        <Text
          style={{
            fontFamily: "Pretendard-SemiBold",
            fontSize: 14,
            color: "#333333",
            marginBottom: 8,
          }}
        >
          이메일
        </Text>
        <TextInput
          style={{
            fontFamily: "Pretendard-Regular",
            fontSize: 16,
            borderWidth: 1,
            borderColor: "#DDDDDD",
            borderRadius: 10,
            paddingHorizontal: 15,
            paddingVertical: 12,
            backgroundColor: "#FAFAFA",
          }}
          placeholder="이메일을 입력하세요"
          placeholderTextColor="#AAAAAA"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          editable={!isCodeSent}
        />
      </View>

      {/* 인증번호 입력칸 (인증번호 발송 후 표시) */}
      {isCodeSent && (
        <View style={{ marginBottom: 20 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <Text
              style={{
                fontFamily: "Pretendard-SemiBold",
                fontSize: 14,
                color: "#333333",
              }}
            >
              인증번호
            </Text>
            {timer > 0 && (
              <Text
                style={{
                  fontFamily: "Pretendard-Bold",
                  fontSize: 14,
                  color: "#FF3366",
                }}
              >
                {formatTime(timer)}
              </Text>
            )}
          </View>
          <TextInput
            style={{
              fontFamily: "Pretendard-Regular",
              fontSize: 16,
              borderWidth: 1,
              borderColor: "#DDDDDD",
              borderRadius: 10,
              paddingHorizontal: 15,
              paddingVertical: 12,
              backgroundColor: "#FAFAFA",
            }}
            placeholder="인증번호를 입력하세요"
            placeholderTextColor="#AAAAAA"
            value={verificationCode}
            onChangeText={setVerificationCode}
            keyboardType="number-pad"
            maxLength={6}
            secureTextEntry
          />
        </View>
      )}

      {/* 인증번호 발송하기 / 인증하기 버튼 */}
      <TouchableOpacity
        onPress={handleSendVerification}
        style={{
          backgroundColor: "#3366FF",
          borderRadius: 10,
          paddingVertical: 15,
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "Pretendard-Bold",
            fontSize: 16,
            color: "#FFFFFF",
          }}
        >
          {isCodeSent ? "인증하기" : "인증번호 발송하기"}
        </Text>
      </TouchableOpacity>

      {/* 하단 문구 */}
      <Text
        style={{
          fontFamily: "Pretendard-Regular",
          fontSize: width * 0.035,
          color: "#AAAAAA",
          textAlign: "center",
          position: "absolute",
          bottom: 70,
          width: "100%",
          alignSelf: "center",
        }}
      >
        INU Announcement Notification App
      </Text>

      <Text
        style={{
          fontFamily: "Pretendard-Regular",
          fontSize: width * 0.03,
          color: "#AAAAAA",
          textAlign: "center",
          position: "absolute",
          bottom: 40,
          width: "100%",
          alignSelf: "center",
        }}
      >
        ⓒ Team name
      </Text>
    </View>
  );
}
