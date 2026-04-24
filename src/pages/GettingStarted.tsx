import { motion } from 'framer-motion'
import { Terminal, Command, FileText, Keyboard } from 'lucide-react'
import { slashCommands, keyboardShortcuts, installCommand, firstRunCommands, claudeMdExample } from '../data/commands'
import CodeBlock from '../components/ui/CodeBlock'
import SectionTitle from '../components/ui/SectionTitle'
import Card from '../components/ui/Card'
import TerminalDemo from '../components/ui/TerminalDemo'

const firstDemo = [
  { type: 'input' as const, text: 'claude' },
  { type: 'output' as const, text: 'ようこそ！何をお手伝いしましょうか？' },
  { type: 'input' as const, text: 'このプロジェクトの概要を教えて' },
  { type: 'action' as const, text: 'プロジェクトのファイルを読み込んでいます...' },
  { type: 'output' as const, text: 'React + TypeScript で作られたECサイトですね。src/pages/ にページ、src/components/ にUIパーツが整理されています。何か作業しましょうか？' },
]

export default function GettingStarted() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <SectionTitle
        title="はじめかた"
        subtitle="インストールから最初の会話まで、5分で使い始められます。"
      />

      {/* Steps overview */}
      <div className="flex flex-col sm:flex-row gap-3 mb-12">
        {[
          { step: '1', label: '必要なものを確認', emoji: '✅' },
          { step: '2', label: 'インストール', emoji: '📦' },
          { step: '3', label: '起動・認証', emoji: '🔑' },
          { step: '4', label: '話しかける', emoji: '💬' },
        ].map(({ step, label, emoji }, i) => (
          <div key={step} className="flex items-center gap-3 flex-1">
            <div className="flex items-center gap-2 flex-1 p-3 rounded-xl border border-[#d0d7de] bg-white">
              <span className="w-6 h-6 rounded-full bg-[#f97316] text-white text-xs font-bold flex items-center justify-center shrink-0">{step}</span>
              <span className="text-sm font-medium text-[#1f2328]">{emoji} {label}</span>
            </div>
            {i < 3 && <span className="text-[#d0d7de] shrink-0 hidden sm:block">→</span>}
          </div>
        ))}
      </div>

      {/* Step 1: Prerequisites */}
      <section className="mb-14">
        <h2 className="text-xl font-bold text-[#1f2328] mb-4 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-[#f97316] text-white text-sm font-bold flex items-center justify-center shrink-0">1</span>
          必要なもの
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              emoji: '🟢',
              title: 'Node.js 18以上',
              desc: 'Claudeを動かすのに必要です。まだ入っていない場合はnodejs.orgからダウンロードしてください。',
              required: true,
              check: 'node --version で確認できます',
            },
            {
              emoji: '👤',
              title: 'Anthropicのアカウント',
              desc: 'claude.ai でアカウントを作成してください。無料で作れます。',
              required: true,
              check: 'Proプランが必要な場合があります',
            },
            {
              emoji: '🔀',
              title: 'Git',
              desc: 'コードの変更履歴を管理するためのツールです。コミットやPR作成機能を使うのに必要です。',
              required: false,
              check: 'git --version で確認できます',
            },
            {
              emoji: '🖥️',
              title: 'ターミナル',
              desc: 'Mac ならターミナル.app、Windows なら PowerShell や WSL を使います。',
              required: false,
              check: '多分すでに使えます',
            },
          ].map(({ emoji, title, desc, required, check }) => (
            <div key={title} className="flex items-start gap-3 p-4 rounded-xl border border-[#d0d7de] bg-white">
              <span className="text-xl shrink-0">{emoji}</span>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm font-semibold text-[#1f2328]">{title}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${required ? 'bg-orange-50 text-[#ea580c] border border-orange-200' : 'bg-[#f6f8fa] text-[#656d76] border border-[#d0d7de]'}`}>
                    {required ? '必須' : '推奨'}
                  </span>
                </div>
                <p className="text-xs text-[#656d76] mb-1 leading-relaxed">{desc}</p>
                <p className="text-xs text-[#8c959f] font-mono">{check}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Step 2: Installation */}
      <section className="mb-14">
        <h2 className="text-xl font-bold text-[#1f2328] mb-2 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-[#f97316] text-white text-sm font-bold flex items-center justify-center shrink-0">2</span>
          インストール
        </h2>
        <p className="text-sm text-[#656d76] mb-4">ターミナルに以下を貼り付けて実行するだけです：</p>
        <CodeBlock code={installCommand} language="bash" />
        <p className="text-xs text-[#8c959f] mt-2">インストールが完了したら、<code className="bg-[#f6f8fa] px-1 rounded border border-[#d0d7de]">claude --version</code> で確認できます。</p>
      </section>

      {/* Step 3: First run */}
      <section className="mb-14">
        <h2 className="text-xl font-bold text-[#1f2328] mb-2 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-[#f97316] text-white text-sm font-bold flex items-center justify-center shrink-0">3</span>
          起動・認証
        </h2>
        <p className="text-sm text-[#656d76] mb-4">
          作業したいプロジェクトのフォルダに移動してから、<code className="text-xs bg-[#f6f8fa] px-1.5 py-0.5 rounded border border-[#d0d7de] text-[#1f2328]">claude</code> と打って起動します。初回はブラウザが開いてAnthropicアカウントでのログインが必要です（一度やれば次回から不要）。
        </p>
        <CodeBlock code={firstRunCommands} language="bash" />
      </section>

      {/* Step 4: First conversation */}
      <section className="mb-14">
        <h2 className="text-xl font-bold text-[#1f2328] mb-2 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-[#f97316] text-white text-sm font-bold flex items-center justify-center shrink-0">4</span>
          話しかけてみる
        </h2>
        <p className="text-sm text-[#656d76] mb-4">起動したら、日本語で話しかけるだけです。最初は「このプロジェクトの概要を教えて」から始めるのがおすすめです。</p>
        <TerminalDemo messages={firstDemo} title="最初の会話例" />
      </section>

      {/* Slash commands */}
      <section className="mb-14">
        <h2 className="text-xl font-bold text-[#1f2328] mb-2 flex items-center gap-2">
          <Command className="h-5 w-5 text-[#f97316]" />
          便利なコマンド（/ から始まる）
        </h2>
        <p className="text-sm text-[#656d76] mb-6">
          会話中に <code className="text-xs bg-[#f6f8fa] px-1.5 py-0.5 rounded border border-[#d0d7de] text-[#1f2328]">/</code> で始まるコマンドを使うと、設定の変更やセッションの管理ができます。
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {slashCommands.map(({ command, description, example }) => (
            <motion.div
              key={command}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card hover={false}>
                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                  <code className="text-sm font-mono font-semibold text-[#f97316] shrink-0">{command}</code>
                  <div className="min-w-0">
                    <p className="text-sm text-[#656d76]">{description}</p>
                    {example && (
                      <p className="text-xs text-[#8c959f] font-mono mt-1 break-all">{example}</p>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CLAUDE.md */}
      <section className="mb-14">
        <h2 className="text-xl font-bold text-[#1f2328] mb-2 flex items-center gap-2">
          <FileText className="h-5 w-5 text-[#f97316]" />
          CLAUDE.md — プロジェクトの説明書
        </h2>
        <p className="text-sm text-[#656d76] mb-4 leading-relaxed">
          プロジェクトのルートフォルダに <code className="text-xs bg-[#f6f8fa] px-1.5 py-0.5 rounded border border-[#d0d7de] text-[#1f2328]">CLAUDE.md</code> というファイルを置くと、Claude Code が起動するたびに自動で読み込みます。「このプロジェクトの技術スタックは〇〇で…」と毎回説明しなくてよくなります。
        </p>
        <CodeBlock code={claudeMdExample} language="markdown" filename="CLAUDE.md" />
        <div className="mt-4 p-4 rounded-xl border border-blue-200 bg-blue-50">
          <p className="text-sm font-semibold text-[#0969da] mb-1">💡 /init で自動生成できます</p>
          <p className="text-sm text-[#656d76]">
            既存のプロジェクトなら、<code className="text-xs bg-white px-1.5 py-0.5 rounded border border-[#d0d7de] text-[#1f2328]">/init</code> コマンドを打つと Claude Code がプロジェクトを自動で解析して CLAUDE.md の雛形を作ってくれます。
          </p>
        </div>
      </section>

      {/* Keyboard shortcuts */}
      <section>
        <h2 className="text-xl font-bold text-[#1f2328] mb-6 flex items-center gap-2">
          <Keyboard className="h-5 w-5 text-[#f97316]" />
          キーボードショートカット
        </h2>
        <div className="rounded-xl border border-[#d0d7de] bg-white overflow-hidden overflow-x-auto">
          <table className="w-full min-w-[480px]">
            <thead>
              <tr className="border-b border-[#d0d7de] bg-[#f6f8fa]">
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#8c959f] uppercase tracking-wider">キー</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#8c959f] uppercase tracking-wider">何をするか</th>
              </tr>
            </thead>
            <tbody>
              {keyboardShortcuts.map(({ keys, description }, i) => (
                <tr key={i} className="border-b border-[#d0d7de] last:border-0 hover:bg-[#f6f8fa] transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1 flex-wrap">
                      {keys.map((key, j) => (
                        <span key={j}>
                          <kbd className="px-2 py-0.5 rounded bg-white border border-[#d0d7de] text-xs font-mono text-[#1f2328] shadow-sm">
                            {key}
                          </kbd>
                          {j < keys.length - 1 && <span className="text-[#8c959f] mx-1">+</span>}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-[#656d76]">{description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
