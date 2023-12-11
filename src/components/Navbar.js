export default function Navbar({children, anime}) {

  return (
    <nav className="navbar">
<div className="nav-logo">
  <img className="logo" src={process.env.PUBLIC_URL +"/animelogo.png"} alt="logo" />
  <h1>Hey Anime!</h1>
</div>
{children}
<p className="nav-result">Found {anime.length} results</p>
    </nav>
  )
}