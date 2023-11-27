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

const animeListTemp = [
  {title: 'Naruto',
image: 'https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg',
id: 0,
},

{title: 'Attack on Titan',
image: 'https://upload.wikimedia.org/wikipedia/en/d/d6/Shingeki_no_Kyojin_manga_volume_1.jpg',
id: 1,
},

{title: 'Erased',
image: 'https://m.media-amazon.com/images/M/MV5BYzJmZjZkMjQtZjJmZC00M2JkLTg5MzktN2FkOTllNTc5MmMzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg',
id: 2,
},

]

function App() {
  const [anime, setAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [selectId, setSelectId] = useState(null);
  const [watchedAnime, setWatchedAnime] = useState([]);
  // const tempQueary = 'naruto';

  function handleSelectAnime(id) {
    setSelectId((currentId) => (id === currentId ? null : id));
  };

  function handleCloseAnime() {
    setSelectId(null);
  };

  function handleWatchedAnime(animeToAdd) {
    setWatchedAnime((currentWatched) => [...currentWatched, animeToAdd]);
  };

  function handleDeleteWatchedAnime(id) {
    setWatchedAnime((currentWatched) => currentWatched.filter((animeToDelete) => animeToDelete.animeId !== id));
  }
  

  useEffect(function () {

    async function fetchAnime() {
      try{
        setIsLoading(true);
        setError('');
      const res = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&limit=5`);

      if (!res.ok) throw new Error('Something went wrong with fetching anime')

      const data = await res.json();
      // if (data.length === 0) throw new Error('Anime not found')
      console.log(data.data);

      setAnime(data.data);
      
    }catch(err) {
setError(err.message);
    }finally {
      setIsLoading(false);
    }
    }
    if (query.length < 3) {
      setAnime([]);
      setError('');
      return;
    }
fetchAnime();
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
