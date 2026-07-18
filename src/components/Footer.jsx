export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>AI Failure and Correction Pairs</p>
        <p>Assignment documentation · {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
