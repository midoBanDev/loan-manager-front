import { Sidemenu } from './Sidemenu'
import { DashboardHead } from './DashboardHead'
import { useState, createElement } from 'react'

// 임시 컴포넌트들
const PersonCreate = () => <div>고객 등록 컴포넌트</div>
const PersonList = () => <div>고객 목록 컴포넌트</div>
const ApplyCreate = () => <div>신청서 등록 컴포넌트</div>
const ApplyList = () => <div>신청서 목록 컴포넌트</div>
const ApplyAttachList = () => <div>첨부파일 목록 컴포넌트</div>
const LoanList = () => <div>계약 리스트 컴포넌트</div>
const LoanOverdue = () => <div>연체 리스트 컴포넌트</div>
const LoanDeposit = () => <div>입금 리스트 컴포넌트</div>
const SmsSendList = () => <div>SMS 발송 리스트 컴포넌트</div>
const SmsMessageManage = () => <div>SMS 메시지 관리 컴포넌트</div>

export const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null)

  // 컴포넌트 매핑
  const componentMap: { [key: string]: React.ComponentType } = {
    'person/create': PersonCreate,
    'person/list': PersonList,
    'apply/create': ApplyCreate,
    'apply/list': ApplyList,
    'apply/attachlist': ApplyAttachList,
    'loan/list': LoanList,
    'loan/overdue': LoanOverdue,
    'loan/deposit': LoanDeposit,
    'sms/sendlist': SmsSendList,
    'sms/messagemanage': SmsMessageManage,
  }

  const handleMenuClick = (componentKey: string) => {
    setActiveComponent(componentKey)
  }

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-slate-900">
      {/* Sidebar */}
      <Sidemenu onMenuClick={handleMenuClick} />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <DashboardHead />

        {/* Main Content */}
        <main className="flex-1 overflow-auto bg-gray-50 dark:bg-slate-900 p-6">
          {activeComponent && componentMap[activeComponent] ? (
            createElement(componentMap[activeComponent])
          ) : (
            <div className="text-center text-gray-500 mt-10">
              왼쪽 메뉴에서 항목을 선택해주세요
            </div>
          )}
        </main>
      </div>
    </div>
  )
}