import { useEffect, useState } from "react";
import Navbar from './components/Navbar';
import Search from './components/Search';
import Main from './components/Main';
import Box from './components/Box';
import AnimeList from "./components/AnimeList";
import Loader from "./components/Loader";
import Error from "./components/Error";
import AnimeDetails from "./components/AnimeDetails";
import WatchedAnimeSummary from "./components/WatchedAnimeSummary";
import WatchedAnimeList from "./components/WatchedAnimeList";

function App() {
  const [anime, setAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [selectId, setSelectId] = useState(null);
  // const [watchedAnime, setWatchedAnime] = useState([]);
  const [watchedAnime, setWatchedAnime] = useState(function() {
    const storedValue = localStorage.getItem('watchedAnime');
    return JSON.parse(storedValue);
  });
  // const tempQueary = 'naruto';

  function handleSelectAnime(id) {
    setSelectId((currentId) => (id === currentId ? null : id));
  };

  function handleCloseAnime() {
    setSelectId(null);
  };

  function handleWatchedAnime(animeToAdd) {
    setWatchedAnime((currentWatched) => [...currentWatched, animeToAdd]);

    // localStorage.setItem('watchedAnime', JSON.stringify([...watchedAnime, animeToAdd]))
  };

  function handleDeleteWatchedAnime(id) {
    setWatchedAnime((currentWatched) => currentWatched.filter((animeToDelete) => animeToDelete.animeId !== id));
  };

  useEffect(function() {
    localStorage.setItem('watchedAnime', JSON.stringify(watchedAnime))
  }, [watchedAnime])
  

  useEffect(function () {
const controller = new AbortController();

    async function fetchAnime() {
      try{
        setIsLoading(true);
        setError('');
      const res = await fetch(`https://api.jikan.moe/v4/anime?q=${query}`, { signal: controller.signal });

      if (!res.ok) throw new Error('Something went wrong with fetching anime')

      const data = await res.json();
      // if (data.length === 0) throw new Error('Anime not found')
      console.log(data.data);

      setAnime(data.data);
      setError('');
      
    }catch(err) {
      if (err.name !== "AbortError") {
        setError(err.message);
      }

    }finally {
      setIsLoading(false);
    }
    }
    if (query.length < 3) {
      setAnime([]);
      setError('');
      return;
    }
 
handleCloseAnime();    
fetchAnime();

return function() {
  controller.abort()
};
  }, [query]);

  return (
    <div >
     <Navbar>
<Search query={query} setQuery={setQuery} />
     </Navbar>

     <Main>
<Box>
{/* {isLoading ? <Loader /> : <AnimeList anime={anime} />} */}
{isLoading && <Loader />}
{!isLoading && !error && <AnimeList anime={anime} onSelectAnime={handleSelectAnime} />}
{error && <Error message={error}/>}
</Box>
<Box>
  {selectId ? 
  (<AnimeDetails selectId={selectId} onCloseAnime={handleCloseAnime} anime={anime} onAddWatchedAnime={handleWatchedAnime} watchedAnime={watchedAnime} />)
  :
  (<>
    <WatchedAnimeSummary watchedAnime={watchedAnime} />
  <WatchedAnimeList watchedAnime={watchedAnime} onDeleteWatchedAnime={handleDeleteWatchedAnime} />
  </>  )
    
  }

</Box>
     </Main>
    </div>
  );
}

export default App;
