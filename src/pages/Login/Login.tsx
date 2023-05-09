import { Link } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import UserForm from './components/UserForm';
import KakaoLoginBtn from './components/KakaoLoginBtn';
import GoogleLoginBtn from './components/GoogleLoginBtn';
import NaverLoginBtn from './components/NaverLoginBtn';

export default function Login() {
  const googleOauthClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || '';

  return (
    <div className="container xl pt-48 pb-9 bg-mkBg text-mkBlack">
      <div className="w-44 m-auto pt-4 pb-16 text-center">
        <img src="/images/logo_b.png" alt="logo" className="w-full" />
      </div>
      <UserForm />
      <div className="mt-12 text-center">
        <span className="mr-8">아이디 찾기</span>|
        <span className="mx-8">비밀번호 찾기</span>|
        <Link to="/signin">
          <span className="ml-8">회원가입</span>
        </Link>
      </div>
      <div className="flex justify-center items-center mt-20 text-center text-mkBlack opacity-50">
        <hr className="inline-block border-mkGray w-1/4 mr-10" />
        <span>다른 서비스 계정으로 로그인</span>
        <hr className="inline-block border-mkGray w-1/4 ml-10" />
      </div>
      <div className="socialLoginBtn-box flex justify-center gap-10 mt-12 text-center m-auto">
        {/* google */}
        <GoogleOAuthProvider clientId={googleOauthClientId}>
          <div className="socialLoginBtn">
            <GoogleLoginBtn />
          </div>
        </GoogleOAuthProvider>

        {/* kakao */}
        <div className="socialLoginBtn">
          <KakaoLoginBtn />
        </div>

        {/* naver */}
        <div className="socialLoginBtn">
          <NaverLoginBtn />
        </div>
      </div>
    </div>
  );
}
