import { motion } from 'framer-motion'
import { Settings, Database, GitFork, MessageSquare, HardDrive } from 'lucide-react'
import CodeBlock from '../components/ui/CodeBlock'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import SectionTitle from '../components/ui/SectionTitle'
import TerminalDemo from '../components/ui/TerminalDemo'

const mcpConfigExample = `{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_xxxxxxxxxxxx"
      }
    },
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres"],
      "env": {
        "POSTGRES_CONNECTION_STRING": "postgresql://user:pass@localhost:5432/mydb"
      }
    }
  }
}`

const slackConfigExample = `{
  "mcpServers": {
    "slack": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-slack"],
      "env": {
        "SLACK_BOT_TOKEN": "xoxb-xxxxxxxxxxxx",
        "SLACK_TEAM_ID": "T00000000"
      }
    }
  }
}`

const githubDemo = [
  { type: 'input' as const, text: 'GitHub の未対応 Issue を確認して、簡単なものから対応して' },
  { type: 'action' as const, text: 'GitHub から Issue 一覧を取得しています...' },
  { type: 'output' as const, text: '5件の未対応 Issue があります。Issue #12「フッターのリンクが切れている」から始めます。' },
  { type: 'action' as const, text: 'src/components/Footer.tsx を修正しています...' },
  { type: 'success' as const, text: 'Footer.tsx を修正しました' },
  { type: 'success' as const, text: 'PR #28「fix: フッターのリンクを修正」を作成しました' },
]

interface McpServer {
  icon: React.ElementType
  name: string
  emoji: string
  description: string
  package: string
  useCases: string[]
  badge?: string
}

const mcpServers: McpServer[] = [
  {
    icon: GitFork,
    name: 'GitHub',
    emoji: '🐙',
    description: 'GitHubのIssueやPRをClaudeから直接操作できます。「Issue #15を見て対応して」と頼むだけで、内容を確認して修正・PRまで一気にやってくれます。',
    package: '@modelcontextprotocol/server-github',
    useCases: ['Issue の内容を確認してコードを修正する', 'PR のレビューコメントに対応する', '新しい Issue を作成する', 'リリースノートを自動生成する'],
    badge: '人気',
  },
  {
    icon: Database,
    name: 'PostgreSQL',
    emoji: '🗄️',
    description: 'PostgreSQL データベースの中身を直接確認できます。「ユーザーテーブルの構造を確認してモデルを作って」という作業ができます。',
    package: '@modelcontextprotocol/server-postgres',
    useCases: ['テーブルの構造を確認してコードを書く', 'データを見ながらバグを調査する', 'マイグレーションのコードを書く', 'パフォーマンスが遅いクエリを改善する'],
  },
  {
    icon: MessageSquare,
    name: 'Slack',
    emoji: '💬',
    description: 'Slack へのメッセージ送信や、チャンネルの内容確認ができます。デプロイ完了通知を自動で送る、といったことが実現できます。',
    package: '@modelcontextprotocol/server-slack',
    useCases: ['デプロイ完了をチャンネルに通知する', 'エラーアラートをSlackに送る', 'チャンネルの内容を参考にコードを書く'],
  },
  {
    icon: HardDrive,
    name: 'Filesystem',
    emoji: '📂',
    description: '指定したフォルダの中のファイルに安全にアクセスします。ダウンロードフォルダや別の場所にあるファイルを Claude Code から扱えます。',
    package: '@modelcontextprotocol/server-filesystem',
    useCases: ['別ディレクトリのファイルを参照する', 'ドキュメントを読みながらコードを書く', 'ログファイルを分析する'],
  },
]

export default function MCP() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <SectionTitle
        title="MCPサーバー連携"
        subtitle="GitHub・データベース・Slackなど、外部のサービスと Claude Code を繋ぐ仕組みです。"
      />

      {/* What is MCP — plain language */}
      <section className="mb-16">
        <div className="rounded-2xl border border-[#d0d7de] bg-[#f6f8fa] p-6 sm:p-8 mb-6">
          <div className="flex items-start gap-4 mb-6">
            <span className="text-3xl shrink-0">🔌</span>
            <div>
              <h2 className="text-lg font-bold text-[#1f2328] mb-2">MCP ってなに？</h2>
              <p className="text-sm text-[#656d76] leading-relaxed">
                MCP（Model Context Protocol）は、Claude Code が「外のシステム」と話せるようにするための仕組みです。難しそうな名前ですが、要するに<strong className="text-[#1f2328]">「Claude Code と GitHub・データベース・Slackを繋ぐ設定」</strong>です。設定ファイルに数行書くだけで使えます。
              </p>
            </div>
          </div>

          {/* Visual diagram */}
          <div className="rounded-xl bg-white border border-[#d0d7de] p-5">
            <p className="text-xs font-semibold text-[#8c959f] text-center uppercase tracking-wider mb-5">MCP を使うと、こんなことができる</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
              <div className="flex flex-col items-center gap-1 px-4 py-3 rounded-xl bg-orange-50 border border-orange-100 text-center min-w-[110px]">
                <span className="text-xl">🤖</span>
                <span className="text-xs font-semibold text-[#1f2328]">Claude Code</span>
                <span className="text-xs text-[#8c959f]">あなたのPC</span>
              </div>
              <div className="flex flex-col items-center gap-0.5 text-[#8c959f]">
                <span className="text-xs">MCP</span>
                <span className="text-lg rotate-90 sm:rotate-0">⇄</span>
              </div>
              <div className="grid grid-cols-2 sm:flex sm:flex-row gap-2">
                {[
                  { emoji: '🐙', label: 'GitHub', sub: 'Issue・PR' },
                  { emoji: '🗄️', label: 'PostgreSQL', sub: 'データベース' },
                  { emoji: '💬', label: 'Slack', sub: 'メッセージ' },
                  { emoji: '📂', label: 'ファイル', sub: '別フォルダ' },
                ].map(({ emoji, label, sub }) => (
                  <div key={label} className="flex flex-col items-center gap-1 px-3 py-2.5 rounded-xl bg-blue-50 border border-blue-100 text-center min-w-[90px]">
                    <span className="text-lg">{emoji}</span>
                    <span className="text-xs font-semibold text-[#1f2328]">{label}</span>
                    <span className="text-xs text-[#8c959f]">{sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Demo */}
        <div>
          <h3 className="text-base font-semibold text-[#1f2328] mb-3">GitHub MCP を使った作業の例</h3>
          <TerminalDemo messages={githubDemo} title="GitHub MCP 連携" />
        </div>
      </section>

      {/* Popular MCP servers */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-[#1f2328] mb-2">よく使われる MCP サーバー</h2>
        <p className="text-sm text-[#656d76] mb-6">公式が提供しているものをいくつか紹介します。npmパッケージとして公開されていて、すぐに使い始めることができます。</p>
        <div className="grid md:grid-cols-2 gap-4">
          {mcpServers.map(({ emoji, name, description, package: pkg, useCases, badge }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <Card className="h-full">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl shrink-0">{emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold text-[#1f2328]">{name}</h3>
                      {badge && <Badge variant="accent">{badge}</Badge>}
                    </div>
                    <code className="text-xs text-[#8c959f] font-mono break-all">{pkg}</code>
                  </div>
                </div>
                <p className="text-sm text-[#656d76] mb-3 leading-relaxed">{description}</p>
                <div className="space-y-1.5">
                  {useCases.map((uc) => (
                    <div key={uc} className="flex items-start gap-2 text-xs text-[#656d76]">
                      <span className="text-[#f97316] mt-0.5 shrink-0">›</span>
                      {uc}
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Config */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <Settings className="h-5 w-5 text-[#f97316]" />
          <h2 className="text-xl font-bold text-[#1f2328]">設定の書き方</h2>
        </div>
        <p className="text-sm text-[#656d76] mb-4 leading-relaxed">
          プロジェクトの <code className="text-xs bg-[#f6f8fa] px-1.5 py-0.5 rounded border border-[#d0d7de] text-[#1f2328]">.claude/settings.json</code> に以下のように書きます。使いたいサービスの設定を追加するだけで、Claude Code から使えるようになります。
        </p>
        <CodeBlock code={mcpConfigExample} language="json" filename=".claude/settings.json" />
      </section>

      {/* Security */}
      <section>
        <h2 className="text-xl font-bold text-[#1f2328] mb-4">セキュリティについて</h2>
        <CodeBlock code={slackConfigExample} language="json" filename=".claude/settings.json" />
        <div className="mt-4 p-4 rounded-xl border border-red-200 bg-red-50">
          <p className="text-sm font-semibold text-red-700 mb-2">⚠️ APIキーの管理に注意</p>
          <p className="text-sm text-[#656d76] leading-relaxed">
            settings.json には API キーやパスワードを書くことになります。<strong className="text-[#1f2328]">GitHub などに公開しないよう</strong>、必ず
            <code className="text-xs bg-white px-1.5 py-0.5 rounded border border-[#d0d7de] text-[#1f2328] mx-1">.gitignore</code>
            に追加してください。チームで使う場合は環境変数で管理するのがおすすめです。
          </p>
        </div>
      </section>
    </div>
  )
}
