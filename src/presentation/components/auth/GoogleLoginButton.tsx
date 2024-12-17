import { GoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import { AuthAPI } from '@api/auth'

export default function GoogleLoginButton() {
  const navigate = useNavigate();

  const handleGoogleLoginSuccess = async (credentialResponse: any) => {
    console.log('tokenResponse', credentialResponse);
    try {
      // ID 토큰 디코딩
      const id_token = credentialResponse.credential;
      console.log('id_token', id_token);

      // ID 토큰을 백엔드로 전송
      const { data } = await AuthAPI.googleLogin(id_token);      
      loginLocalStorage(data);

      navigate('/dashboard');
    } catch (error: any) {
      console.error('Google login failed:', error);
      alert('로그인 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    }
  };

  const loginLocalStorage = (data: any) => {
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    localStorage.setItem('tokenType', data.tokenType);
    localStorage.setItem('accessTokenExpiresIn', String(data.accessTokenExpiresIn));
    localStorage.setItem('refreshTokenExpiresIn', String(data.refreshTokenExpiresIn));
    localStorage.setItem('isLoggedIn', 'true');
  }

  const handleGoogleLoginError = () => {
    console.error('Google login failed');
    alert('구글 로그인에 실패했습니다. 다시 시도해주세요.');
  };

  return (
    <GoogleLogin
      onSuccess={handleGoogleLoginSuccess}
      onError={handleGoogleLoginError}
    />
  )
} 