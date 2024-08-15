import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const [movie, setMovie] = useState({})
  const params = useParams()
  const movieId = params.id

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
      .then(response => response.json())
      .then(movieData => setMovie(movieData))
  })
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {movie.title}
      </main>
    </>
  );
};

export default Movie;
