import StarComponent from "./StarComponent"

export default function WatchedAnimeList( {watchedAnime} ) {

  return(
    <ul className="anime-ul">
    {watchedAnime.map((anime) => (
      <li className="anime-info-li">
      <img src={anime.image} alt={anime.title} />
      </li>
    ))
     
      }
    </ul>
  )
}

