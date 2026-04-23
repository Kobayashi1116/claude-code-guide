import { motion } from 'framer-motion'
import { Lightbulb } from 'lucide-react'
import { tips, categoryLabels } from '../data/tips'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import CodeBlock from '../components/ui/CodeBlock'
import SectionTitle from '../components/ui/SectionTitle'

const categoryVariants: Record<string, 'default' | 'accent' | 'success' | 'warning' | 'info'> = {
  workflow: 'info',
  cost: 'success',
  context: 'accent',
  ci: 'warning',
  mistake: 'default',
}

export default function Tips() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <SectionTitle
        title="Tips & ベストプラクティス"
        subtitle="Claude Codeをより効果的に活用するためのノウハウをまとめました。"
      />

      <div className="space-y-8">
        {tips.map(({ id, title, description, detail, category, code }, i) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <Card hover={false}>
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center">
                  <Lightbulb className="h-4 w-4 text-[#f97316]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap mb-2">
                    <h3 className="font-semibold text-[#1f2328]">{title}</h3>
                    <Badge variant={categoryVariants[category]}>
                      {categoryLabels[category]}
                    </Badge>
                  </div>
                  <p className="text-sm text-[#656d76] leading-relaxed">{description}</p>
                </div>
              </div>

              <div className="ml-0 sm:ml-12 pl-4 border-l-2 border-[#d0d7de]">
                <p className="text-sm text-[#656d76] leading-relaxed mb-4">{detail}</p>
                {code && (
                  <CodeBlock
                    code={code.content}
                    language={code.language}
                    filename={code.filename}
                  />
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Summary card */}
      <div className="mt-12 rounded-2xl border border-[rgba(249,115,22,0.25)] bg-orange-50 p-8">
        <h2 className="text-lg font-bold text-[#ea580c] mb-4">まとめ：効果的な使い方の3原則</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              number: '01',
              title: 'コンテキストを整える',
              desc: 'CLAUDE.mdを充実させ、プロジェクトの背景をClaude Codeに伝えましょう。',
            },
            {
              number: '02',
              title: 'タスクを分割する',
              desc: '一度に大きすぎる変更を依頼せず、小さなステップに分けて作業を進めましょう。',
            },
            {
              number: '03',
              title: 'Gitと組み合わせる',
              desc: 'こまめにコミットし、変更内容を必ずレビューしてから受け入れましょう。',
            },
          ].map(({ number, title, desc }) => (
            <div key={number}>
              <div className="text-3xl font-bold text-[rgba(249,115,22,0.25)] mb-2">{number}</div>
              <h3 className="text-sm font-semibold text-[#1f2328] mb-1">{title}</h3>
              <p className="text-xs text-[#656d76] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
