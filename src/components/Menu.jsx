import React from 'react';
import '../components/index.css';
import { FaClapperboard } from "react-icons/fa6";
import { IoGrid } from "react-icons/io5";
import { MdLocalMovies } from "react-icons/md";
import { GiTv } from "react-icons/gi";
import { CiBookmark } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
const Menu = () => {
  const navigate = useNavigate('')
  function handlchange(e) {
    e.preventDefault()
    navigate('/bookmark')
  }
  function handlchangetwo(e) {
    e.preventDefault()
    navigate('/')
  }
  return (
    <div className='box'>
      <div className="bling">
        <FaClapperboard className='v' onClick={handlchangetwo} /> <br /> <br /> <br />
        <IoGrid className='vs' onClick={handlchangetwo} /> <br /> <br />
        <MdLocalMovies className='vs' /> <br /> <br />
        <GiTv className='vs' /> <br /><br />
        <CiBookmark className='vs' onClick={handlchange} /> <br />
      </div>
      <div className="bro">
        <img src="https://picsum.photos/200/300" alt="" />
      </div>
    </div>
  );
}

export default Menu;
