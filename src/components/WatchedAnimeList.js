import StarComponent from "./StarComponent"

export default function WatchedAnimeList( {watchedAnime, onDeleteWatchedAnime} ) {

  return(
    <ul className="anime-ul">
    {watchedAnime.map((anime) => (
      <li className="anime-info-li">
      <img src={anime.image} alt={anime.title} />
      <div>
        <h2>{anime.title}</h2>
        <p>{anime.score}</p>
        <p>{anime.userRating}</p>
        <p>{anime.episodes} episode(s) * {anime.duration}</p>
        <button onClick={() => onDeleteWatchedAnime(anime.animeId)}>X</button>
      </div>
      </li>
    ))
     
      }
    </ul>
  )
}

