import { ReactNode } from 'react'

interface ScenarioBoxProps {
  emoji: string
  scene: string
  children?: ReactNode
}

export default function ScenarioBox({ emoji, scene, children }: ScenarioBoxProps) {
  return (
    <div className="rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 p-5 my-4">
      <div className="flex items-start gap-3">
        <span className="text-2xl shrink-0">{emoji}</span>
        <div>
          <p className="text-sm font-semibold text-[#c2410c] mb-1">こんな場面で使える</p>
          <p className="text-sm text-[#1f2328] leading-relaxed">{scene}</p>
          {children && <div className="mt-3">{children}</div>}
        </div>
      </div>
    </div>
  )
}
