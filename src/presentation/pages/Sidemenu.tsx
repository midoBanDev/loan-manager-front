import { useTheme } from '@theme/ThemeProvider'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { 
  FileText as FileTextIcon,
  Plus as PlusIcon,
  User as UserIcon,
  Sun as SunIcon,
  Moon as MoonIcon,
  ChevronLeft as CollapseIcon,
  ChevronRight as ExpandIcon,
  BookOpen as BookOpenIcon
} from 'lucide-react'

export const Sidemenu = () => {
  const { theme, toggleTheme } = useTheme()
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  const toggleMenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu)
  }

  return (
    <aside className={`${isSidebarCollapsed ? 'w-20' : 'w-64'} bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700 transition-all duration-300`}>
    <div className="h-full flex flex-col">
        {/* 워크스페이스 헤더 */}
        <div className="h-16 p-4 border-b border-gray-200 dark:border-slate-700 flex items-center justify-between">
            {!isSidebarCollapsed && (
                <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-blue-400 flex items-center justify-center text-white">
                    G
                </div>
                <span className="font-medium">GrowTogether</span>
                </div>
            )}
            <button 
                onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg"
            >
                {isSidebarCollapsed ? <ExpandIcon className="w-5 h-5" /> : <CollapseIcon className="w-5 h-5" />}
            </button>
        </div>

        {/* 메인 메뉴 */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {/* 고객 관리 */}
            <div>
                <button 
                onClick={() => toggleMenu('person')}
                className="w-full flex items-center px-3 py-2 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700"
                >
                <UserIcon className="w-5 h-5" />
                {!isSidebarCollapsed && (
                    <>
                    <span className="ml-3 flex-1 text-left">고객 관리</span>
                    <PlusIcon className="w-4 h-4" />
                    </>
                )}
                </button>
                {!isSidebarCollapsed && activeMenu === 'person' && (
                    <div className="ml-4 mt-1 space-y-1">
                        <Link to="/person/create" className="flex items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700">
                        고객 등록
                        </Link>
                        <Link to="/person/list" className="flex items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700">
                        고객 목록
                        </Link>
                    </div>
                )}
            </div>

            {/* 신청 관리 */}
            <div>
                <button 
                onClick={() => toggleMenu('apply')}
                className="w-full flex items-center px-3 py-2 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700"
                >
                <FileTextIcon className="w-5 h-5" />
                {!isSidebarCollapsed && (
                    <>
                    <span className="ml-3 flex-1 text-left">신청 관리</span>
                    <PlusIcon className="w-4 h-4" />
                    </>
                )}
                </button>
                {!isSidebarCollapsed && activeMenu === 'apply' && (
                    <div className="ml-4 mt-1 space-y-1">
                        <Link to="/apply/create" className="flex items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700">
                        신청서 등록
                        </Link>
                        <Link to="/apply/list" className="flex items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700">
                        신청서 목록
                        </Link>
                        <Link to="/apply/attachlist" className="flex items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700">
                        첨부파일 목록
                        </Link>
                    </div>
                )}
            </div>

            {/* 채권 관리 */}
            <div>
                <button 
                onClick={() => toggleMenu('loan')}
                className="w-full flex items-center px-3 py-2 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700"
                >
                <UserIcon className="w-5 h-5" />
                {!isSidebarCollapsed && (
                    <>
                    <span className="ml-3 flex-1 text-left">채권 관리</span>
                    <PlusIcon className="w-4 h-4" />
                    </>
                )}
                </button>
                {!isSidebarCollapsed && activeMenu === 'loan' && (
                <div className="ml-4 mt-1 space-y-1">
                    <Link to="/community/groups" className="flex items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700">
                    계약 리스트
                    </Link>
                    <Link to="/community/challenges" className="flex items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700">
                    연체 리스트
                    </Link>
                    <Link to="/community/mentoring" className="flex items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700">
                    입금 리스트
                    </Link>
                </div>
                )}
            </div>

            {/* SMS 관리 */}
            <div>
                <button 
                onClick={() => toggleMenu('sms')}
                className="w-full flex items-center px-3 py-2 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700"
                >
                <BookOpenIcon className="w-5 h-5" />
                {!isSidebarCollapsed && (
                    <>
                    <span className="ml-3 flex-1 text-left">SMS 관리</span>
                    <PlusIcon className="w-4 h-4" />
                    </>
                )}
                </button>
                {!isSidebarCollapsed && activeMenu === 'sms' && (
                <div className="ml-4 mt-1 space-y-1">
                    <Link to="/sms/sendlist" className="flex items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700">
                    SMS 발송 리스트
                    </Link>
                    <Link to="/sms/messagemanage" className="flex items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700">
                    SMS 메시지 관리
                    </Link>
                </div>
                )}
            </div>
        </nav>

        {/* 하단 메뉴 */}
        <div className="p-4 border-t border-gray-200 dark:border-slate-700">
        <button
            className="w-full flex items-center px-3 py-2 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700"
            onClick={toggleTheme}
        >
            {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            {!isSidebarCollapsed && <span className="ml-3">테마 변경</span>}
        </button>
        </div>
    </div>
    </aside>
  )
}