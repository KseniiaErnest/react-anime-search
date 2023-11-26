export default function AnimeDetails( {selectId, onCloseAnime, anime} ) {
const selectedAnime = anime.find((animeToSelect) => animeToSelect.mal_id === selectId)

  return(
    <div>
 
    <div className="anime-details-flex">
    <button className="btn-back" onClick={onCloseAnime}>&larr;</button>
<img src={selectedAnime.images?.jpg?.image_url} alt={selectedAnime.title} />
<div>
    <h3>{selectedAnime.title}</h3>
    <p>{selectedAnime.aired.prop.from.year}</p>
    <p>{selectedAnime.duration}</p>
    <p>{selectedAnime.episodes} episode(s)</p>
    <p>Rating: {selectedAnime.rating}</p>
    <p>⭐ {selectedAnime.score}</p>
    {selectedAnime.genres && (
          <p>Genres: {selectedAnime.genres.map((genre) => genre.name).join(', ')}</p>
        )}
    </div>
    </div>

    <div className="anime-details-synopsis">
      <p>{selectedAnime.synopsis}</p>
    </div>
    
    </div>
  )
}