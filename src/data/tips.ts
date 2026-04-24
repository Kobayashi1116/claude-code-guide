export interface Tip {
  id: string
  emoji: string
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
    emoji: '📋',
    title: 'CLAUDE.md に「プロジェクトの説明書」を書く',
    description: 'プロジェクトのルートに CLAUDE.md というファイルを置くと、Claude Code が起動するたびに自動で読み込みます。技術スタックやルールを書いておくと、毎回同じ説明をしなくてよくなります。',
    detail: '「このプロジェクトはReactとTypeScriptで作られていて、テストはJestを使っています」というようなことを書いておくと、Claudeがプロジェクトの文脈を理解した上で作業してくれます。チームで使う場合はGitで管理すれば、誰でも同じ設定で使えます。',
    category: 'workflow',
    code: {
      language: 'markdown',
      filename: 'CLAUDE.md',
      content: `# このプロジェクトについて

ECサイトのフロントエンドです。Next.js + TypeScript で作られています。

## 使っている技術
- Next.js 14（App Router）
- TypeScript
- Tailwind CSS でスタイリング
- PostgreSQL にデータを保存

## お願いしたいこと
- コンポーネントは src/components/ に置いてください
- テストは必ず書いてください（Jest を使います）
- CSS は Tailwind を使って、直接スタイルを書かないでください

## よく使うコマンド
npm run dev   # 開発サーバーを起動
npm test      # テストを実行`,
    },
  },
  {
    id: 'task-splitting',
    emoji: '🍕',
    title: '頼むことを小さく切り分ける',
    description: '「アプリ全体を作って」より「まずログイン画面を作って」のほうがうまくいきます。大きすぎるお願いは途中で方向がずれやすいので、ピザを切り分けるように小さなステップに分けましょう。',
    detail: '大きなタスクを一度に頼むと、Claudeが判断を間違えたり、意図と違う実装をすることがあります。完成のイメージを共有しながら、少しずつ積み上げていくほうが結果がよくなります。失敗しても「戻る」コストが小さくなるのも利点です。',
    category: 'workflow',
    code: {
      language: 'bash',
      content: `# ❌ うまくいきにくい頼み方
「認証システム全体を実装して」

# ✅ うまくいく頼み方（段階的に）
「まず User の型定義を src/types/user.ts に作って」
→ 確認してOKなら
「次に src/lib/auth.ts にログイン・ログアウトの関数を作って」
→ 確認してOKなら
「最後に LoginPage コンポーネントを作って、auth.ts と繋いで」`,
    },
  },
  {
    id: 'cost-management',
    emoji: '💰',
    title: 'コストを確認しながら使う',
    description: '/cost コマンドでそのセッションでいくら使ったかがわかります。難しい作業には賢いモデル（Opus）、シンプルな作業には速くて安いモデル（Sonnet）と使い分けると節約できます。',
    detail: 'Claude Code は使った分だけ料金がかかります（Anthropic API の料金）。複雑なアーキテクチャを相談するときは Opus、コードの修正や生成は Sonnet で十分なことが多いです。/compact コマンドで会話の履歴を圧縮すると、同じコストでより長く使えます。',
    category: 'cost',
    code: {
      language: 'bash',
      content: `# 今のセッションでいくら使ったか確認
/cost

# 安くて速いモデルに切り替え（普段の作業向き）
/model claude-sonnet-4-6

# 難しい設計の相談には賢いモデルを使う
/model claude-opus-4-7

# 会話が長くなってきたら圧縮して節約
/compact`,
    },
  },
  {
    id: 'ci-integration',
    emoji: '🤖',
    title: 'GitHub Actions に組み込んで自動化する',
    description: '--print フラグをつけると、Claude Code を「プログラムから呼び出す」モードで動かせます。GitHub Actions と組み合わせると、PRが来たときに自動でレビューしてくれる仕組みが作れます。',
    detail: 'CI/CD（コードを自動でテスト・デプロイする仕組み）の中に Claude Code を組み込む方法です。--print フラグをつけると、Claudeが質問なしに作業を進めて結果だけを返します。',
    category: 'ci',
    code: {
      language: 'yaml',
      filename: '.github/workflows/claude-review.yml',
      content: `name: Claude によるコードレビュー
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Node.js をセットアップ
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Claude Code をインストール
        run: npm install -g @anthropic-ai/claude-code

      - name: コードレビューを実行
        env:
          ANTHROPIC_API_KEY: \${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          claude --print "このPRの変更をレビューして、問題があれば指摘してください"`,
    },
  },
  {
    id: 'context-management',
    emoji: '🧹',
    title: '会話が長くなったらリセットする',
    description: 'Claude Code との会話が長くなると、処理が遅くなったりコストが増えたりします。新しいタスクを始めるときは /clear でリセット、少し整理したいときは /compact で圧縮するのがおすすめです。',
    detail: 'Claude Code は会話の履歴をすべて記憶しながら動いています。履歴が長すぎると「過去の話」が邪魔になることもあります。新しいテーマに切り替えるときは /clear で新鮮な状態にしましょう。CLAUDE.md があれば、プロジェクトの基本情報はリセットしても引き継がれます。',
    category: 'context',
    code: {
      language: 'bash',
      content: `# 新しい作業を始めるときはリセット
/clear

# 会話が長くなってきたら要約して節約
/compact

# ファイルを指定するときは必要な部分だけ伝える
claude "src/components/Button.tsx の handleClick 関数だけを修正して"
# ファイル全体ではなく、関数名を指定するとトークン節約になる`,
    },
  },
  {
    id: 'common-mistakes',
    emoji: '⚠️',
    title: 'やりがちなミスと対処法',
    description: 'Claude Code を使い始めのころによくある失敗パターンです。事前に知っておくと、同じ失敗を避けられます。',
    detail: 'Claude Code は便利ですが、AIが間違えることもあります。特に大きな変更をするときは、事前に Git でコミットして「戻れる状態」を作っておくことが大切です。',
    category: 'mistake',
    code: {
      language: 'bash',
      content: `# ❌ よくある失敗1: 変更前にコミットしていない
# → Claudeが意図と違う変更をしても戻せない！

# ✅ 対処法: 作業前に必ずコミットしておく
git add -A && git commit -m "Claude による変更前のバックアップ"

# ❌ よくある失敗2: 生成されたコードを確認せずに使う
# → バグや問題が含まれていることもある

# ✅ 対処法: git diff で変更内容を必ず確認する
git diff  # Claudeが何を変えたか確認

# ❌ よくある失敗3: APIキーをコードに直書きする
# → GitHubに上げると漏洩する危険がある

# ✅ 対処法: .env ファイルに書いて .gitignore に追加
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
