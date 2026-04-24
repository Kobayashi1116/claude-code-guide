import { LucideIcon, Code2, FolderOpen, Terminal, GitBranch, Globe, Layers, Plug, Workflow } from 'lucide-react'

export interface TerminalMessage {
  type: 'input' | 'output' | 'action' | 'success' | 'divider'
  text: string
}

export interface Feature {
  icon: LucideIcon
  emoji: string
  title: string
  plain: string
  scene: string
  demo: TerminalMessage[]
  badge?: string
}

export const features: Feature[] = [
  {
    icon: Code2,
    emoji: '✍️',
    title: 'コードを書く・直す・整理する',
    plain: 'コードを書いてもらったり、バグを直してもらったりできます。「リファクタリング」とは、プログラムの動きを変えずに、コードを読みやすく整理すること。Claude Codeに任せれば、テストを追加したり、型定義を整えたり、複雑な修正もやってくれます。',
    scene: '深夜2時、本番でバグが出た。エラーメッセージをそのままClaudeに貼り付けると、原因を特定してその場で修正してくれる。',
    demo: [
      { type: 'input', text: 'ログインボタンを押すと画面が真っ白になる。直して' },
      { type: 'action', text: 'src/pages/Login.tsx を読み込んでいます...' },
      { type: 'action', text: 'エラーの原因を調査しています...' },
      { type: 'output', text: '原因がわかりました。useEffect の依存配列が抜けていて無限ループになっています。修正します。' },
      { type: 'success', text: 'src/pages/Login.tsx を修正しました' },
      { type: 'success', text: 'テストを実行しました（3件すべて通過）' },
    ],
    badge: 'よく使われる',
  },
  {
    icon: FolderOpen,
    emoji: '📁',
    title: 'ファイルをまとめて変更する',
    plain: 'プロジェクト内の複数ファイルを同時に読んで、変更してくれます。「このコンポーネントの名前を全部変えたい」「古いAPIを新しいものに置き換えたい」といった、ファイルをまたぐ作業が得意です。',
    scene: '商品名が変わったので「OldButton」という名前を「PrimaryButton」に全ファイルで変更したい。手動でやると1時間かかる作業が、Claudeなら数秒で終わる。',
    demo: [
      { type: 'input', text: 'OldButton という名前のコンポーネントを PrimaryButton に全ファイルで変更して' },
      { type: 'action', text: 'OldButton を含むファイルを検索しています...' },
      { type: 'output', text: '14ファイルで使用されていました。すべて変更します。' },
      { type: 'success', text: '14ファイルを更新しました（インポート・使用箇所・型定義すべて）' },
    ],
  },
  {
    icon: Terminal,
    emoji: '⚡',
    title: 'コマンドを自動で実行する',
    plain: 'ターミナルに打ち込むコマンド（npm install、テスト実行、ビルドなど）を代わりに実行してくれます。コマンドが失敗しても、エラーを読んで自分で対処してくれます。',
    scene: '「テストを書いて実行して、失敗したら修正して」と頼めば、テストを書く→実行する→失敗箇所を直す、という一連の作業を全部やってくれる。',
    demo: [
      { type: 'input', text: 'CartComponent のテストを書いて実行して' },
      { type: 'action', text: 'src/components/Cart.tsx を読み込んでいます...' },
      { type: 'success', text: 'src/__tests__/Cart.test.tsx を作成しました（8件のテスト）' },
      { type: 'action', text: 'npm test を実行しています...' },
      { type: 'output', text: '1件失敗しました。空のカートの表示条件が違います。修正します。' },
      { type: 'success', text: '修正完了。8件すべてのテストが通りました ✅' },
    ],
  },
  {
    icon: GitBranch,
    emoji: '🔀',
    title: 'Gitの操作（コミット・PR作成）',
    plain: 'コードの変更履歴を管理する「Git」の操作を代わりにやってくれます。変更内容を見てコミットメッセージを書いたり、GitHubにプルリクエスト（コードレビュー依頼）を出したりできます。',
    scene: '機能追加が終わったあと、「変更内容を確認してコミットしてPR出して」と頼めば、適切なコミットメッセージを考えてGitHubにPRまで出してくれる。',
    demo: [
      { type: 'input', text: '今日の変更をコミットしてPRを作って' },
      { type: 'action', text: 'git diff を確認しています...' },
      { type: 'output', text: 'ショッピングカートの数量変更機能を追加した変更ですね。コミットします。' },
      { type: 'success', text: 'git commit: "feat: カートの数量変更機能を追加"' },
      { type: 'success', text: 'GitHub PR #42 を作成しました' },
    ],
  },
  {
    icon: Globe,
    emoji: '🌐',
    title: 'ネットから情報を取ってくる',
    plain: 'URLを伝えると、そのページの内容を読んで参考にしながら作業してくれます。ライブラリの最新ドキュメントを見て実装したり、APIの使い方を確認したりできます。',
    scene: '「このライブラリのドキュメントを見てコードを書いて」とURLを渡すと、ドキュメントを読んで正しい使い方で実装してくれる。古いサンプルコードを使って間違える心配がない。',
    demo: [
      { type: 'input', text: 'https://docs.example.com/api を見て、APIクライアントを実装して' },
      { type: 'action', text: 'ドキュメントを取得しています...' },
      { type: 'output', text: 'ドキュメントを確認しました。認証はBearer tokenで、レート制限は100req/minですね。実装します。' },
      { type: 'success', text: 'src/lib/apiClient.ts を作成しました（エラーハンドリング・型定義含む）' },
    ],
  },
  {
    icon: Layers,
    emoji: '🗂️',
    title: 'プロジェクト全体をまとめて変更',
    plain: 'プロジェクトのすべてのファイルを把握した上で、大規模な変更をまとめてやってくれます。たとえば「REST APIをGraphQLに移行して」と頼むと、関連するすべてのファイルを自動で書き換えてくれます。',
    scene: '「CSSをすべてTailwindに書き換えて」と頼むと、プロジェクト全体のCSSファイルを読んで、Tailwindのクラスに書き換えてくれる。何十ファイルあっても一気にやってくれる。',
    demo: [
      { type: 'input', text: 'スタイルをすべてTailwindに移行して' },
      { type: 'action', text: 'CSSファイルを検索しています（23件見つかりました）...' },
      { type: 'action', text: 'コンポーネントごとに変換しています...' },
      { type: 'success', text: '23ファイルを変換しました。既存のデザインを維持しながら移行完了 ✅' },
    ],
  },
  {
    icon: Plug,
    emoji: '🔌',
    title: '外部サービスと連携する（MCP）',
    plain: 'GitHubやデータベース、Slackなど外部のサービスに直接アクセスできるようになります（MCPという仕組みを使います）。「GitHubのIssueを見て対応して」とか「データベースを確認して」とかができます。',
    scene: 'GitHubのIssueを見ながら修正→コミット→PR作成を全部Claude Codeが自動でやってくれる。',
    demo: [
      { type: 'input', text: 'GitHub Issue #15 を確認して対応して' },
      { type: 'action', text: 'GitHub Issue #15 を取得しています...' },
      { type: 'output', text: 'Issue: 検索ボックスで日本語が入力できない。原因を調査します。' },
      { type: 'success', text: 'src/components/Search.tsx を修正しました' },
      { type: 'success', text: 'PR #43「fix: 検索ボックスの日本語入力対応」を作成しました' },
    ],
    badge: '便利',
  },
  {
    icon: Workflow,
    emoji: '🤖',
    title: 'CI/CDに組み込んで自動化',
    plain: 'GitHub Actionsなどの自動化ツールに組み込むことで、人間が何もしなくてもClaudeが動くようにできます。たとえば「PRが来たら自動でコードレビューしてコメントする」といったことが実現できます。',
    scene: 'PRを出すと自動でClaudeがコードを確認して、問題点をコメントしてくれる。レビュアーが手動でチェックしなくても、明らかなミスをその場で指摘してくれる。',
    demo: [
      { type: 'output', text: '--- GitHub Actions が自動で起動 ---' },
      { type: 'action', text: 'PR #44 のコードを確認しています...' },
      { type: 'output', text: '⚠️ 2件の問題を見つけました' },
      { type: 'output', text: '1. Line 23: SQLインジェクションの可能性があります' },
      { type: 'output', text: '2. Line 45: エラーハンドリングが抜けています' },
      { type: 'success', text: 'レビューコメントをPRに投稿しました' },
    ],
  },
]
