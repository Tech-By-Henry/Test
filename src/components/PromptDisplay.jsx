import { useState } from 'react'
import { CheckIcon, CopyIcon } from './Icons'

export default function PromptDisplay({ prompt, label }) {
  const [copied, setCopied] = useState(false)

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(prompt)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = prompt
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      textarea.remove()
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className="prompt-box">
      <div className="prompt-toolbar">
        <span><i aria-hidden="true" /> {label}</span>
        <button className="copy-button" type="button" onClick={copyPrompt} aria-live="polite">
          {copied ? <CheckIcon /> : <CopyIcon />}
          {copied ? 'Copied' : 'Copy prompt'}
        </button>
      </div>
      <pre><code>{prompt}</code></pre>
    </div>
  )
}
