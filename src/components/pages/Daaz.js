import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Movie, MovieList } from './styles';


function Todosf() {

  const imagePath = 'https://image.tmdb.org/t/p/w500/'

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/4/list/8212230?api_key=fcfe44809de84129fab53e785124bb95&language=pt-BR`)
    .then(response => response.json())
    .then(data => {
      setMovies(data.results)
    })
  }, [])

  return (

  <Container>
      <MovieList>
      {movies.map(movie => {
        return (
          <Movie key={movie.id}>
            <Link to={`/details/${movie.id}`}>
              <img src={`${imagePath}${movie.poster_path}`} alt={movie.title}/>
            </Link>
            
            <span>{movie.title}</span>

          </Movie>
        )
      })}
      </MovieList>
    </Container>
  );
}

export default Todosf;
