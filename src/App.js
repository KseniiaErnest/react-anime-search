import { useEffect, useState } from "react";
import Navbar from './components/Navbar';
import Search from './components/Search';
import Main from './components/Main';
import Box from './components/Box';
import AnimeList from "./components/AnimeList";

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
  const [anime, setAnime] = useState(animeListTemp);


  return (
    <div >
     <Navbar>
<Search />
     </Navbar>

     <Main>
<Box>
<AnimeList anime={anime} />
</Box>
<Box></Box>
     </Main>
    </div>
  );
}

export default App;
