//import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import { Container } from './styles';

function Details() {
  const { id } = useParams()
  const [movie, setMovie] = useState([])

  const imagePath = 'https://image.tmdb.org/t/p/w500/'

  useEffect(() => {
    fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PL-7ezpvNmHiBW8VP3VOvSGrg_kAqhQkc4&key=AIzaSyBRVZUoLIB1lU40K2Cz-LcMoEw-JYe5UQI`)
    .then(response => response.json())
    .then(data => {
      const {title, release_date, overview} = data
      const movie = {
        id,
        title,
        imagePath,
        sinopse: overview,
        releaseDate: release_date
      }
      setMovie(movie)
    })
  }, [id])

  return (
    <Container>
      <div className="movie">
    
     
      <div className="details">
        <h1>{movie.title}</h1>
        
        <span>Sinopse: {movie.sinopse}</span>

        <span className='release-date'>Release date: {movie.releaseDate}</span>
       

       </div>
         
        <span><Link to={`/${movie.id}`}><Button variant="primary" size="lg" width="80%">
          Assistir
        </Button></Link></span>

     

         </div>
       <div></div>
    </Container>

    

  );
}

export default Details;
