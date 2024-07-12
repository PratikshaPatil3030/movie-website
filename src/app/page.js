
import Link from 'next/link';
import React from 'react';
import Slider from './component/Slide';

import Image from 'next/image';


async function fetchMovies() {

  
  const apiUrl = 'https://imdb-top-100-movies.p.rapidapi.com/';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'c65abdd51emsh6972fb478b714a4p19a885jsnaaaccafd6916',
      'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
    }
  };
    
  const res = await fetch(apiUrl, options);
  if (!res.ok) {
    throw new Error(`Failed to fetch movies, status: ${res.status}`);
  }

  const data = await res.json();
  return data.slice(0, 8); 
}

export default async function moviepage() {
  const movies = await fetchMovies();
 
  return (
    <div className='my-5'>
      <Slider movies={movies}/>
       <div>
        <ul>
          <div className='display'>
          {
          movies.map((movie)=>(
            <li key={movie.id}>
              <div className='container my-3'>
                <div className='row'>
                  <div className='col-lg-4 col-12 col-sm-12'>
                  <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" style={{width: '18rem'}}>
                     <Image src={movie.image} alt={movie.title} width={280} height={310} className='img-fluid'/>
                        <div className="card-body">
                                <h5 className="card-title">{movie.title.substring(0,14)}</h5>
                                <p className="card-text">{movie.description.substring(0,75)}</p>
                             
                                <div className="d-grid gap-2">
                                <Link  href={`/movies/${movie.id}`} className="btn btn-secondary">View More</Link>
                                 </div>
                          </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))
        }
          </div>
        </ul>
       </div>
    </div>
  );
}
