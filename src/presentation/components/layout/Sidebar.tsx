import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  HomeIcon,
  AdjustmentsHorizontalIcon,
  UsersIcon,
  BookOpenIcon,
  UserIcon,
  BellIcon,
  ChevronDownIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/24/outline'

interface MenuItem {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  path?: string
  subItems?: {
    id: string
    label: string
    path: string
  }[]
}

const menuItems: MenuItem[] = [
  {
    id: 'dashboard',
    label: '대시보드',
    icon: HomeIcon,
    path: '/'
  },
  {
    id: 'goals',
    label: '목표 관리',
    icon: AdjustmentsHorizontalIcon,
    subItems: [
      { id: 'goals-list', label: '목표 목록', path: '/goals' },
      { id: 'goals-create', label: '목표 생성', path: '/goals/create' },
      { id: 'goals-analytics', label: '목표 분석', path: '/goals/analytics' }
    ]
  },
  {
    id: 'community',
    label: '커뮤니티',
    icon: UsersIcon,
    subItems: [
      { id: 'groups', label: '그룹', path: '/community/groups' },
      { id: 'challenges', label: '챌린지', path: '/community/challenges' },
      { id: 'mentoring', label: '멘토링', path: '/community/mentoring' }
    ]
  },
  {
    id: 'learning',
    label: '학습/콘텐츠',
    icon: BookOpenIcon,
    subItems: [
      { id: 'courses', label: '강의', path: '/learning/courses' },
      { id: 'articles', label: '아티클', path: '/learning/articles' },
      { id: 'webinars', label: '웨비나', path: '/learning/webinars' }
    ]
  },
  {
    id: 'profile',
    label: '프로필/설정',
    icon: UserIcon,
    subItems: [
      { id: 'profile-info', label: '내 정보', path: '/profile' },
      { id: 'settings', label: '환경설정', path: '/profile/settings' },
      { id: 'subscription', label: '구독관리', path: '/profile/subscription' }
    ]
  },
  {
    id: 'notifications',
    label: '알림센터',
    icon: BellIcon,
    path: '/notifications'
  }
]

interface SidebarProps {
  isCollapsed: boolean
  onCollapse: () => void
}

export const Sidebar = ({ isCollapsed, onCollapse }: SidebarProps) => {
  const location = useLocation()
  const [openMenus, setOpenMenus] = useState<string[]>([])
  
  const isActive = (path: string) => location.pathname === path
  
  const toggleMenu = (menuId: string) => {
    if (isCollapsed) return
    setOpenMenus(prev =>
      prev.includes(menuId)
        ? prev.filter(id => id !== menuId)
        : [...prev, menuId]
    )
  }

  const isMenuOpen = (menuId: string) => openMenus.includes(menuId)

  return (
    <aside 
      className={`${
        isCollapsed ? 'w-16' : 'w-64'
      } min-h-screen bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border-r border-slate-200 dark:border-slate-700 transition-all duration-300`}
    >
      {/* 로고 영역 */}
      <div className="h-16 flex items-center justify-between px-6">
        {!isCollapsed && (
          <Link to="/" className="text-lg font-semibold text-slate-800 dark:text-slate-100">
            GrowTogether
          </Link>
        )}
        <button
          onClick={onCollapse}
          className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300"
        >
          {isCollapsed ? (
            <ChevronDoubleRightIcon className="w-5 h-5" />
          ) : (
            <ChevronDoubleLeftIcon className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* 메뉴 목록 */}
      <nav className={`px-3 space-y-1 ${isCollapsed ? 'px-2' : 'px-3'}`}>
        {menuItems.map(item => (
          <div key={item.id}>
            {item.path ? (
              <Link
                to={item.path}
                className={`
                  flex items-center gap-3 px-3 py-2 rounded-lg
                  ${isCollapsed ? 'justify-center' : ''}
                  ${isActive(item.path)
                    ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }
                `}
                title={isCollapsed ? item.label : undefined}
              >
                <item.icon className="w-5 h-5" />
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
            ) : (
              <div className="space-y-1">
                <button
                  onClick={() => toggleMenu(item.id)}
                  className={`
                    w-full flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} px-3 py-2 rounded-lg
                    text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700
                  `}
                  title={isCollapsed ? item.label : undefined}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5" />
                    {!isCollapsed && <span>{item.label}</span>}
                  </div>
                  {!isCollapsed && (
                    <ChevronDownIcon 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isMenuOpen(item.id) ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </button>
                {!isCollapsed && isMenuOpen(item.id) && item.subItems && (
                  <div className="ml-4 pl-4 border-l border-slate-200 dark:border-slate-700 space-y-1">
                    {item.subItems.map(subItem => (
                      <Link
                        key={subItem.id}
                        to={subItem.path}
                        className={`
                          block px-3 py-2 rounded-lg text-sm
                          ${isActive(subItem.path)
                            ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
                            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                          }
                        `}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  )
} 