import { Terminal, GitFork, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-[#d0d7de] bg-[#f6f8fa] mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Terminal className="h-5 w-5 text-[#f97316]" />
              <span className="font-semibold text-[#1f2328]">Claude Code ガイド</span>
            </div>
            <p className="text-sm text-[#656d76] leading-relaxed">
              Claude Codeの機能・使い方を日本語で解説する教育サイトです。
              初めてClaude Codeを使う方から上級者まで役立てていただけます。
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#1f2328] mb-3">コンテンツ</h3>
            <ul className="space-y-2">
              {[
                { to: '/features', label: 'できること' },
                { to: '/skills', label: 'スキル' },
                { to: '/getting-started', label: 'はじめかた' },
                { to: '/mcp', label: 'MCPサーバー連携' },
                { to: '/tips', label: 'Tips & ベストプラクティス' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-[#656d76] hover:text-[#f97316] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#1f2328] mb-3">公式リソース</h3>
            <ul className="space-y-2">
              {[
                { href: 'https://claude.ai', label: 'Claude.ai' },
                { href: 'https://www.anthropic.com', label: 'Anthropic' },
                { href: 'https://docs.anthropic.com', label: 'Anthropic ドキュメント' },
                { href: 'https://github.com/anthropics/claude-code', label: 'GitHub (claude-code)' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#656d76] hover:text-[#f97316] transition-colors flex items-center gap-1"
                  >
                    {label}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#d0d7de] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#8c959f]">
            このサイトはClaude Codeの教育目的で作成されたファンサイトです。Anthropic公式サイトではありません。
          </p>
          <a
            href="https://github.com/anthropics/claude-code"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#656d76] hover:text-[#1f2328] transition-colors"
          >
            <GitFork className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
