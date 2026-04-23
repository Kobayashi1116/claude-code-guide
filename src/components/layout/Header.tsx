import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Terminal } from 'lucide-react'

const navItems = [
  { to: '/', label: 'ホーム' },
  { to: '/features', label: 'できること' },
  { to: '/skills', label: 'スキル' },
  { to: '/getting-started', label: 'はじめかた' },
  { to: '/mcp', label: 'MCP' },
  { to: '/tips', label: 'Tips' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#d0d7de] bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-[#1f2328] hover:text-[#f97316] transition-colors">
            <Terminal className="h-5 w-5 text-[#f97316]" />
            <span className="font-semibold text-sm">Claude Code ガイド</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-md text-sm transition-colors ${
                    isActive
                      ? 'text-[#f97316] bg-[rgba(249,115,22,0.08)]'
                      : 'text-[#656d76] hover:text-[#1f2328] hover:bg-[#f6f8fa]'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#656d76] hover:text-[#1f2328] transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="メニュー"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="md:hidden border-t border-[#d0d7de] py-3 space-y-1">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-sm transition-colors ${
                    isActive
                      ? 'text-[#f97316] bg-[rgba(249,115,22,0.08)]'
                      : 'text-[#656d76] hover:text-[#1f2328] hover:bg-[#f6f8fa]'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
