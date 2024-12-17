import { Link } from 'react-router-dom'
import { AuthAPI } from '@api/auth'
import { 
  User as UserIcon, 
  Bell as BellIcon,
  Settings as SettingsIcon,
  HelpCircle as HelpIcon,
  LogOut as LogOutIcon,
} from 'lucide-react'

export const Profile = () => {

  const handleLogout = () => {
    AuthAPI.googleLogout()
    localStorage.setItem('isLoggedIn', 'false')
    
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('tokenType')
    localStorage.removeItem('accessTokenExpiresIn')
    localStorage.removeItem('refreshTokenExpiresIn')
  } 

  return (              
  <div className="py-1">
    <Link to="/profile" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
      <UserIcon className="w-4 h-4 mr-3" />
      계정
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
                    
  )
} 