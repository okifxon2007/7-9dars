import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaVideo } from 'react-icons/fa';
import { CiBookmark } from "react-icons/ci";
import { MdLocalMovies } from "react-icons/md";

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate('')
    const [movie, setMovie] = useState([]);
    const [mark, setMark] = useState('');
    
    useEffect(() => {
        axios.get("https://api.kinopoisk.dev/v1.4/movie?rating.imdb=8-10&limit=20", {
            headers: {
                "X-API-KEY": "5VG027W-AF1462B-GJ6MJH2-5G6QR8Q"
            }
        })
            .then(resp => {
                setMovie(resp.data.docs);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const handleSave = (mov) => {
        navigate('/bookmark')
        alert('Sizning sorovingiz bookmarkga qoshildi')

        let savedMovies = JSON.parse(localStorage.getItem('savedMovies')) || [];

       
        if (!savedMovies.some(movie => movie.id === mov.id)) {
           
            savedMovies.push(mov);

           
            localStorage.setItem('savedMovies', JSON.stringify(savedMovies));

            
            setMark(mov);
        }
    }

    return (
        <div className='main'>
            <div className="mainheader">
            
                <form>
                    <span><FiSearch size={24} /></span>
                    <input type="text" placeholder='Search for movies or TV series' />
                </form>
            </div>
            <div className="maintranding">
                <h1>Trending</h1>
                <div className="cardtrenddf">
                    <div className="cardtrand">
                        <div className="trandingcardpar">
                            <CiBookmark className='vsicon' />
                            <p><span>2024</span> <span><FaVideo /> Movie</span> <span>PG</span></p>
                            <h2>Надрез</h2>
                        </div>
                    </div>
                    <div className="cardtrandd">
                        <div className="trandingcardpar">
                            <CiBookmark className='vsicon' />
                            <p><span>2024</span> <span><FaVideo /> Anime</span> <span>PG</span></p>
                            <h2>Оглянись</h2>
                        </div>
                    </div>
                </div>

                <br />
                <br />
                <div className="recomended">
                    <h1>Recommended For You</h1>
                    <div className="reccarddf">
                        {movie.length > 0 && movie.map((mov, index) => {
                            return (
                                <div className="reccard" key={index}>
                                    <CiBookmark 
                                        className='reci' 
                                        onClick={() => handleSave(mov)} 
                                    />
                                    <img src={mov.poster?.previewUrl} alt={mov.name} />
                                    <div className="recpar">
                                        <p>
                                            <span>{mov.year}</span>
                                            <span><MdLocalMovies className='is' /> {mov.type}</span>
                                            <span>PG</span>
                                        </p>
                                        <h3>{mov.name}</h3>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;
