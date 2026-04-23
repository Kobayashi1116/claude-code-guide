import { ReactNode } from 'react'

type BadgeVariant = 'default' | 'accent' | 'success' | 'warning' | 'info'

interface BadgeProps {
  children: ReactNode
  variant?: BadgeVariant
}

const variants: Record<BadgeVariant, string> = {
  default: 'bg-[#f6f8fa] text-[#656d76] border border-[#d0d7de]',
  accent: 'bg-[rgba(249,115,22,0.08)] text-[#c2410c] border border-[rgba(249,115,22,0.3)]',
  success: 'bg-[rgba(31,136,61,0.08)] text-[#1a7f37] border border-[rgba(31,136,61,0.3)]',
  warning: 'bg-[rgba(154,103,0,0.08)] text-[#9a6700] border border-[rgba(154,103,0,0.3)]',
  info: 'bg-[rgba(9,105,218,0.08)] text-[#0969da] border border-[rgba(9,105,218,0.3)]',
}

export default function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  )
}
