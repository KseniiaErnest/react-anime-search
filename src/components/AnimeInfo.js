export default function AnimeInfo( {oneAnime} ) {

  return (
    <li className="anime-info-li">
<img src={oneAnime.image} alt={oneAnime.title} />
<div>
  <h2>{oneAnime.title}</h2>
</div>
    </li>
  )
}