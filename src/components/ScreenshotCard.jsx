import { useEffect, useRef, useState } from 'react'
import EmptyState from './EmptyState'
import { ExpandIcon } from './Icons'

export default function ScreenshotCard({ src, alt, placeholder, caption, screenSize, variant = 'desktop' }) {
  const [failed, setFailed] = useState(false)
  const [open, setOpen] = useState(false)
  const dialogRef = useRef(null)
  const hasImage = Boolean(src) && !failed

  useEffect(() => {
    if (open) dialogRef.current?.showModal()
    else dialogRef.current?.close()
  }, [open])

  return (
    <>
      <figure className={`screenshot-card screenshot-card--${variant}`}>
        <div className="browser-frame">
          <div className="browser-bar" aria-hidden="true">
            <span /><span /><span /><i />
          </div>
          <div className="screenshot-media">
            {hasImage ? (
              <>
                <img src={src} alt={alt} onError={() => setFailed(true)} />
                <button className="expand-button" type="button" onClick={() => setOpen(true)} aria-label={`View ${alt} fullscreen`}>
                  <ExpandIcon />
                </button>
              </>
            ) : <EmptyState label={placeholder} />}
          </div>
        </div>
        <figcaption>
          <span>{caption}</span>
          <span className="screen-size">{screenSize}</span>
        </figcaption>
      </figure>
      <dialog ref={dialogRef} className="image-dialog" onClose={() => setOpen(false)}>
        <button type="button" onClick={() => setOpen(false)} aria-label="Close fullscreen image">Close</button>
        {hasImage && <img src={src} alt={alt} />}
      </dialog>
    </>
  )
}
