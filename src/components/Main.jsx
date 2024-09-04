import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaVideo } from 'react-icons/fa';
import { CiBookmark } from "react-icons/ci";
import { MdLocalMovies } from "react-icons/md";
import useDebounce from '../utils/useDebounce';
import { useNavigate } from 'react-router-dom';
import http from '../utils/axios';

const Main = () => {
    const navigate = useNavigate();
    const [movie, setMovie] = useState([]);
    const [mark, setMark] = useState('');
    const [srch, setsrch] = useState('');
    const query = useDebounce(srch, 300);

    useEffect(() => {
        if (!query) {
            http.get("/movie?rating.imdb=8-10&limit=20")
                .then(resp => {
                    setMovie(resp.data.docs);
                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            http.get(`/movie/search?query=${query}`)
                .then(resp => {
                    setMovie(resp.data.docs);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, [query]);

    const handleSave = (mov) => {
        navigate('/bookmark');
        alert('Sizning sorovingiz bookmarkga qoshildi');

        let savedMovies = JSON.parse(localStorage.getItem('savedMovies')) || [];

        if (!savedMovies.some(movie => movie.id === mov.id)) {
            savedMovies.push(mov);
            localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
            setMark(mov);
        }
    };

    const handleInputChange = (e) => {
        setsrch(e.target.value);
    };

    return (
        <div className='main'>
            <div className="mainheader">
                <form>
                    <span><FiSearch size={24} /></span>
                    <input
                        type="search"
                        value={srch}
                        onChange={handleInputChange}
                        placeholder='Search for movies or TV series'
                    />
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
                        {movie.length > 0 && movie.map((mov, index) => (
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
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
