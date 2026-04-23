import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Copy, Check } from 'lucide-react'

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
}

export default function CodeBlock({ code, language = 'bash', filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-lg border border-[#d0d7de] my-4 shadow-sm overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#24292f] border-b border-[#444c56] min-w-0">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          {filename && (
            <span className="text-xs text-[#8b949e] ml-2 font-mono">{filename}</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#6e7681] font-mono">{language}</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 text-xs text-[#8b949e] hover:text-white transition-colors px-2 py-1 rounded hover:bg-[#444c56]"
            aria-label="コピー"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-green-400" />
                <span className="text-green-400">コピー済み</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>コピー</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code — overflow-x-auto enables horizontal scroll on narrow screens */}
      <div className="overflow-x-auto">
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: '1rem',
          background: '#1e1e2e',
          fontSize: '0.875rem',
          lineHeight: '1.6',
        }}
        showLineNumbers={code.split('\n').length > 5}
      >
        {code.trim()}
      </SyntaxHighlighter>
      </div>
    </div>
  )
}
