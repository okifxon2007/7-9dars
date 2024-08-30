import React, { useEffect, useState } from 'react';
import { MdLocalMovies } from "react-icons/md";
import '../components/index.css'
import Menu from '../components/Menu';
const Book = () => {
    const [savedMovies, setSavedMovies] = useState([]);

    useEffect(() => {
        const tok = localStorage.getItem(savedMovies)
        const movies = JSON.parse(localStorage.getItem('savedMovies')) || [];
        setSavedMovies(movies);
    }, []);

    return (
        <div className="saved-movies">
            <h1>Bookmark</h1>
            <Menu></Menu>
            <div className="reccarddff">
                
                {savedMovies.length > 0 ? (
                    savedMovies.map((movie, index) => (
                     <div className="ml">
                           <div className="reccardd" key={index}>
                            <img src={movie.poster?.previewUrl} alt={movie.name} />
                            <div className="recpar">
                                <p>
                                    <span>{movie.year}</span>
                                    <span><MdLocalMovies className='icon' /> {movie.type}</span>
                                    <span>PG</span>
                                </p>
                                <h3>{movie.name}</h3>
                              
                            </div>
                        </div>
                        
                     </div>
                    ))
                ) : (
                    <p className='vp'>No saved movies found.</p>
                )} <br />
               
            </div>
        </div>
    );
}

export default Book;
