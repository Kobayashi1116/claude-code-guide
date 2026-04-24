import { motion } from 'framer-motion'
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
        subtitle="使い始めてすぐに役立つコツと、やりがちな失敗の対処法をまとめました。"
      />

      <div className="space-y-6">
        {tips.map(({ id, emoji, title, description, detail, category, code }, i) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          >
            <Card hover={false}>
              <div className="flex items-start gap-4 mb-4">
                <span className="text-2xl shrink-0">{emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap mb-2">
                    <h3 className="font-semibold text-[#1f2328]">{title}</h3>
                    <Badge variant={categoryVariants[category]}>
                      {categoryLabels[category]}
                    </Badge>
                  </div>
                  <p className="text-sm text-[#656d76] leading-relaxed">{description}</p>
                </div>
              </div>

              <div className="ml-0 sm:ml-10 pl-4 border-l-2 border-[#d0d7de]">
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

      {/* Summary */}
      <div className="mt-12 rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 p-6 sm:p-8">
        <h2 className="text-lg font-bold text-[#ea580c] mb-6">まとめ：うまく使うための3つのポイント</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              emoji: '📋',
              number: '01',
              title: 'CLAUDE.md を育てる',
              desc: 'プロジェクトの説明を書いておけば、毎回説明しなくて済む。使いながら少しずつ充実させましょう。',
            },
            {
              emoji: '🍕',
              number: '02',
              title: '小さく頼む',
              desc: '大きすぎる依頼はうまくいかないことが多い。ステップを分けて、確認しながら進めましょう。',
            },
            {
              emoji: '💾',
              number: '03',
              title: 'Git でこまめに保存',
              desc: 'Claudeが変更する前にコミットしておくと、何かあってもすぐ戻せる。これが一番大事です。',
            },
          ].map(({ emoji, number, title, desc }) => (
            <div key={number} className="flex gap-4">
              <div>
                <div className="text-3xl font-bold text-orange-200 mb-1">{number}</div>
                <div className="text-2xl mb-2">{emoji}</div>
                <h3 className="text-sm font-semibold text-[#1f2328] mb-1">{title}</h3>
                <p className="text-xs text-[#656d76] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
