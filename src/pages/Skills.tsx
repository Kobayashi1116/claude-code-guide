import { motion } from 'framer-motion'
import { FolderTree, PenLine } from 'lucide-react'
import { skills, categoryLabels, categoryColors } from '../data/skills'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import CodeBlock from '../components/ui/CodeBlock'
import SectionTitle from '../components/ui/SectionTitle'

const skillMdExample = `---
name: my-deploy
description: 本番環境へのデプロイを自動化するスキル
triggers:
  - "デプロイして"
  - "本番に反映して"
---

# デプロイスキル

## やること
1. テストを実行する (npm test)
2. ビルドする (npm run build)
3. Docker イメージをビルドする
4. ECR にプッシュする
5. ECS サービスを更新する

## 注意
本番デプロイ前に必ず確認を取ること`

const directoryStructure = `~/.claude/
├── skills/
│   ├── public/       ← 公式スキル（最初から入ってる）
│   │   ├── docx.md
│   │   ├── pdf.md
│   │   └── ...
│   └── user/         ← 自分で作るスキルはここに
│       └── my-deploy.md
└── settings.json`

export default function Skills() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <SectionTitle
        title="スキル（Skills）"
        subtitle="Claude Code の動き方を「スキルファイル」でカスタマイズできます。よく使う作業を登録しておくと、ひと言で呼び出せます。"
      />

      {/* What is Skills */}
      <section className="mb-16">
        <div className="rounded-2xl border border-[#d0d7de] bg-[#f6f8fa] p-6 sm:p-8">
          <div className="flex items-start gap-4 mb-6">
            <span className="text-3xl shrink-0">🧩</span>
            <div>
              <h2 className="text-lg font-bold text-[#1f2328] mb-2">スキルってなに？</h2>
              <p className="text-sm text-[#656d76] leading-relaxed mb-3">
                スキルは <strong className="text-[#1f2328]">Markdownで書いた「手順書」</strong>です。たとえば「デプロイの手順」を書いたスキルを作っておけば、「デプロイして」と言うだけでその手順どおりに動いてくれます。
              </p>
              <p className="text-sm text-[#656d76] leading-relaxed">
                チームで使う場合は Git でスキルファイルを共有すれば、全員が同じ手順で作業できるようになります。
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { emoji: '🗣️', title: 'ひと言で呼び出す', desc: '「デプロイして」「レビューして」のように、短い言葉でスキルを起動できる' },
              { emoji: '📝', title: '手順を標準化', desc: '複雑な手順を書いておけば、毎回同じやり方で作業してくれる' },
              { emoji: '👥', title: 'チームで共有', desc: 'スキルファイルをGitに入れてチームで共有すれば、ベストプラクティスを統一できる' },
            ].map(({ emoji, title, desc }) => (
              <div key={title} className="p-4 rounded-xl bg-white border border-[#d0d7de] text-center">
                <div className="text-2xl mb-2">{emoji}</div>
                <p className="text-sm font-semibold text-[#1f2328] mb-1">{title}</p>
                <p className="text-xs text-[#656d76] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Directory structure */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <FolderTree className="h-5 w-5 text-[#f97316]" />
          <h2 className="text-xl font-bold text-[#1f2328]">スキルファイルの場所</h2>
        </div>
        <p className="text-sm text-[#656d76] mb-4">
          スキルファイルは <code className="text-xs bg-[#f6f8fa] px-1.5 py-0.5 rounded border border-[#d0d7de] text-[#1f2328]">~/.claude/skills/</code> に置きます。最初から入っている公式スキルと、自分で作るスキルの場所が分かれています。
        </p>
        <CodeBlock code={directoryStructure} language="bash" />
      </section>

      {/* Official skills */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-[#1f2328] mb-2">最初から使える公式スキル</h2>
        <p className="text-sm text-[#656d76] mb-6">インストールすると最初から使えるスキルが入っています。WordやPDFを読んだり、UIを作ったりするスキルが揃っています。</p>
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
                <div className="space-y-2 pt-3 border-t border-[#d0d7de]">
                  <div>
                    <span className="text-xs font-medium text-[#8c959f]">使い方</span>
                    <p className="text-xs text-[#656d76] mt-0.5">{skill.trigger}</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-[#8c959f]">こんな時に</span>
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
        <div className="flex items-center gap-3 mb-4">
          <PenLine className="h-5 w-5 text-[#f97316]" />
          <h2 className="text-xl font-bold text-[#1f2328]">自分でスキルを作る</h2>
        </div>
        <p className="text-sm text-[#656d76] mb-4 leading-relaxed">
          <code className="text-xs bg-[#f6f8fa] px-1.5 py-0.5 rounded border border-[#d0d7de] text-[#1f2328]">~/.claude/skills/user/</code> に Markdown ファイルを置くだけです。フォーマットはシンプルで、「いつ起動するか（triggers）」と「何をするか（手順）」を書くだけです。
        </p>
        <CodeBlock code={skillMdExample} language="markdown" filename="~/.claude/skills/user/my-deploy.md" />
        <div className="mt-4 p-4 rounded-xl border border-orange-200 bg-orange-50">
          <p className="text-sm font-semibold text-[#ea580c] mb-1">💡 スキルを自動で作る方法</p>
          <p className="text-sm text-[#656d76]">
            <code className="text-xs bg-white px-1.5 py-0.5 rounded border border-[#d0d7de] text-[#1f2328]">skill-creator</code> という公式スキルを使うと、「新しいスキルを作りたい。デプロイを自動化したい」と話しかけるだけでスキルファイルを自動生成してくれます。
          </p>
        </div>
      </section>
    </div>
  )
}
