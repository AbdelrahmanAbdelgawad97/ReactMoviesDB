import {Col} from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

const CardMovie = ({item}) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className='mt-5'>
      <Link to={`/movie/${item.id}`}>
        <div>
          <Zoom>
            <div className='card'>
              <img src={`https://image.tmdb.org/t/p/w500/` + item.poster_path} className='card_image' alt="" />
              <div className='card_overlay'>
                <div className='overlay_text text-center  p-2'>
                  <p>Movie Name: {item.original_title}</p>
                  <p>Publishing Date: {item.release_date} </p>
                  <p>Number Of Rates: {item.vote_count} </p>
                  <p>Rate: {item.vote_average} </p>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </Link>
    </Col>
  )
}

export default CardMovie;
