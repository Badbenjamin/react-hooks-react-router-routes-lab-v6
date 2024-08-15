import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then(response => response.json())
      .then(movieData => setMovies(movieData))
      .catch(error => console.error(error))
  }, [])

  const movieList = movies.map((movie) => {
    return <MovieCard key={movie.id} title={movie.title} movie={movie} />
  })
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {movieList}
      </main>
    </>
  );
};

export default Home;
