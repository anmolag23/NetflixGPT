import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({posterPath}) => {
  return (
    <div className='card'>
        <img className='card_img' alt="Movie Card" src={IMG_CDN_URL + posterPath}/>
    </div>
  )
}

export default MovieCard;