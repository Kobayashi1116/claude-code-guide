import { useState } from 'react'
import { motion } from 'framer-motion'
import { features } from '../data/features'
import Badge from '../components/ui/Badge'
import SectionTitle from '../components/ui/SectionTitle'
import TerminalDemo from '../components/ui/TerminalDemo'

export default function Features() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <SectionTitle
        title="Claude Code でできること"
        subtitle="8つの機能を、実際の会話例とともに紹介します。「どんな場面で役立つか」がイメージしやすいように書きました。"
      />

      <div className="space-y-4">
        {features.map(({ emoji, title, plain, scene, demo, badge }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.35 }}
            className="rounded-xl border border-[#d0d7de] bg-white overflow-hidden"
          >
            {/* Header — always visible, clickable */}
            <button
              className="w-full flex items-center gap-4 p-5 text-left hover:bg-[#f6f8fa] transition-colors"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className="text-2xl shrink-0">{emoji}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-semibold text-[#1f2328]">{title}</span>
                  {badge && <Badge variant="accent">{badge}</Badge>}
                </div>
                <p className="text-sm text-[#656d76] mt-0.5 line-clamp-1">{plain}</p>
              </div>
              <span className="text-[#8c959f] shrink-0 text-lg transition-transform duration-200" style={{ transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                ▾
              </span>
            </button>

            {/* Expanded content */}
            {openIndex === i && (
              <div className="border-t border-[#d0d7de]">
                <div className="grid md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#d0d7de]">
                  {/* Left: explanation */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-xs font-semibold text-[#8c959f] uppercase tracking-wider mb-3">どんな機能？</h3>
                    <p className="text-sm text-[#1f2328] leading-relaxed mb-5">{plain}</p>

                    <div className="rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 p-4">
                      <p className="text-xs font-semibold text-[#c2410c] mb-2">📍 こんな場面で使える</p>
                      <p className="text-sm text-[#1f2328] leading-relaxed">{scene}</p>
                    </div>
                  </div>

                  {/* Right: demo */}
                  <div className="p-5 sm:p-6 bg-[#f6f8fa]">
                    <h3 className="text-xs font-semibold text-[#8c959f] uppercase tracking-wider mb-3">実際の会話例</h3>
                    <TerminalDemo messages={demo} />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
