import { useState } from 'react'
import { ExternalIcon } from './Icons'

const viewportOptions = {
  desktop: { label: 'Desktop', size: '1440px wide' },
  mobile: { label: 'iPhone 14', size: '390 × 844' },
}

export default function WebsitePreview({ url, title }) {
  const [viewport, setViewport] = useState('desktop')
  const hasUrl = Boolean(url)

  return (
    <div className="website-preview-panel">
      <div className="preview-controls">
        <div>
          <p className="eyebrow">Live page review</p>
          <h3>{title}</h3>
          <p>Open the generated website directly, or preview it here with a desktop frame or an iPhone 14-sized frame.</p>
        </div>
        <div className="viewport-toggle" role="group" aria-label="Preview viewport">
          {Object.entries(viewportOptions).map(([key, option]) => (
            <button
              key={key}
              type="button"
              className={viewport === key ? 'is-active' : ''}
              onClick={() => setViewport(key)}
              aria-pressed={viewport === key}
            >
              <span>{option.label}</span>
              <small>{option.size}</small>
            </button>
          ))}
        </div>
      </div>

      {hasUrl ? (
        <>
          <div className={`live-frame-shell live-frame-shell--${viewport}`}>
            <iframe src={url} title={`${title} ${viewportOptions[viewport].label} preview`} loading="lazy" />
          </div>
          <a className="button button--dark" href={url} target="_blank" rel="noreferrer">
            Open generated page <ExternalIcon />
          </a>
        </>
      ) : (
        <div className="live-preview-empty">
          <strong>Generated page link not attached yet.</strong>
          <span>Add the live URL when the AI page is ready, then this panel will render it with the desktop/iPhone toggle.</span>
        </div>
      )}
    </div>
  )
}
