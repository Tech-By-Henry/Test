import { useEffect, useRef, useState } from 'react'
import { ExpandIcon } from './Icons'

export default function ScreenshotCard({ src, alt, caption, variant = 'desktop' }) {
  const [failed, setFailed] = useState(false)
  const [open, setOpen] = useState(false)
  const dialogRef = useRef(null)

  useEffect(() => {
    if (open) dialogRef.current?.showModal()
    else dialogRef.current?.close()
  }, [open])

  if (!src || failed) return null

  return (
    <>
      <figure className={`screenshot-card screenshot-card--${variant}`}>
        <div className="browser-frame">
          <div className="browser-bar" aria-hidden="true">
            <span /><span /><span /><i />
          </div>
          <div className="screenshot-media">
            <img src={src} alt={alt} onError={() => setFailed(true)} />
            <button className="expand-button" type="button" onClick={() => setOpen(true)} aria-label={`View ${alt} fullscreen`}>
              <ExpandIcon />
            </button>
          </div>
        </div>
        <figcaption>
          <span>{caption}</span>
        </figcaption>
      </figure>
      <dialog ref={dialogRef} className="image-dialog" onClose={() => setOpen(false)}>
        <button type="button" onClick={() => setOpen(false)} aria-label="Close fullscreen image">Close</button>
        <img src={src} alt={alt} />
      </dialog>
    </>
  )
}
