import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
} from "firebase/auth";
import { auth } from "../config/firebaseConfig";

/**
 * 이메일/비밀번호로 회원가입 및 인증 이메일 발송
 * @param email - 이메일 주소
 * @param password - 비밀번호
 * @param displayName - 사용자 이름 (선택)
 * @returns 성공 여부 및 사용자 정보
 */
export const signUpWithEmail = async (
  email: string,
  password: string,
  displayName?: string
) => {
  try {
    // 회원가입
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // 사용자 이름 설정
    if (displayName) {
      await updateProfile(user, { displayName });
    }

    // 이메일 인증 링크 발송
    await sendEmailVerification(user);

    return {
      success: true,
      message: "회원가입이 완료되었습니다. 이메일을 확인해주세요.",
      user: {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        emailVerified: user.emailVerified,
      },
    };
  } catch (error: any) {
    console.error("회원가입 오류:", error);

    let errorMessage = "회원가입에 실패했습니다.";

    // Firebase 에러 코드별 메시지
    switch (error.code) {
      case "auth/email-already-in-use":
        errorMessage = "이미 사용 중인 이메일입니다.";
        break;
      case "auth/invalid-email":
        errorMessage = "유효하지 않은 이메일 형식입니다.";
        break;
      case "auth/weak-password":
        errorMessage = "비밀번호는 6자 이상이어야 합니다.";
        break;
      case "auth/operation-not-allowed":
        errorMessage = "이메일/비밀번호 인증이 활성화되지 않았습니다.";
        break;
    }

    return {
      success: false,
      message: errorMessage,
      error: error.code,
    };
  }
};

/**
 * 이메일/비밀번호로 로그인
 * @param email - 이메일 주소
 * @param password - 비밀번호
 * @param skipEmailVerification - 이메일 인증 확인 건너뛰기 (개발/테스트용)
 * @returns 성공 여부 및 사용자 정보
 */
export const signInWithEmail = async (
  email: string,
  password: string,
  skipEmailVerification: boolean = false
) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // 이메일 인증 확인 (skipEmailVerification이 false일 때만)
    if (!skipEmailVerification && !user.emailVerified) {
      return {
        success: false,
        message: "이메일 인증이 필요합니다. 이메일을 확인해주세요.",
        emailVerified: false,
        user: {
          uid: user.uid,
          email: user.email,
        },
      };
    }

    return {
      success: true,
      message: "로그인되었습니다.",
      emailVerified: user.emailVerified,
      user: {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        emailVerified: user.emailVerified,
      },
    };
  } catch (error: any) {
    console.error("로그인 오류:", error);

    let errorMessage = "로그인에 실패했습니다.";

    switch (error.code) {
      case "auth/user-not-found":
        errorMessage = "등록되지 않은 이메일입니다.";
        break;
      case "auth/wrong-password":
        errorMessage = "비밀번호가 일치하지 않습니다.";
        break;
      case "auth/invalid-email":
        errorMessage = "유효하지 않은 이메일 형식입니다.";
        break;
      case "auth/user-disabled":
        errorMessage = "비활성화된 계정입니다.";
        break;
      case "auth/too-many-requests":
        errorMessage =
          "로그인 시도가 너무 많습니다. 잠시 후 다시 시도해주세요.";
        break;
    }

    return {
      success: false,
      message: errorMessage,
      error: error.code,
    };
  }
};

/**
 * 인증 이메일 재발송
 * @param user - Firebase User 객체
 * @returns 성공 여부
 */
export const resendVerificationEmail = async (user: User) => {
  try {
    await sendEmailVerification(user);
    return {
      success: true,
      message: "인증 이메일이 재발송되었습니다.",
    };
  } catch (error: any) {
    console.error("인증 이메일 재발송 오류:", error);
    return {
      success: false,
      message: "인증 이메일 발송에 실패했습니다.",
      error: error.code,
    };
  }
};

/**
 * 비밀번호 재설정 이메일 발송
 * @param email - 이메일 주소
 * @returns 성공 여부
 */
export const resetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return {
      success: true,
      message: "비밀번호 재설정 이메일이 발송되었습니다.",
    };
  } catch (error: any) {
    console.error("비밀번호 재설정 오류:", error);

    let errorMessage = "비밀번호 재설정에 실패했습니다.";

    switch (error.code) {
      case "auth/user-not-found":
        errorMessage = "등록되지 않은 이메일입니다.";
        break;
      case "auth/invalid-email":
        errorMessage = "유효하지 않은 이메일 형식입니다.";
        break;
    }

    return {
      success: false,
      message: errorMessage,
      error: error.code,
    };
  }
};

/**
 * 로그아웃
 * @returns 성공 여부
 */
export const signOutUser = async () => {
  try {
    await signOut(auth);
    return {
      success: true,
      message: "로그아웃되었습니다.",
    };
  } catch (error: any) {
    console.error("로그아웃 오류:", error);
    return {
      success: false,
      message: "로그아웃에 실패했습니다.",
      error: error.code,
    };
  }
};

/**
 * 현재 로그인한 사용자 가져오기
 * @returns 현재 사용자 또는 null
 */
export const getCurrentUser = () => {
  return auth.currentUser;
};

/**
 * 인증 상태 변경 리스너
 * @param callback - 인증 상태 변경 시 호출될 콜백 함수
 * @returns unsubscribe 함수
 */
export const onAuthStateChanged = (callback: (user: User | null) => void) => {
  return auth.onAuthStateChanged(callback);
};
