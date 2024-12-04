import { useTheme } from '../../theme/ThemeProvider'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { 
  Home as HomeIcon,
  Inbox as InboxIcon,
  FileText as FileTextIcon,
  LayoutDashboard as DashboardIcon,
  Video as VideoIcon,
  Clock as ClockIcon,
  MoreHorizontal as MoreIcon,
  Search as SearchIcon,
  Plus as PlusIcon,
  User as UserIcon,
  Bell as BellIcon,
  Settings as SettingsIcon,
  HelpCircle as HelpIcon,
  LogOut as LogOutIcon,
  Download as DownloadIcon,
  Trash2 as TrashIcon,
  Keyboard as KeyboardIcon,
  Sun as SunIcon,
  Moon as MoonIcon
} from 'lucide-react'

export const Dashboard = () => {
  const { theme, toggleTheme } = useTheme()
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const [selectedSpace, setSelectedSpace] = useState<string | null>(null)

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-slate-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700">
        <div className="h-full flex flex-col">
          {/* 워크스페이스 선택 */}
          <div className="p-4 border-b border-gray-200 dark:border-slate-700">
            <button className="w-full flex items-center justify-between text-left">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-yellow-400 flex items-center justify-center text-white">
                  이
                </div>
                <span className="font-medium">이우기's Workspace</span>
              </div>
            </button>
          </div>

          {/* 메인 메뉴 */}
          <nav className="flex-1 p-4 space-y-1">
            <Link to="/dashboard" className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700">
              <HomeIcon className="w-5 h-5 mr-3" />
              Home
            </Link>
            <Link to="/inbox" className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700">
              <InboxIcon className="w-5 h-5 mr-3" />
              Inbox
            </Link>
            <Link to="/docs" className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700">
              <FileTextIcon className="w-5 h-5 mr-3" />
              Docs
            </Link>
            <Link to="/dashboards" className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700">
              <DashboardIcon className="w-5 h-5 mr-3" />
              Dashboards
            </Link>
            <Link to="/clips" className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700">
              <VideoIcon className="w-5 h-5 mr-3" />
              Clips
            </Link>
            <Link to="/timesheets" className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700">
              <ClockIcon className="w-5 h-5 mr-3" />
              Timesheets
            </Link>
            <button className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 w-full">
              <MoreIcon className="w-5 h-5 mr-3" />
              More
            </button>
          </nav>

          {/* Spaces 섹션 */}
          <div className="p-4 border-t border-gray-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400">Spaces</h2>
              <div className="flex items-center space-x-2">
                <button className="p-1 hover:bg-gray-100 dark:hover:bg-slate-700 rounded">
                  <SearchIcon className="w-4 h-4" />
                </button>
                <button className="p-1 hover:bg-gray-100 dark:hover:bg-slate-700 rounded">
                  <PlusIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="space-y-1">
              <button
                className="w-full flex items-center px-3 py-2 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700"
                onClick={() => setSelectedSpace('everything')}
              >
                <span className="w-5 h-5 mr-3">✨</span>
                Everything
              </button>
              <button
                className="w-full flex items-center px-3 py-2 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700"
                onClick={() => setSelectedSpace('space')}
              >
                <span className="w-5 h-5 mr-3">S</span>
                Space
              </button>
            </div>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700">
          <div className="h-full px-4 flex items-center justify-end space-x-4">
            <button
              className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg"
              onClick={toggleTheme}
            >
              {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            </button>
            
            <div className="relative">
              <button
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="flex items-center space-x-3"
              >
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-white">
                  이
                </div>
              </button>
              
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-slate-800 rounded-lg shadow-lg py-2">
                  <div className="px-4 py-2 border-b border-gray-100 dark:border-slate-700">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-white text-lg">
                        이
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-gray-100">이우기</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Online</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="py-2">
                    <Link to="/profile" className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700">
                      <UserIcon className="w-4 h-4 mr-3" />
                      프로필
                    </Link>
                    <Link to="/settings" className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700">
                      <SettingsIcon className="w-4 h-4 mr-3" />
                      설정
                    </Link>
                    <Link to="/notifications" className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700">
                      <BellIcon className="w-4 h-4 mr-3" />
                      알림 설정
                    </Link>
                    <button className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 w-full">
                      <KeyboardIcon className="w-4 h-4 mr-3" />
                      단축키
                    </button>
                    <Link to="/download" className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700">
                      <DownloadIcon className="w-4 h-4 mr-3" />
                      앱 다운로드
                    </Link>
                    <Link to="/help" className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700">
                      <HelpIcon className="w-4 h-4 mr-3" />
                      도움말
                    </Link>
                    <Link to="/trash" className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700">
                      <TrashIcon className="w-4 h-4 mr-3" />
                      휴지통
                    </Link>
                    <Link to="/" className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700">
                      <LogOutIcon className="w-4 h-4 mr-3" />
                      로그아웃
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto bg-gray-50 dark:bg-slate-900">
          {/* 기존 대시보드 콘텐츠 유지 */}
        </main>
      </div>
    </div>
  )
}