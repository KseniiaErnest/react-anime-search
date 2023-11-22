import AnimeInfo from "./AnimeInfo";

export default function AnimeList( {anime} ) {

  return(
    <ul className="anime-ul">
{anime.map((oneAnime) => (
  <AnimeInfo oneAnime={oneAnime} key={oneAnime.id} />
))
  }
    </ul>
  )
}