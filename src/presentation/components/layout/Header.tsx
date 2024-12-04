import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BellIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useTheme } from '../../theme/ThemeProvider'

interface Notification {
  id: string
  title: string
  message: string
  time: string
  read: boolean
}

export const Header = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const { theme, toggleTheme } = useTheme()
  
  // 임시 데이터
  const notifications: Notification[] = [
    {
      id: '1',
      title: '목표 달성',
      message: '운동 목표를 달성했습니다!',
      time: '방금 전',
      read: false
    },
    {
      id: '2',
      title: '새로운 챌린지',
      message: '새로운 챌린지가 시작되었습니다.',
      time: '1시간 전',
      read: false
    }
  ]

  const unreadCount = notifications.filter(n => !n.read).length

  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
      <div className="px-6 py-4 flex items-center justify-end gap-4">
        {/* 다크모드 토글 버튼 */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300"
          aria-label={theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
        >
          {theme === 'dark' ? (
            <SunIcon className="w-6 h-6" />
          ) : (
            <MoonIcon className="w-6 h-6" />
          )}
        </button>

        {/* 알림 버튼 */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 relative"
          >
            <BellIcon className="w-6 h-6 text-slate-600 dark:text-slate-300" />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>

          {/* 알림 메뉴 */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold text-slate-800 dark:text-slate-100">알림</h3>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notifications.map(notification => (
                  <div
                    key={notification.id}
                    className={`p-4 border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer ${
                      !notification.read ? 'bg-blue-50 dark:bg-blue-900/30' : ''
                    }`}
                  >
                    <h4 className="font-medium text-slate-800 dark:text-slate-100">{notification.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{notification.message}</p>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{notification.time}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-slate-200 dark:border-slate-700">
                <Link to="/notifications" className="text-sm text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
                  모든 알림 보기
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* 프로필 버튼 */}
        <div className="relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="w-10 h-10 rounded-full overflow-hidden border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
          >
            <img
              src="https://via.placeholder.com/40"
              alt="프로필"
              className="w-full h-full object-cover"
            />
          </button>

          {/* 프로필 메뉴 */}
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                <p className="font-medium text-slate-800 dark:text-slate-100">김성장</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">user@example.com</p>
              </div>
              <nav className="p-2">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg"
                >
                  프로필 설정
                </Link>
                <Link
                  to="/profile/subscription"
                  className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg"
                >
                  구독 관리
                </Link>
                <button
                  className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg"
                  onClick={() => {/* 로���아웃 처리 */}}
                >
                  로그아웃
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
} 