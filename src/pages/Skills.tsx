import { motion } from 'framer-motion'
import { Puzzle, FolderTree, PenLine } from 'lucide-react'
import { skills, categoryLabels, categoryColors } from '../data/skills'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import CodeBlock from '../components/ui/CodeBlock'
import SectionTitle from '../components/ui/SectionTitle'

const skillMdExample = `---
name: my-custom-skill
description: プロジェクト固有のタスクを自動化するカスタムスキル
triggers:
  - "デプロイして"
  - "本番環境に反映して"
---

# My Custom Skill

## 概要
このスキルはデプロイメントワークフローを自動化します。

## 手順
1. テストを実行する (npm test)
2. ビルドを実行する (npm run build)
3. Dockerイメージをビルドする
4. ECRにプッシュする
5. ECSサービスを更新する

## 注意事項
- 本番デプロイ前に必ず確認を取る
- ロールバック手順: aws ecs update-service ...`

const directoryStructure = `~/.claude/
├── skills/
│   ├── public/          # 公式・共有スキル（読み取り専用）
│   │   ├── docx.md
│   │   ├── pdf.md
│   │   ├── frontend-design.md
│   │   └── ...
│   └── user/            # ユーザー独自のカスタムスキル
│       ├── my-deploy.md
│       └── my-review.md
└── settings.json`

export default function Skills() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <SectionTitle
        title="スキル（Skills）"
        subtitle="SKILL.mdファイルでClaude Codeの機能を拡張する仕組みです。公式スキルを活用したり、独自のスキルを作成できます。"
      />

      {/* What is Skills */}
      <section className="mb-16">
        <div className="rounded-2xl border border-[#d0d7de] bg-[#f6f8fa] p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
              <Puzzle className="h-5 w-5 text-[#f97316]" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#1f2328] mb-1">スキルとは</h2>
              <p className="text-sm text-[#656d76] leading-relaxed">
                スキルはMarkdown形式のSKILL.mdファイルで定義される、Claude Codeの拡張機能です。
                特定のトリガーワードや条件に反応して、定義された手順でタスクを実行します。
                公式が提供するスキルを使うだけでなく、チームや個人の作業フローに合わせた
                カスタムスキルを自由に作成できます。
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: 'トリガー設定', desc: '特定の言葉や条件でスキルを自動的に起動' },
              { title: '手順の標準化', desc: '複雑なタスクを再現可能なステップに分解' },
              { title: 'チームで共有', desc: 'スキルファイルをGitで管理してチームと共有' },
            ].map(({ title, desc }) => (
              <div key={title} className="p-4 rounded-lg bg-white border border-[#d0d7de]">
                <p className="text-sm font-semibold text-[#1f2328] mb-1">{title}</p>
                <p className="text-xs text-[#656d76]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Directory structure */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <FolderTree className="h-5 w-5 text-[#f97316]" />
          <h2 className="text-xl font-bold text-[#1f2328]">ディレクトリ構成</h2>
        </div>
        <CodeBlock code={directoryStructure} language="bash" />
        <p className="text-sm text-[#656d76] mt-3 leading-relaxed">
          <code className="text-xs bg-[#f6f8fa] px-1.5 py-0.5 rounded border border-[#d0d7de] text-[#1f2328] break-all">~/.claude/skills/public/</code> には公式スキルが格納されています。
          カスタムスキルは <code className="text-xs bg-[#f6f8fa] px-1.5 py-0.5 rounded border border-[#d0d7de] text-[#1f2328] break-all">~/.claude/skills/user/</code> に作成します。
        </p>
      </section>

      {/* Official skills */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-[#1f2328] mb-6">公式スキル一覧</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
            >
              <Card className="h-full">
                <div className="flex items-center justify-between mb-3">
                  <code className="text-sm font-mono font-semibold text-[#1f2328]">{skill.name}</code>
                  <Badge variant={categoryColors[skill.category] as 'info' | 'accent' | 'success' | 'warning'}>
                    {categoryLabels[skill.category]}
                  </Badge>
                </div>
                <p className="text-sm text-[#656d76] leading-relaxed mb-3">{skill.description}</p>
                <div className="space-y-2">
                  <div>
                    <span className="text-xs text-[#8c959f] uppercase tracking-wider">トリガー</span>
                    <p className="text-xs text-[#656d76] mt-0.5">{skill.trigger}</p>
                  </div>
                  <div>
                    <span className="text-xs text-[#8c959f] uppercase tracking-wider">ユースケース</span>
                    <p className="text-xs text-[#656d76] mt-0.5">{skill.useCase}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Create custom skill */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <PenLine className="h-5 w-5 text-[#f97316]" />
          <h2 className="text-xl font-bold text-[#1f2328]">カスタムスキルの作り方</h2>
        </div>
        <p className="text-sm text-[#656d76] mb-4 leading-relaxed">
          <code className="text-xs bg-[#f6f8fa] px-1.5 py-0.5 rounded border border-[#d0d7de] text-[#1f2328]">~/.claude/skills/user/</code> ディレクトリに
          Markdownファイルを作成するだけでカスタムスキルを定義できます。
          <code className="text-xs bg-[#f6f8fa] px-1.5 py-0.5 rounded border border-[#d0d7de] text-[#1f2328]">skill-creator</code> スキルを使って
          対話的に作成することも可能です。
        </p>
        <CodeBlock code={skillMdExample} language="markdown" filename="~/.claude/skills/user/my-deploy.md" />
        <div className="mt-4 p-4 rounded-lg border border-[rgba(249,115,22,0.25)] bg-orange-50">
          <p className="text-sm text-[#ea580c] font-medium mb-1">ヒント</p>
          <p className="text-sm text-[#656d76]">
            <code className="text-xs bg-white px-1.5 py-0.5 rounded border border-[#d0d7de] text-[#1f2328]">skill-creator</code> スキルを使って
            「新しいスキルを作って」と依頼すると、Claude Codeが対話形式でSKILL.mdを生成してくれます。
          </p>
        </div>
      </section>
    </div>
  )
}
