export default function AnimeDetails( {selectId, onCloseAnime, anime} ) {
const selectedAnime = anime.find((animeToSelect) => animeToSelect.mal_id === selectId)

  return(
    <div>
    <button onClick={onCloseAnime}>&larr;</button>
    <h2>{selectedAnime.title}</h2>
    
    </div>
  )
}