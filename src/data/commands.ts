export interface SlashCommand {
  command: string
  description: string
  example?: string
}

export interface KeyboardShortcut {
  keys: string[]
  description: string
  context?: string
}

export const slashCommands: SlashCommand[] = [
  {
    command: '/help',
    description: '利用可能なコマンドとヘルプ情報を表示します',
  },
  {
    command: '/clear',
    description: '会話履歴をリセットし、コンテキストを初期化します',
  },
  {
    command: '/cost',
    description: '現在のセッションでのAPI使用コストを表示します',
  },
  {
    command: '/model',
    description: '使用するClaudeモデルを切り替えます（Opus/Sonnet/Haiku）',
    example: '/model claude-opus-4-7',
  },
  {
    command: '/compact',
    description: '会話履歴を圧縮してコンテキストウィンドウを節約します',
  },
  {
    command: '/status',
    description: '現在のセッション状態とシステム情報を表示します',
  },
  {
    command: '/init',
    description: 'プロジェクトを分析してCLAUDE.mdを自動生成します',
  },
  {
    command: '/review',
    description: 'プルリクエストをレビューします',
  },
  {
    command: '/pr-comments',
    description: 'GitHubのPRコメントを取得して対応します',
  },
  {
    command: '/fast',
    description: '高速モード（Fast mode）のON/OFFを切り替えます',
  },
]

export const keyboardShortcuts: KeyboardShortcut[] = [
  {
    keys: ['Enter'],
    description: 'メッセージを送信',
  },
  {
    keys: ['Shift', 'Enter'],
    description: '改行を挿入（送信しない）',
  },
  {
    keys: ['Ctrl', 'C'],
    description: '実行中の処理を中断',
  },
  {
    keys: ['↑'],
    description: '前のメッセージに戻る（入力欄が空のとき）',
  },
  {
    keys: ['Ctrl', 'L'],
    description: 'ターミナルをクリア',
  },
  {
    keys: ['Tab'],
    description: 'ファイルパスやコマンドを補完',
  },
]

export const installCommand = `npm install -g @anthropic-ai/claude-code`

export const firstRunCommands = `# インストール確認
claude --version

# プロジェクトディレクトリで起動
cd your-project
claude

# 認証（初回のみ）
# ブラウザが開き、Anthropicアカウントでログインします`

export const claudeMdExample = `# プロジェクト概要
このプロジェクトはNext.js + TypeScriptで構築されたECサイトです。

## 技術スタック
- フレームワーク: Next.js 14 (App Router)
- 言語: TypeScript
- スタイリング: Tailwind CSS
- データベース: PostgreSQL + Prisma
- 認証: NextAuth.js

## ディレクトリ構成
- src/app/ - App Routerのページ
- src/components/ - 再利用可能なコンポーネント
- src/lib/ - ユーティリティ・設定ファイル
- prisma/ - データベーススキーマ

## 開発ルール
- コンポーネントは必ずTypeScriptで記述する
- CSSはTailwindのユーティリティクラスを使用する
- APIルートはsrc/app/api/以下に配置する

## よく使うコマンド
- npm run dev - 開発サーバー起動
- npm run build - プロダクションビルド
- npx prisma migrate dev - マイグレーション実行`
