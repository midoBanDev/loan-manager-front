import { Link } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()

  const handleGoogleSuccess = async (credentialResponse: any) => {
    try {
      // TODO: 백엔드에 Google 인증 정보를 전송하고 JWT 토큰을 받아옴
      console.log('Google 로그인 성공:', credentialResponse)
      navigate('/dashboard')
    } catch (error) {
      console.error('Google 로그인 실패:', error)
    }
  }

  const handleGoogleError = () => {
    console.error('Google 로그인 실패')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
      <div className="w-full max-w-md p-8 rounded-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-md shadow-lg">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6">로그인</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              이메일
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100"
              placeholder="이메일을 입력하세요"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              비밀번호
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100"
              placeholder="비밀번호를 입력하세요"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            로그인
          </button>
        </form>

        {/* 구분선 */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-slate-800 text-slate-500">또는</span>
          </div>
        </div>

        {/* 구글 로그인 버튼 */}
        <div className="mb-6">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
            useOneTap
            theme="filled_black"
            size="large"
            text="signin_with"
            shape="rectangular"
            width="100%"
          />
        </div>

        <div className="text-center text-sm text-slate-600 dark:text-slate-400">
          계정이 없으신가요?{' '}
          <Link to="/signup" className="text-blue-600 dark:text-blue-400 hover:underline">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  )
} 