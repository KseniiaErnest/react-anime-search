import Message from "./Message";
import StarComponent from "./StarComponent"

export default function WatchedAnimeList( {watchedAnime, onDeleteWatchedAnime} ) {

if (!watchedAnime.length) return <Message message='Add anime in your watch list!' />

  return(
    <ul className="anime-ul">
    {watchedAnime?.map((anime) => 
{console.log('anime:', anime);
    return (
      <li className="anime-info-li" key={anime.animeId}>
      <img src={anime?.image} alt={anime?.title} />
      <div>
      
        <h2>{anime?.title}</h2>
        <p>{anime?.episodes} episode(s) * {anime?.duration}</p>
        <p>Average rating: {anime?.score}</p>
        <p>Your rating: {anime?.userRating}</p>
      </div>
      <button onClick={() => onDeleteWatchedAnime(anime?.animeId)}>X</button>
      </li>
    )}
    )}
    </ul>
  )
}

