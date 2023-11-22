export default function Navbar({children}) {

  return (
    <nav className="navbar">
<div className="nav-logo">
  <span>🎉</span>
  <h1>Hey Anime!</h1>
</div>
{children}
<p className="nav-result">Found X results</p>
    </nav>
  )
}