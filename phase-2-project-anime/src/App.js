import React, {useState, useEffect} from 'react'
import Header from "./components/Header";
import AnimeList from "./components/AnimeList";

const animesApi = "https://api.jikan.moe/v4/anime"

function App() {
  const [animeList, setAnimeList] = useState([])

  useEffect(() => {
    fetch(animesApi)
    .then(r => r.json())
    .then(data => setAnimeList(data))
  }, [])

  return (
    <div className="App">
    <Header animeList={animeList}/>

    </div>
    );
}

export default App; 