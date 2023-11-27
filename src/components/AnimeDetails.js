import { useEffect, useState } from "react";
import StarComponent from "./StarComponent";

export default function AnimeDetails( {selectId, onCloseAnime, anime, onAddWatchedAnime, watchedAnime} ) {
const selectedAnime = anime.find((animeToSelect) => animeToSelect.mal_id === selectId);
const [userRating, setUserRating] = useState('');

const isWatched = watchedAnime.map((anime) => anime.animeId).includes(selectId);
const watchedUserRating = watchedAnime.find((anime) => anime.animeId === selectId)?.userRating


function handleAdd() {

  const animeToAdd = {
    animeId: selectId,
    title: selectedAnime.title,
    episodes: selectedAnime.episodes,
    duration: selectedAnime.duration,
    score: Number(selectedAnime.score),
    image: selectedAnime.images?.jpg?.image_url,
    userRating,

  }

  onAddWatchedAnime(animeToAdd);
  onCloseAnime();
};

useEffect(function() {
  if (!selectedAnime.title) return;
  document.title = `Movie | ${selectedAnime.title}`;

  return function() {
    document.title = 'Hey Anime!'
  }
}, 
[selectedAnime.title]);

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
    {!isWatched ? (
      <>
      <StarComponent maxRating={10} onSetRating={setUserRating} />
    {userRating > 0 && (
      <button onClick={handleAdd}>+ Add to list</button>
      )}
      </>) : (
        <p>You rated this anime {watchedUserRating}</p>
      )}
      <p>{selectedAnime.synopsis}</p>
    </div>
    
    </div>
  )
}