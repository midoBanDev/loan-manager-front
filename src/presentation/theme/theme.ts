export const theme = {
  colors: {
    gradients: {
      success: {
        primary: 'from-emerald-500 to-green-400',
        hover: 'from-emerald-600 to-green-500',
      },
      info: {
        primary: 'from-blue-500 to-cyan-400',
        hover: 'from-blue-600 to-cyan-500',
      },
      warning: {
        primary: 'from-amber-500 to-yellow-400',
        hover: 'from-amber-600 to-yellow-500',
      },
      special: {
        primary: 'from-purple-500 to-indigo-400',
        hover: 'from-purple-600 to-indigo-500',
      },
    },
    solid: {
      primary: {
        emerald: '#10B981',
        blue: '#3B82F6',
        purple: '#8B5CF6',
        amber: '#F59E0B',
      },
      text: {
        primary: '#1E293B',
        secondary: '#64748B',
        onGradient: '#FFFFFF',
        subtle: 'rgba(255, 255, 255, 0.7)',
      },
      status: {
        success: '#10B981',
        error: '#EF4444',
        warning: '#F59E0B',
        info: '#3B82F6',
      },
    },
  },
  typography: {
    fontFamily: {
      primary: 'Pretendard',
      secondary: 'Inter',
    },
    fontSize: {
      display: 'text-5xl',
      h1: 'text-4xl',
      h2: 'text-3xl',
      h3: 'text-2xl',
      h4: 'text-xl',
      bodyLarge: 'text-lg',
      body: 'text-base',
      small: 'text-sm',
      tiny: 'text-xs',
    },
  },
  // ... 추가 테마 설정
} 