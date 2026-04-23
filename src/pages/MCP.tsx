import { motion } from 'framer-motion'
import { Plug, Settings, Database, GitFork, MessageSquare, HardDrive } from 'lucide-react'
import CodeBlock from '../components/ui/CodeBlock'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import SectionTitle from '../components/ui/SectionTitle'

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
    },
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/path/to/allowed/directory"
      ]
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

interface McpServer {
  icon: React.ElementType
  name: string
  description: string
  package: string
  useCases: string[]
  badge?: string
}

const mcpServers: McpServer[] = [
  {
    icon: GitFork,
    name: 'GitHub',
    description: 'GitHubのIssue・PR・リポジトリ・コードをClaude Codeから直接操作できます。',
    package: '@modelcontextprotocol/server-github',
    useCases: ['IssueやPRの一覧取得・作成', 'コードのコミット・プッシュ', 'リリースの管理', 'リポジトリ情報の取得'],
    badge: '人気',
  },
  {
    icon: Database,
    name: 'PostgreSQL',
    description: 'PostgreSQLデータベースに直接アクセスし、スキーマの参照やクエリ実行が可能です。',
    package: '@modelcontextprotocol/server-postgres',
    useCases: ['テーブル構造の確認', 'データの取得・更新', 'マイグレーション支援', 'クエリの最適化'],
  },
  {
    icon: MessageSquare,
    name: 'Slack',
    description: 'Slackチャンネルへのメッセージ送信や、会話履歴の取得ができます。',
    package: '@modelcontextprotocol/server-slack',
    useCases: ['デプロイ通知の送信', 'アラートの配信', 'チームへの報告', 'ワークフローの自動化'],
  },
  {
    icon: HardDrive,
    name: 'Filesystem',
    description: '指定したディレクトリ内のファイルシステムに安全にアクセスします。',
    package: '@modelcontextprotocol/server-filesystem',
    useCases: ['大規模プロジェクトのファイル参照', 'ドキュメントの読み込み', '設定ファイルの管理'],
  },
]

export default function MCP() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <SectionTitle
        title="MCPサーバー連携"
        subtitle="Model Context Protocol（MCP）を使ってデータベース・外部APIなど多様なデータソースと連携します。"
      />

      {/* What is MCP */}
      <section className="mb-16">
        <div className="rounded-2xl border border-[#d0d7de] bg-[#f6f8fa] p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
              <Plug className="h-5 w-5 text-[#f97316]" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#1f2328] mb-1">MCPとは</h2>
              <p className="text-sm text-[#656d76] leading-relaxed">
                Model Context Protocol（MCP）はAnthropicが提唱するオープンな標準プロトコルです。
                AIモデルが外部のデータソースやツールと安全に連携するための仕組みを提供します。
                MCPサーバーを設定することで、Claude CodeはGitHub・データベース・Slack・ファイルシステムなど
                様々なシステムに直接アクセスできるようになります。
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: '標準プロトコル', desc: 'オープンな仕様なので誰でもMCPサーバーを実装できる' },
              { title: '安全な連携', desc: '権限を明示的に設定することでセキュアにアクセス' },
              { title: 'エコシステム', desc: '公式・サードパーティ含め多数のMCPサーバーが公開済み' },
            ].map(({ title, desc }) => (
              <div key={title} className="p-4 rounded-lg bg-white border border-[#d0d7de]">
                <p className="text-sm font-semibold text-[#1f2328] mb-1">{title}</p>
                <p className="text-xs text-[#656d76]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular MCP servers */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-[#1f2328] mb-6">よく使われるMCPサーバー</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {mcpServers.map(({ icon: Icon, name, description, package: pkg, useCases, badge }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <Card className="h-full">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center">
                    <Icon className="h-4 w-4 text-[#f97316]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-[#1f2328]">{name}</h3>
                      {badge && <Badge variant="accent">{badge}</Badge>}
                    </div>
                    <code className="text-xs text-[#8c959f] font-mono break-all">{pkg}</code>
                  </div>
                </div>
                <p className="text-sm text-[#656d76] mb-3 leading-relaxed">{description}</p>
                <ul className="space-y-1">
                  {useCases.map((uc) => (
                    <li key={uc} className="flex items-center gap-2 text-xs text-[#656d76]">
                      <span className="text-[#f97316]">›</span>
                      {uc}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Config */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <Settings className="h-5 w-5 text-[#f97316]" />
          <h2 className="text-xl font-bold text-[#1f2328]">設定ファイルの書き方</h2>
        </div>
        <p className="text-sm text-[#656d76] mb-4 leading-relaxed">
          MCPサーバーの設定は <code className="text-xs bg-[#f6f8fa] px-1.5 py-0.5 rounded border border-[#d0d7de] text-[#1f2328]">~/.claude/settings.json</code> または
          プロジェクトの <code className="text-xs bg-[#f6f8fa] px-1.5 py-0.5 rounded border border-[#d0d7de] text-[#1f2328]">.claude/settings.json</code> に記述します。
        </p>
        <CodeBlock code={mcpConfigExample} language="json" filename=".claude/settings.json" />
      </section>

      {/* Slack example */}
      <section>
        <h2 className="text-xl font-bold text-[#1f2328] mb-4">Slack連携の設定例</h2>
        <CodeBlock code={slackConfigExample} language="json" filename=".claude/settings.json" />
        <div className="mt-4 p-4 rounded-lg border border-[rgba(249,115,22,0.25)] bg-orange-50">
          <p className="text-sm text-[#ea580c] font-medium mb-1">セキュリティ注意</p>
          <p className="text-sm text-[#656d76]">
            APIキーやトークンは環境変数として設定するか、settings.jsonを <code className="text-xs bg-white px-1.5 py-0.5 rounded border border-[#d0d7de] text-[#1f2328]">.gitignore</code> に追加してリポジトリにコミットしないようにしてください。
          </p>
        </div>
      </section>
    </div>
  )
}
