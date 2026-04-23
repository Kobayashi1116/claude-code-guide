export interface Tip {
  id: string
  title: string
  description: string
  detail: string
  category: 'workflow' | 'cost' | 'context' | 'ci' | 'mistake'
  code?: {
    language: string
    content: string
    filename?: string
  }
}

export const tips: Tip[] = [
  {
    id: 'claude-md',
    title: 'CLAUDE.mdでプロジェクト情報を伝える',
    description: 'プロジェクトのルートにCLAUDE.mdを置くと、Claude Codeが自動的に読み込みます。技術スタック・ルール・コマンドを記述しておきましょう。',
    detail: 'CLAUDE.mdはセッションのたびに読み込まれるため、毎回同じ説明をする必要がなくなります。チームで共有することで、誰がClaude Codeを使っても同じコンテキストで作業できます。',
    category: 'workflow',
    code: {
      language: 'markdown',
      filename: 'CLAUDE.md',
      content: `# プロジェクト名

## 技術スタック
- React 18 + TypeScript
- Tailwind CSS v3
- Vite

## 重要なルール
- コンポーネントはsrc/components/に配置
- テストは__tests__/ディレクトリに配置
- CSSはTailwindを使用（インラインスタイル禁止）

## よく使うコマンド
- npm run dev  # 開発サーバー起動
- npm test     # テスト実行`,
    },
  },
  {
    id: 'task-splitting',
    title: 'タスクを細かく分割して指示する',
    description: '一度に大きな変更を依頼するより、小さなタスクに分けて順番に依頼する方が精度が上がります。',
    detail: '大きなタスクはClaude Codeが誤解しやすく、修正が難しくなります。「まず型定義を作って」「次にAPIクライアントを実装して」「最後にUIに接続して」のように段階的に指示しましょう。',
    category: 'workflow',
    code: {
      language: 'bash',
      content: `# 悪い例：一度に大きすぎるタスク
claude "認証システム全体を実装して"

# 良い例：段階的に分割
claude "まずUserの型定義をsrc/types/user.tsに作って"
claude "次にsrc/lib/auth.tsに認証ユーティリティを実装して"
claude "最後にLoginPageコンポーネントを作って認証と接続して"`,
    },
  },
  {
    id: 'cost-management',
    title: 'コスト管理のベストプラクティス',
    description: '/costコマンドで使用量を確認しながら、適切なモデルを選択してコストを最適化しましょう。',
    detail: 'コードの生成・編集にはSonnetが最もコスパが良く、複雑なアーキテクチャ設計にはOpusを使うなど、タスクに応じてモデルを使い分けましょう。/compactコマンドでコンテキストを圧縮するとトークン消費を抑えられます。',
    category: 'cost',
    code: {
      language: 'bash',
      content: `# 現在のコストを確認
/cost

# モデルを切り替え（コスト重視）
/model claude-sonnet-4-6

# 高度な推論が必要な場合はOpusを使用
/model claude-opus-4-7

# コンテキストが膨らんできたら圧縮
/compact`,
    },
  },
  {
    id: 'ci-integration',
    title: '--printフラグでCI/CDに組み込む',
    description: '--printフラグを使うと対話なしで実行できるため、GitHub ActionsなどのCI/CDパイプラインに統合できます。',
    detail: 'CI/CD環境ではユーザーの入力を待つことができないため、--printフラグが必須です。また、--dangerously-skip-permissionsフラグも必要な場合があります（セキュリティに注意）。',
    category: 'ci',
    code: {
      language: 'yaml',
      filename: '.github/workflows/claude-review.yml',
      content: `name: Claude Code Review
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install Claude Code
        run: npm install -g @anthropic-ai/claude-code

      - name: Run Code Review
        env:
          ANTHROPIC_API_KEY: \${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          claude --print "このPRの変更をレビューして、問題点があれば指摘してください"`,
    },
  },
  {
    id: 'context-management',
    title: 'コンテキスト管理の考え方',
    description: 'コンテキストウィンドウには上限があります。長いセッションでは/compactや/clearを活用して効率的に作業しましょう。',
    detail: 'コンテキストが長くなると処理が遅くなりコストも増えます。新しいタスクを始めるときは/clearでリセットするか、/compactで要約するのが効果的です。大きなファイルを渡す際はファイル全体でなく必要な部分のみを指定しましょう。',
    category: 'context',
    code: {
      language: 'bash',
      content: `# 新しいタスクを始めるときはコンテキストをリセット
/clear

# 会話が長くなってきたら要約
/compact

# 特定のファイルの特定の部分だけを指定する
claude "src/components/Button.tsx の handleClick 関数のみを修正して"`,
    },
  },
  {
    id: 'common-mistakes',
    title: 'よくあるミスと対処法',
    description: 'Claude Codeを使い始めのときによく起こるミスと、その対処法をまとめました。',
    detail: 'Claude Codeは便利なツールですが、適切な使い方を知ることでより効果的に活用できます。',
    category: 'mistake',
    code: {
      language: 'bash',
      content: `# ミス1: 変更前にバックアップしていない
# → Gitで管理して、こまめにコミットする
git add -A && git commit -m "Before Claude Code changes"

# ミス2: 生成されたコードをレビューしない
# → 必ず変更内容を確認してからコミットする
git diff  # 変更内容を確認

# ミス3: APIキーを環境変数で管理していない
# → .envファイルに記述し、.gitignoreに追加する
echo "ANTHROPIC_API_KEY=your_key" >> .env
echo ".env" >> .gitignore`,
    },
  },
]

export const categoryLabels: Record<Tip['category'], string> = {
  workflow: 'ワークフロー',
  cost: 'コスト管理',
  context: 'コンテキスト',
  ci: 'CI/CD',
  mistake: 'よくあるミス',
}
