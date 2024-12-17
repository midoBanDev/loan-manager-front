import { Sidemenu } from '@pages/Sidemenu'
import { Dashboardhead } from '@pages/Dashboardhead'

export const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-slate-900">
      {/* Sidebar */}
      <Sidemenu />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Dashboardhead />

        {/* Main Content */}
        <main className="flex-1 overflow-auto bg-gray-50 dark:bg-slate-900">
          {/* 기존 대시보드 콘텐츠 유지 */}

          여기에 컴포넌트 추가
        </main>
      </div>
    </div>
  )
}