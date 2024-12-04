import { cva } from 'class-variance-authority'

const buttonStyles = cva(
  // 기본 스타일
  'rounded-lg transition-all duration-200 ease-in-out',
  {
    variants: {
      intent: {
        primary: [
          'bg-gradient-to-r',
          'from-blue-600',
          'to-purple-600',
          'text-white',
          'hover:from-blue-700',
          'hover:to-purple-700',
        ],
        secondary: [
          'bg-white/20',
          'backdrop-blur-sm',
          'text-white',
          'hover:bg-white/30',
        ],
      },
      size: {
        small: ['px-4', 'py-2', 'text-sm'],
        medium: ['px-6', 'py-3', 'text-base'],
        large: ['px-8', 'py-4', 'text-lg'],
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'medium',
    },
  }
)

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  intent?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
}

export const Button: React.FC<ButtonProps> = ({
  intent,
  size,
  className,
  ...props
}) => {
  return (
    <button
      className={buttonStyles({ intent, size, className })}
      {...props}
    />
  )
} 