const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function WatchedAnimeSummary( {watchedAnime} ) {
  const avgAnimeRating = average(watchedAnime.map((anime) => anime.score));
  const avgUserRating = average(watchedAnime.map((anime) => anime.userRating));

  return(
    <div className="watched-anime-container">
    <h3>Anime you watched</h3>
    <div>
      <p>{watchedAnime.length} movies</p>
      <div className="rating-box">
      <img className="rating" src="/rating.png" alt="icon" />
      <span>{avgAnimeRating.toFixed(2)}</span>
      </div>

      <div className="rating-box">
      <img className="rating" src="/user rating.png" alt="icon" />
      <span>{avgUserRating.toFixed(2)}</span>
      </div>
    
    
    </div>
    </div>
  )
}