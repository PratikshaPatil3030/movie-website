import Image from 'next/image';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay, faMedal, faRankingStar, faStar } from '@fortawesome/free-solid-svg-icons';
async function fetchMovie(id) {
  
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
    throw new Error(`Failed to fetch movie, status: ${res.status}`);
  }
  const data = await res.json();
  const movie = data.find(movie => movie.id === id);
  return movie;
}

export default async function moviepage({params}) {
  const movies = await fetchMovie(params.id);
  
  return (
   <div>
   <div className='d-block d-md-none margin1'>
         <div className='container'>
                    <div className='row'>
                         <div className='col-12 col-sm-12'>
                            <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" >
                                <Image src={movies.image} alt={movies.title} width={340} height={280} className="img-fluid"/>
       
                                  <h4><span className='fw-semibold'>Title: </span><span className='fs-6'>{movies.title}</span></h4>
                                  <p className='fs-5' ><span className='fw-semibold'>Genres: </span><span className='fs-6'>{movies.genre}</span></p>
                                  <p className='fs-5'><span className='fw-semibold'>Description: </span><span className='fst-italic fs-6'>{movies.description}</span></p>
                             <div className="d-grid gap-2">
                                   <button className="btn btn-primary" type="button"><FontAwesomeIcon icon={faMedal}/> {movies.rank}</button>
                                    <button className="btn btn-secondary" type="button"><FontAwesomeIcon icon={faStar}/> {movies.rating}</button>
                                    <button className="btn btn-success" type="button"><FontAwesomeIcon icon={faCalendarDay}/> {movies.year}</button>
                              </div>
                            </div>
                         </div>
                     </div>
            </div>
   </div>

     <div className='d-none d-md-block'>
     <ul>
      <li key={movies.id}>
      <div className='container-fluid margin'>
      <div className="row shadow p-3 mb-5 rounded">
        <div className="col-lg-4">
         <Image src={movies.image} alt={movies.title} width={310} height={280} className='img-fluid'/>
        </div>
        <div className="col-lg-2">
        <h2>Title: </h2>
        
         <h3 className='fw-semibold'>Rank: </h3>
         <h3 className='fw-semibold'>Rating: </h3>
         <h3 className='fw-semibold'>Year: </h3>
         <h3 className='fw-semibold'>Generes: </h3>
         <h3 className='fw-semibold'>Description: </h3>
        </div>
        <div className="col-lg-6 ">
         <h2 className='fst-italic'>{movies.title}</h2>
         <h3 className='fst-italic'>{movies.rank}</h3>
         <h3 className='fst-italic'>{movies.rating}</h3>
         <h3 className='fst-italic'>{movies.year}</h3>
         <h3 className='fst-italic'>{movies.genre}</h3>
        <h3 className='fst-italic'>{movies.description}</h3>
        </div>
      </div>
    </div>
      </li>
    </ul>
     </div>
    </div>
  );
 
}


