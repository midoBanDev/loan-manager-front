import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/home/Home'
import { Dashboard } from '../pages/dashboard/Dashboard'
import { Login } from '../pages/auth/Login'
import { SignUp } from '../pages/auth/SignUp'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <SignUp />
  }
]) 