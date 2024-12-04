import { Link } from 'react-router-dom'

export const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
      <div className="w-full max-w-md p-8 rounded-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-md shadow-lg">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6">회원가입</h1>
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
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              비밀번호 확인
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100"
              placeholder="비밀번호를 다시 입력하세요"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            회원가입
          </button>
        </form>
        <div className="mt-4 text-center text-sm text-slate-600 dark:text-slate-400">
          이미 계정이 있으신가요?{' '}
          <Link to="/login" className="text-blue-600 dark:text-blue-400 hover:underline">
            로그인
          </Link>
        </div>
      </div>
    </div>
  )
} 