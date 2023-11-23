export default function AnimeInfo( {oneAnime, onSelectAnime} ) {

  return (
    <li className="anime-info-li" onClick={() => onSelectAnime(oneAnime.mal_id)}>
<img src={oneAnime.images?.jpg?.image_url} alt={oneAnime.title} />
<div>
  <h2>{oneAnime.title}</h2>
  <p>{oneAnime.type} <span>({oneAnime.episodes} episode(s))</span></p>
  {oneAnime.genres && (
          <p>Genres: {oneAnime.genres.map((genre) => genre.name).join(', ')}</p>
        )}
</div>
    </li>
  )
}