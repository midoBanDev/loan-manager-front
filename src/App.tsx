import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './presentation/theme/ThemeProvider'
import { router } from './presentation/router'
import { GoogleOAuthProvider } from '@react-oauth/google'

const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID || ''

function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <ThemeProvider>
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <RouterProvider router={router} />
        </div>
      </ThemeProvider>
    </GoogleOAuthProvider>
  )
}

export default App
