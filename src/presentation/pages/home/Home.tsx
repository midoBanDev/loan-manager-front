import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { 
  User as UserIcon, 
  Bell as BellIcon,
  Settings as SettingsIcon,
  HelpCircle as HelpIcon,
  LogOut as LogOutIcon,
  Download as DownloadIcon,
  Trash2 as TrashIcon,
  Keyboard as KeyboardIcon, 
  UserRound  as Mypage
} from 'lucide-react'

export const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const navigate = useNavigate()

  // 컴포넌트 마운트 시 로그인 상태 확인
  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn') === 'true'
    setIsLoggedIn(loginStatus)
  }, [])

  const handleStartClick = () => {
    if (!isLoggedIn) {
      navigate('/login')
      return
    }
    navigate('/dashboard')
  }

  const handleMypageClick = () => {
    navigate('/dashboard')
  }

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false)
  }

  return (
    <div className="min-h-screen relative">
      {/* 배경 이미지 */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(to bottom right, #4F46E5, #06B6D4)'
        }}
      />
      
      {/* 메인 콘텐츠 */}
      <div className="relative z-10">
        {/* 네비게이션 */}
        <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-white">GrowTogether</div>
            <div className="space-x-4 flex items-center">
              {!isLoggedIn ? (
                <>
                  <Link 
                    to="/login"
                    className="text-white hover:text-blue-100 transition-colors"
                  >
                    로그인
                  </Link>
                  <Link 
                    to="/signup" 
                    className="px-6 py-2 bg-white text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                  >
                    회원가입
                  </Link>
                </>
              ) : (
                <div className="relative">
                  <button
                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                    className="flex items-center space-x-3 text-white hover:text-blue-100 transition-colors"
                  >
                    <div onClick={handleMypageClick} className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
                      my
                    </div> 
                    <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-white">
                      이
                    </div>
                  </button>
                  
                  {isProfileMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg py-1">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-white text-lg">
                            이
                          </div>
                          <div>
                            <div className="font-medium">이우기</div>
                            <div className="text-sm text-gray-500">Online</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="py-2">
                        <Link to="/profile" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                          <UserIcon className="w-4 h-4 mr-3" />
                          프로필
                        </Link>
                        <Link to="/settings" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                          <SettingsIcon className="w-4 h-4 mr-3" />
                          설정
                        </Link>
                        <Link to="/notifications" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                          <BellIcon className="w-4 h-4 mr-3" />
                          알림 설정
                        </Link>
                        <Link to="/help" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                          <HelpIcon className="w-4 h-4 mr-3" />
                          도움말
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="w-full px-4 py-2 text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 flex items-center"
                        >
                          <LogOutIcon className="w-4 h-4 mr-3" />
                          로그아웃
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* 히어로 섹션 */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              GrowTogether,<br />
              내 성장의 동반자
            </h1>
            <p className="text-xl text-white mb-8">
              목표 달성을 위한 최고의 플랫폼<br />
              함께 성장하는 즐거움을 경험하세요
            </p>
            <div className="flex gap-4">
              <button 
                onClick={handleStartClick}
                className="flex items-center px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
              >
                시작하기
              </button>
              <Link 
                to="/about" 
                className="flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all"
              >
                더 알아보기
              </Link>
            </div>
          </div>
        </section>

        {/* 특징 섹션 */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-3">목표 관리</h3>
              <p className="text-white/90">
                체계적인 목표 설정과 추적으로 성장을 가속화하세요
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-3">커뮤니티</h3>
              <p className="text-white/90">
                같은 목표를 가진 사람들과 함께 성장하세요
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-3">전문가 멘토링</h3>
              <p className="text-white/90">
                각 분야 전문가들의 조언으로 더 빠른 성장을 경험하세요
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 