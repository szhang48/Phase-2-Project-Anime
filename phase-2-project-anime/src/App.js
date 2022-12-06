import React, {useState, useEffect} from 'react'

const animesApi = "https://api.jikan.moe/v4/anime"

function App() {
  const [animeList, setAnimeList] = useState([])

  useEffect(() => {
    fetch(animesApi)
    .then(r => r.json())
    .then(data => setAnimeList(data))
  }, [])

  return (
    <div className="App">Anime aslkmdlakmd</div>
  );
}

export default App; 