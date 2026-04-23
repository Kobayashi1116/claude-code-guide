import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Terminal, Zap, BookOpen, Puzzle, Settings, Lightbulb, ArrowRight, ChevronRight } from 'lucide-react'
import Card from '../components/ui/Card'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
}

const navCards = [
  {
    to: '/features',
    icon: Zap,
    title: 'できること',
    description: 'コード生成からCI/CD連携まで、Claude Codeの全機能を解説します。',
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
  },
  {
    to: '/skills',
    icon: Puzzle,
    title: 'スキル',
    description: 'SKILL.mdで拡張できるスキル機能の仕組みと活用法を紹介します。',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
  },
  {
    to: '/getting-started',
    icon: BookOpen,
    title: 'はじめかた',
    description: 'インストールから基本操作まで、ステップバイステップで解説します。',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    to: '/mcp',
    icon: Settings,
    title: 'MCP連携',
    description: 'MCPサーバーと連携してデータベースや外部APIにアクセスする方法。',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    to: '/tips',
    icon: Lightbulb,
    title: 'Tips',
    description: 'ベストプラクティスとよくあるミスの対処法をまとめました。',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div custom={0} variants={fadeUp} className="mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-[rgba(249,115,22,0.1)] text-[#ea580c] border border-[rgba(249,115,22,0.25)]">
                <Terminal className="h-3.5 w-3.5" />
                Claude Code 日本語ガイド
              </span>
            </motion.div>

            <motion.h1 custom={1} variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1f2328] leading-tight mb-6">
              AIと一緒に<br />
              <span className="text-[#f97316]">コードを書く</span>、<br />
              新しい開発体験
            </motion.h1>

            <motion.p custom={2} variants={fadeUp} className="text-lg text-[#656d76] leading-relaxed mb-8 max-w-2xl">
              Claude Codeはターミナルから直接使えるAIコーディングアシスタントです。
              コード生成・編集・リファクタリングから、Git操作・CI/CD連携まで、
              開発ワークフロー全体をサポートします。
            </motion.p>

            <motion.div custom={3} variants={fadeUp} className="flex flex-wrap gap-4">
              <Link
                to="/getting-started"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#f97316] text-white font-semibold hover:bg-[#ea580c] transition-colors shadow-sm"
              >
                はじめかたを見る
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/features"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#d0d7de] text-[#1f2328] font-semibold hover:bg-[#f6f8fa] transition-colors"
              >
                できることを見る
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What is Claude Code */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl border border-[#d0d7de] bg-[#f6f8fa] p-8 sm:p-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[rgba(249,115,22,0.1)] flex items-center justify-center">
              <Terminal className="h-5 w-5 text-[#f97316]" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#1f2328] mb-2">Claude Codeとは</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'ターミナルで動く',
                description: 'IDEプラグインではなく、ターミナルから直接使えるCLIツールです。既存のワークフローに自然に組み込めます。',
              },
              {
                title: 'コードベース全体を理解',
                description: 'プロジェクト全体のファイルを読み込み、コンテキストを理解した上でコードを生成・編集します。',
              },
              {
                title: '実際にコードを実行',
                description: 'テストの実行、ビルド、Gitコマンドなど、実際のツールを操作して結果を確認しながら作業します。',
              },
            ].map(({ title, description }) => (
              <div key={title} className="p-4 rounded-lg bg-white border border-[#d0d7de]">
                <h3 className="text-sm font-semibold text-[#1f2328] mb-2">{title}</h3>
                <p className="text-sm text-[#656d76] leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation cards */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <h2 className="text-xl font-bold text-[#1f2328] mb-6">コンテンツを探す</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {navCards.map(({ to, icon: Icon, title, description, color, bg }, i) => (
            <motion.div
              key={to}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
            >
              <Link to={to} className="block group">
                <Card className="h-full">
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${bg} flex items-center justify-center ${color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-[#1f2328]">{title}</h3>
                        <ChevronRight className="h-4 w-4 text-[#8c959f] group-hover:text-[#f97316] transition-colors flex-shrink-0" />
                      </div>
                      <p className="text-sm text-[#656d76] leading-relaxed">{description}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
