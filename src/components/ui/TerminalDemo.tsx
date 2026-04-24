interface TerminalMessage {
  type: 'input' | 'output' | 'action' | 'success' | 'divider'
  text: string
}

interface TerminalDemoProps {
  messages: TerminalMessage[]
  title?: string
}

export default function TerminalDemo({ messages, title = 'Terminal' }: TerminalDemoProps) {
  return (
    <div className="rounded-xl border border-[#d0d7de] overflow-hidden shadow-md my-4 font-mono text-sm">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#24292f]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="text-xs text-[#8b949e] ml-2">{title}</span>
      </div>

      {/* Content */}
      <div className="bg-[#0d1117] px-5 py-4 space-y-1.5 overflow-x-auto">
        {messages.map((msg, i) => {
          if (msg.type === 'divider') {
            return <div key={i} className="border-t border-[#30363d] my-2" />
          }
          if (msg.type === 'input') {
            return (
              <div key={i} className="flex items-start gap-2">
                <span className="text-[#7ee787] shrink-0">❯</span>
                <span className="text-[#e6edf3]">{msg.text}</span>
              </div>
            )
          }
          if (msg.type === 'action') {
            return (
              <div key={i} className="flex items-start gap-2 text-[#8b949e]">
                <span className="shrink-0 text-[#f0883e]">⟳</span>
                <span>{msg.text}</span>
              </div>
            )
          }
          if (msg.type === 'success') {
            return (
              <div key={i} className="flex items-start gap-2">
                <span className="shrink-0 text-[#7ee787]">✓</span>
                <span className="text-[#7ee787]">{msg.text}</span>
              </div>
            )
          }
          // output
          return (
            <div key={i} className="flex items-start gap-2">
              <span className="shrink-0 text-[#79c0ff]">Claude</span>
              <span className="text-[#c9d1d9]">{msg.text}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
