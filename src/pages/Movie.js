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
      // console.log(movieData)
  } , [])

  // console.log(movie)
  console.log(movieId)

 console.log(movie.genres)
//  const genres = movie.genres

  const genreElements = movie.genres.map((movieGenre) => {
    // console.log(movieGenre)
    return <span>{movieGenre}</span>
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
       <h1>{movie.title}</h1>
       <p>{movie.time}</p>
       {/* <div>{genreElements}</div> */}
      </main>
    </>
  );
};

export default Movie;
