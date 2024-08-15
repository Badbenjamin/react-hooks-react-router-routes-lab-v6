import { Link } from 'react-router-dom';

function MovieCard({ title, movie }) {

  return (
    <article>
      <h2>{title}</h2>
      <Link to={`/movie/${movie.id}`}>Movie</Link>
    </article>
  );
};

export default MovieCard;