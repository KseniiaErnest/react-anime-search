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
      <p>⭐ {avgAnimeRating.toFixed(2)}</p>
      <p>✨ {avgUserRating.toFixed(2)}</p>
      <p>⏰min</p>
    </div>
    </div>
  )
}