
import React from 'react'
import CardMovie from './CardMovie'
import { Row } from 'react-bootstrap';
import Pagimation from './Pagimation'

const MovieList = ({movies, getPageOfMovies, pageCount}) => {
  return (
    <Row className='mt-5'>
        {movies.length >= 1 ? (movies.map(item=>{
            return (

                <CardMovie key={item.id} item={item} />
            )
        })):<h2 className='text-center p-s'> No Movies Found...</h2>}

        {movies.length >= 1 ? (<Pagimation pageCount={pageCount} getPageOfMovies={getPageOfMovies}/>):null}
      
    </Row>
  )
}

export default MovieList;
