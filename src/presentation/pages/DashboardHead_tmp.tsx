import { useTheme } from '@theme/ThemeProvider'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Profile } from '@pages/profile'
import { 
  Home as HomeIcon,
  Sun as SunIcon,
  Moon as MoonIcon,
} from 'lucide-react'

export const DashboardHead = () => {
  const { theme, toggleTheme } = useTheme()
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  const toggleMenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu)
  }

  return (
    <div>
    {/* Header */}
    <header className="h-16 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700">
        <div className="h-full px-4 flex items-center justify-end space-x-4">

        {/* 홈 버튼 */}
        <Link to="/" className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700">
            <HomeIcon className="w-5 h-5" />
        </Link>

        {/* 테마 변경 버튼 */}
        <button
            className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg"
            onClick={toggleTheme}
        >
            {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
        </button>
        
        {/* 프로필 메뉴 */}
        <div className="relative">
            <button
            onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            className="flex items-center space-x-3"
            >
            <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-white">
                이
            </div>
            </button>
            
            {/* 프로필 메뉴 오픈 시 표시 */}
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
                {/* 프로필 페이지 */}
                <Profile /> 
                </div>
            </div>
            )}
        </div>
        </div>
    </header>
    </div>
  )
}