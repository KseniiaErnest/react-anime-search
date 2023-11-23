import AnimeInfo from "./AnimeInfo";

export default function AnimeList( {anime, onSelectAnime} ) {

  return(
    <ul className="anime-ul">
{anime.map((oneAnime) => (
  <AnimeInfo oneAnime={oneAnime} key={oneAnime.mal_id} onSelectAnime={onSelectAnime} />
))
  }
    </ul>
  )
}