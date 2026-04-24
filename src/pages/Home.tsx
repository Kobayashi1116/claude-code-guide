import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Terminal, Zap, BookOpen, Puzzle, Settings, Lightbulb, ArrowRight, ChevronRight } from 'lucide-react'
import Card from '../components/ui/Card'
import TerminalDemo from '../components/ui/TerminalDemo'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
}

const navCards = [
  {
    to: '/features',
    icon: Zap,
    emoji: '⚡',
    title: 'できること',
    description: '8つの機能を、実際の会話例つきで紹介します。',
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
  },
  {
    to: '/skills',
    icon: Puzzle,
    emoji: '🧩',
    title: 'スキル',
    description: 'Claude Code の機能を拡張できる「スキル」の仕組みを解説します。',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
  },
  {
    to: '/getting-started',
    icon: BookOpen,
    emoji: '🚀',
    title: 'はじめかた',
    description: 'インストールから最初の一歩まで、手順を追って説明します。',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    to: '/mcp',
    icon: Settings,
    emoji: '🔌',
    title: 'MCP連携',
    description: 'GitHubやDBなど外部サービスと繋げる方法を紹介します。',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    to: '/tips',
    icon: Lightbulb,
    emoji: '💡',
    title: 'Tips',
    description: 'うまく使うコツと、よくある失敗の対処法をまとめました。',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
  },
]

const heroDemo = [
  { type: 'input' as const, text: 'このコンポーネント、テストが全部失敗してる。直して' },
  { type: 'action' as const, text: 'src/components/Button.tsx を読み込んでいます...' },
  { type: 'action' as const, text: 'テストファイルを確認しています...' },
  { type: 'output' as const, text: '原因がわかりました。クリックイベントの型が string になっていますが、MouseEvent が正しいです。修正します。' },
  { type: 'success' as const, text: 'Button.tsx を修正しました' },
  { type: 'success' as const, text: 'テスト実行: 5件すべて通過 ✅' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <motion.div initial="hidden" animate="visible">
              <motion.div custom={0} variants={fadeUp} className="mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-[rgba(249,115,22,0.1)] text-[#ea580c] border border-[rgba(249,115,22,0.25)]">
                  <Terminal className="h-3.5 w-3.5" />
                  Claude Code 日本語ガイド
                </span>
              </motion.div>

              <motion.h1 custom={1} variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1f2328] leading-tight mb-5">
                「コードを書いて」と<br />
                <span className="text-[#f97316]">話しかけるだけ</span>で<br />
                AIが実際に作業する
              </motion.h1>

              <motion.p custom={2} variants={fadeUp} className="text-base sm:text-lg text-[#656d76] leading-relaxed mb-6">
                Claude Code はターミナルで動くAIアシスタントです。コードを書いたり、バグを直したり、GitにコミットしたりをAIが代わりにやってくれます。プラグインのインストール不要、ターミナルを開くだけで使えます。
              </motion.p>

              <motion.div custom={3} variants={fadeUp} className="flex flex-wrap gap-3">
                <Link
                  to="/getting-started"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#f97316] text-white font-semibold hover:bg-[#ea580c] transition-colors shadow-sm"
                >
                  使い始める
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/features"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#d0d7de] text-[#1f2328] font-semibold hover:bg-[#f6f8fa] transition-colors"
                >
                  何ができるか見る
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: terminal demo */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <TerminalDemo messages={heroDemo} title="claude — プロジェクト作業中" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is Claude Code */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2328] mb-3">Claude Code ってどんなもの？</h2>
          <p className="text-[#656d76] text-base sm:text-lg max-w-2xl mx-auto">
            ひとことで言うと「ターミナルで動くAIプログラマー」です。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              emoji: '💬',
              title: '日本語で話しかけるだけ',
              description: '「ログイン機能を作って」「このバグを直して」と普通の言葉で伝えると、Claudeがコードを書いて変更を加えてくれます。コマンドの書き方を覚えなくてOK。',
            },
            {
              emoji: '🔍',
              title: 'プロジェクト全体を把握してる',
              description: 'プロジェクトのファイルをすべて読んだ上で作業するので、「このコンポーネントはどこから使われてる？」みたいな質問にも答えられます。',
            },
            {
              emoji: '🛠️',
              title: '実際に動かして確認する',
              description: 'テストを実行して失敗したら自分で直す、ビルドしてエラーが出たら対処するなど、確認→修正を繰り返しながら作業を完成させます。',
            },
          ].map(({ emoji, title, description }) => (
            <div key={title} className="p-6 rounded-xl border border-[#d0d7de] bg-white text-center">
              <div className="text-4xl mb-4">{emoji}</div>
              <h3 className="font-semibold text-[#1f2328] mb-2">{title}</h3>
              <p className="text-sm text-[#656d76] leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* Flow diagram */}
        <div className="rounded-2xl border border-[#d0d7de] bg-[#f6f8fa] p-6 sm:p-8">
          <p className="text-sm font-semibold text-[#656d76] text-center mb-6 uppercase tracking-wider">使うときのイメージ</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-2">
            {[
              { emoji: '🧑‍💻', label: 'あなたが指示する', sub: '日本語でOK' },
              null,
              { emoji: '🤖', label: 'Claude Code', sub: 'AIが作業する' },
              null,
              { emoji: '📂', label: 'ファイルを編集', sub: 'コードを書く' },
            ].map((item, i) =>
              item === null ? (
                <div key={i} className="text-2xl text-[#d0d7de] rotate-90 sm:rotate-0">→</div>
              ) : (
                <div key={i} className="flex flex-col items-center gap-1 px-5 py-3 rounded-xl bg-white border border-[#d0d7de] min-w-[120px] text-center">
                  <span className="text-2xl">{item.emoji}</span>
                  <span className="text-xs font-semibold text-[#1f2328]">{item.label}</span>
                  <span className="text-xs text-[#8c959f]">{item.sub}</span>
                </div>
              )
            )}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-2 mt-3">
            {[
              null,
              null,
              null,
              null,
              { emoji: '🔀', label: 'Gitにコミット', sub: '履歴を管理' },
            ].map((item, i) =>
              item === null ? (
                <div key={i} className="hidden sm:block min-w-[120px]" />
              ) : (
                <div key={i} className="flex flex-col items-center gap-1 px-5 py-3 rounded-xl bg-white border border-[#d0d7de] min-w-[120px] text-center sm:ml-2">
                  <span className="text-2xl">{item.emoji}</span>
                  <span className="text-xs font-semibold text-[#1f2328]">{item.label}</span>
                  <span className="text-xs text-[#8c959f]">{item.sub}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Navigation cards */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <h2 className="text-xl font-bold text-[#1f2328] mb-6">もっと詳しく知る</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {navCards.map(({ to, icon: Icon, emoji, title, description, color, bg }, i) => (
            <motion.div
              key={to}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
            >
              <Link to={to} className="block group">
                <Card className="h-full">
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${bg} flex items-center justify-center text-xl`}>
                      {emoji}
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
