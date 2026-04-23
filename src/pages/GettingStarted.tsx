import { motion } from 'framer-motion'
import { Terminal, Command, FileText, Keyboard } from 'lucide-react'
import { slashCommands, keyboardShortcuts, installCommand, firstRunCommands, claudeMdExample } from '../data/commands'
import CodeBlock from '../components/ui/CodeBlock'
import SectionTitle from '../components/ui/SectionTitle'
import Card from '../components/ui/Card'

export default function GettingStarted() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <SectionTitle
        title="はじめかた"
        subtitle="Claude Codeのインストールから基本操作まで、ステップバイステップで解説します。"
      />

      {/* Prerequisites */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-[#1f2328] mb-4 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-[#f97316] text-white text-sm font-bold flex items-center justify-center">1</span>
          必要な環境
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: 'Node.js 18以上', desc: 'Node.js公式サイトからインストール。nvm推奨。', required: true },
            { title: 'Anthropicアカウント', desc: 'claude.ai でアカウントを作成してください。', required: true },
            { title: 'Git（推奨）', desc: 'Git操作機能を使うために必要です。', required: false },
            { title: 'Terminal', desc: 'bash / zsh / PowerShell などのターミナル環境。', required: false },
          ].map(({ title, desc, required }) => (
            <div key={title} className="flex items-start gap-3 p-4 rounded-lg border border-[#d0d7de] bg-white">
              <span className={`flex-shrink-0 text-xs font-medium px-2 py-0.5 rounded-full ${required ? 'bg-orange-50 text-[#ea580c] border border-[rgba(249,115,22,0.25)]' : 'bg-[#f6f8fa] text-[#656d76] border border-[#d0d7de]'}`}>
                {required ? '必須' : '推奨'}
              </span>
              <div>
                <p className="text-sm font-semibold text-[#1f2328]">{title}</p>
                <p className="text-xs text-[#656d76] mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-[#1f2328] mb-4 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-[#f97316] text-white text-sm font-bold flex items-center justify-center">2</span>
          インストール
        </h2>
        <p className="text-sm text-[#656d76] mb-4">npmでグローバルインストールします：</p>
        <CodeBlock code={installCommand} language="bash" />
      </section>

      {/* First run */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-[#1f2328] mb-4 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-[#f97316] text-white text-sm font-bold flex items-center justify-center">3</span>
          初回起動・認証
        </h2>
        <p className="text-sm text-[#656d76] mb-4">
          プロジェクトディレクトリで <code className="text-xs bg-[#f6f8fa] px-1.5 py-0.5 rounded border border-[#d0d7de] text-[#1f2328]">claude</code> コマンドを実行します。
          初回はブラウザが開き、Anthropicアカウントでの認証が求められます。
        </p>
        <CodeBlock code={firstRunCommands} language="bash" />
      </section>

      {/* Slash commands */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-[#1f2328] mb-2 flex items-center gap-2">
          <Command className="h-5 w-5 text-[#f97316]" />
          スラッシュコマンド一覧
        </h2>
        <p className="text-sm text-[#656d76] mb-6">
          Claude Codeの対話セッション中に <code className="text-xs bg-[#f6f8fa] px-1.5 py-0.5 rounded border border-[#d0d7de] text-[#1f2328]">/</code> から始まるコマンドを使用できます。
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
      <section className="mb-16">
        <h2 className="text-xl font-bold text-[#1f2328] mb-2 flex items-center gap-2">
          <FileText className="h-5 w-5 text-[#f97316]" />
          CLAUDE.md の活用法
        </h2>
        <p className="text-sm text-[#656d76] mb-4 leading-relaxed">
          プロジェクトのルートに <code className="text-xs bg-[#f6f8fa] px-1.5 py-0.5 rounded border border-[#d0d7de] text-[#1f2328]">CLAUDE.md</code> を置くと、
          Claude Codeが起動時に自動で読み込みます。技術スタック、開発ルール、よく使うコマンドなどを記述しておくことで、
          毎回同じ説明をする手間が省けます。
        </p>
        <CodeBlock code={claudeMdExample} language="markdown" filename="CLAUDE.md" />
        <div className="mt-4 p-4 rounded-lg border border-[rgba(9,105,218,0.2)] bg-blue-50">
          <p className="text-sm text-[#0969da] font-medium mb-1">ヒント: /init コマンド</p>
          <p className="text-sm text-[#656d76]">
            <code className="text-xs bg-white px-1.5 py-0.5 rounded border border-[#d0d7de] text-[#1f2328]">/init</code> コマンドを使うと、
            Claude Codeがプロジェクトを自動解析してCLAUDE.mdの雛形を生成してくれます。
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
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#8c959f] uppercase tracking-wider">操作</th>
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
