"use client";
import { useState, useEffect } from "react";
import { useSearch } from "../context/SearchContext";
import Image from "next/image";
import Link from "next/link";


const apiUrl = 'https://imdb-top-100-movies.p.rapidapi.com/';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '88324f36f5msh3fae116b24e1378p1f622bjsne2f70e5b5a7c',
    'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
  }
};

export default function Home2() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const { searchTerm } = useSearch();

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(apiUrl, options);
      if (!res.ok) {
        throw new Error(`Failed to fetch movies, status: ${res.status}`);
      }
      const data = await res.json();
      setMovies(data);

      if (searchTerm) {
        const filtered = data.filter((movie) =>
          movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredMovies(filtered);
      }
    };
    fetchMovies();
  }, [searchTerm]);

  return (
    <div className="my-3"><br/><br/><br/>
      <h1 className="text-center fw-bold">All movies</h1>
      {searchTerm ? (
       <ul>
       <div className='display'>
       {
       filteredMovies.map((movie)=>(
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
      ) : (
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
      )}
    </div>
  );
}
