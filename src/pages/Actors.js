import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/actors`)
      .then(response => response.json())
      .then(actorData => setActors(actorData))
  } , [])

  console.log(actors)

  const actorElement = actors.map(actor => {
    
    const actorMovies = actor.movies.map(movie => {
      return <li>{movie}</li>
    })
    
    return(
      <article>
        <h2>{actor.name}</h2>
        <ul>{actorMovies}</ul>
      </article>
    )
  })

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        {actorElement}
      </main>
    </>
  );
};

export default Actors;
