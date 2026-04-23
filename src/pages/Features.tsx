import { motion } from 'framer-motion'
import { features } from '../data/features'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import SectionTitle from '../components/ui/SectionTitle'

export default function Features() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <SectionTitle
        title="Claude Code でできること"
        subtitle="コード生成からCI/CD連携まで、開発ワークフロー全体をカバーする機能を紹介します。"
      />

      <div className="grid md:grid-cols-2 gap-6">
        {features.map(({ icon: Icon, title, description, examples, badge }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          >
            <Card className="h-full">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-[#f97316]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="font-semibold text-[#1f2328]">{title}</h3>
                    {badge && <Badge variant="accent">{badge}</Badge>}
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#656d76] leading-relaxed mb-4">{description}</p>

              <div>
                <p className="text-xs font-medium text-[#8c959f] uppercase tracking-wider mb-2">使い方の例</p>
                <ul className="space-y-1.5">
                  {examples.map((ex) => (
                    <li key={ex} className="flex items-start gap-2 text-sm">
                      <span className="text-[#f97316] mt-0.5 flex-shrink-0">›</span>
                      <span className="text-[#656d76] font-mono text-xs leading-relaxed">{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
