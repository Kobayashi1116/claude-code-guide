import { LucideIcon, Code2, FolderOpen, Terminal, GitBranch, Globe, Layers, Plug, Workflow } from 'lucide-react'

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
  examples: string[]
  badge?: string
}

export const features: Feature[] = [
  {
    icon: Code2,
    title: 'コード生成・編集・リファクタリング',
    description: '自然言語の指示でコードを生成し、既存コードの編集やリファクタリングを行います。バグ修正、テスト追加、型定義の整備など多様なコーディングタスクに対応します。',
    examples: [
      'Reactコンポーネントを新規作成して',
      'この関数をTypeScriptに書き直して',
      'パフォーマンスを改善するためにリファクタリングして',
      'このバグを修正して単体テストも追加して',
    ],
    badge: '最も使用頻度が高い',
  },
  {
    icon: FolderOpen,
    title: 'ファイル操作',
    description: 'ファイルの読み書き、検索、移動、削除などのファイルシステム操作が可能です。プロジェクト全体にわたる変更も一括で実行できます。',
    examples: [
      'src/以下のすべての.tsxファイルを一覧表示して',
      '古いコンポーネントを新しいディレクトリに移動して',
      'console.logが含まれるファイルを全部見つけて',
      '設定ファイルを新しいフォーマットに更新して',
    ],
  },
  {
    icon: Terminal,
    title: 'Bashコマンド実行',
    description: 'シェルコマンドを直接実行できます。ビルドツール、テストランナー、パッケージマネージャーなど、プロジェクトで使用するあらゆるCLIツールと連携可能です。',
    examples: [
      'npm install して npm run build を実行して',
      'テストを実行して失敗したテストを修正して',
      'Dockerコンテナをビルドして起動して',
      'データベースのマイグレーションを実行して',
    ],
  },
  {
    icon: GitBranch,
    title: 'Git操作',
    description: 'git diff、コミット作成、ブランチ操作、プルリクエスト作成まで、Gitのワークフローを自動化できます。',
    examples: [
      '変更内容をレビューしてコミットメッセージを書いて',
      'feature/new-componentブランチを作成してPRを出して',
      'このPRに変更が必要な点をレビューして',
      'マージコンフリクトを解決して',
    ],
  },
  {
    icon: Globe,
    title: 'Web取得（web_fetch）',
    description: 'URLを指定してWebページの内容を取得できます。最新のドキュメントやAPIレファレンスを参照しながら開発を進められます。',
    examples: [
      'React 18の公式ドキュメントを参照して実装して',
      'このAPIのドキュメントをもとにクライアントを書いて',
      '最新のnpmパッケージのREADMEを確認して',
    ],
  },
  {
    icon: Layers,
    title: '複数ファイルにまたがるタスク自動化',
    description: 'プロジェクト全体にわたる大規模な変更を自動化できます。コンポーネントのリネーム、APIの変更、スタイルの統一など、手作業では時間がかかる作業を一括実行します。',
    examples: [
      'ButtonコンポーネントをPrimaryButtonに全ファイルでリネームして',
      'REST APIをGraphQLに移行して',
      'すべてのCSSをTailwindに書き換えて',
      'エラーハンドリングをすべてのAPIコールに追加して',
    ],
  },
  {
    icon: Plug,
    title: 'MCPサーバーとの連携',
    description: 'Model Context Protocol（MCP）に対応したサーバーと連携することで、データベース、外部API、ファイルシステムなど多様なデータソースに直接アクセスできます。',
    examples: [
      'PostgreSQLからユーザーデータを取得して',
      'GitHubのIssueを一覧表示して対応して',
      'Slackにデプロイ完了通知を送って',
      'ローカルファイルシステムを直接操作して',
    ],
    badge: '拡張性が高い',
  },
  {
    icon: Workflow,
    title: 'CI/CDへの組み込み（--printフラグ）',
    description: '--printフラグを使うことで対話なしに実行でき、GitHub ActionsなどのCI/CDパイプラインに組み込んで自動化タスクを実行できます。',
    examples: [
      'コードレビューの自動化',
      'テスト失敗時の自動修正提案',
      'リリースノートの自動生成',
      'コードの品質チェックの自動化',
    ],
  },
]
