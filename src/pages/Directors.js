import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";


function Directors() {
  const [directors, setDirectors] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/directors`)
      .then(response => response.json())
      .then(directorData => setDirectors(directorData))
  } , [])

  const directorElement = directors.map((director) => {

    const movieList = director.movies.map(movie => {
      return <li>{movie}</li>
    })

    return (
      <article>
        <h2>{director.name}</h2>
        <ul>{movieList}</ul>
      </article>
    )
  })

  console.log(directors)

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <h1>Directors Page</h1>
      <main>
        {directorElement}
      </main>
    </>
  );
};

export default Directors;
