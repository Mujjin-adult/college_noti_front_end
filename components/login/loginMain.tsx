import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Image,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { getToken, messaging } from "../../config/firebaseConfig";
import { signInWithEmail } from "../../services/authAPI";
import { TokenService } from "../../services/tokenService";
import { api } from "../../services/apiClient";

type RootStackParamList = {
  Login: undefined;
  EnterEmail: undefined;
  Home: undefined;
  Detail: undefined;
  Search: undefined;
  Setting: undefined;
  Alert: undefined;
  Scrap: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;

export default function LoginMain() {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { width } = Dimensions.get("window");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fcmToken, setFcmToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [fontsLoaded] = useFonts({
    "Pretendard-Bold": require("../../assets/fonts/Pretendard-Bold.ttf"),
    "Pretendard-ExtraBold": require("../../assets/fonts/Pretendard-ExtraBold.ttf"),
    "Pretendard-ExtraLight": require("../../assets/fonts/Pretendard-ExtraLight.ttf"),
    "Pretendard-Light": require("../../assets/fonts/Pretendard-Light.ttf"),
    "Pretendard-Regular": require("../../assets/fonts/Pretendard-Regular.ttf"),
    "Pretendard-SemiBold": require("../../assets/fonts/Pretendard-SemiBold.ttf"),
  });

  // Firebase FCM 토큰 받기 함수
  const getFirebaseFCMToken = async () => {
    try {
      // VAPID 키는 Firebase Console > 프로젝트 설정 > 클라우드 메시징 > 웹 푸시 인증서에서 확인
      const vapidKey =
        "BBErLdE9tOoJ6FSI-89EIuR2MFdssTlXuzjp2jb3fVsOeAloxpSHrlvNcbiwjGXHs37vd467Pkqtkh_54psXoHU";

      const token = await getToken(messaging, { vapidKey });

      if (token) {
        console.log("Firebase FCM 토큰:", token);
        setFcmToken(token);
        return token;
      } else {
        console.log("FCM 토큰을 가져올 수 없습니다. 알림 권한을 확인하세요.");
        Alert.alert(
          "알림 권한 필요",
          "푸시 알림을 받으려면 브라우저에서 알림 권한을 허용해주세요."
        );
      }
    } catch (error) {
      console.error("FCM 토큰 가져오기 실패:", error);
      Alert.alert(
        "오류",
        `FCM 토큰을 가져오는 중 오류가 발생했습니다: ${error}`
      );
    }
  };

  // 컴포넌트 마운트 시 FCM 토큰 받기
  useEffect(() => {
    // Firebase Web SDK는 웹 플랫폼에서만 작동합니다
    if (Platform.OS === "web") {
      getFirebaseFCMToken();
    } else {
    }
  }, []);

  if (!fontsLoaded) return null;

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("오류", "이메일과 비밀번호를 입력해주세요.");
      return;
    }

    setIsLoading(true);

    try {
      // 1. Firebase 인증 (이메일 인증 건너뛰기)
      const firebaseResult = await signInWithEmail(email, password, true);

      if (!firebaseResult.success) {
        Alert.alert("로그인 실패", firebaseResult.message);
        return;
      }

      console.log("Firebase 로그인 성공:", firebaseResult.user);

      // 2. 백엔드 API로 JWT 토큰 받기 (선택적)
      try {
        const backendLoginResponse = await api.login({
          email: email,
          password: password,
          fcmToken: fcmToken || undefined,
        });

        const loginData = backendLoginResponse.data.data;

        if (loginData?.accessToken) {
          // 3. JWT 토큰 저장
          await TokenService.saveToken(loginData.accessToken);
          if (loginData.refreshToken) {
            await TokenService.saveRefreshToken(loginData.refreshToken);
          }
          console.log("JWT 토큰 저장 완료");
        }
      } catch (backendError: any) {
        // 백엔드 로그인 실패해도 Firebase 인증 성공했으면 계속 진행
        console.warn("백엔드 로그인 오류 (Firebase 인증으로 계속):", backendError.message);
      }

      // 4. 홈 화면으로 이동 (Firebase 인증 성공 시)
      console.log("FCM 토큰:", fcmToken);
      navigation.navigate("Home");
    } catch (error) {
      console.error("로그인 오류:", error);
      Alert.alert("오류", "로그인 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = () => {
    console.log("회원가입 화면으로 이동");
    navigation.navigate("EnterEmail");
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
          fontSize: 20,
          color: "#000000",
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

      {/* 이메일 입력칸 */}
      <View style={{ marginBottom: 15 }}>
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
        />
      </View>

      {/* 비밀번호 입력칸 */}
      <View style={{ marginBottom: 25 }}>
        <Text
          style={{
            fontFamily: "Pretendard-SemiBold",
            fontSize: 14,
            color: "#333333",
            marginBottom: 8,
          }}
        >
          비밀번호
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
          placeholder="비밀번호를 입력하세요"
          placeholderTextColor="#AAAAAA"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      {/* 시작하기 버튼 */}
      <TouchableOpacity
        onPress={handleLogin}
        disabled={isLoading}
        style={{
          backgroundColor: isLoading ? "#99BBFF" : "#3366FF",
          borderRadius: 10,
          paddingVertical: 15,
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        {isLoading ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text
            style={{
              fontFamily: "Pretendard-Bold",
              fontSize: 16,
              color: "#FFFFFF",
            }}
          >
            시작하기
          </Text>
        )}
      </TouchableOpacity>

      {/* 계정 생성 안내 */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Pretendard-Regular",
            fontSize: 14,
            color: "#666666",
          }}
        >
          아직 계정이 없으신가요?{"  "}
        </Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text
            style={{
              fontFamily: "Pretendard-Bold",
              fontSize: 14,
              color: "#3366FF",
            }}
          >
            회원가입
          </Text>
        </TouchableOpacity>
      </View>

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
