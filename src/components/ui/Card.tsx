import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`
        rounded-xl border border-[#d0d7de] bg-white p-6
        ${hover ? 'hover:border-[#f97316]/50 hover:shadow-sm transition-all duration-200' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
