import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
const MovieDetails = () => {

    const getParams = useParams()
    
    const [mov, setMov]=useState([])

    const getAllMovies = async ()=>{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${getParams.id}?api_key=1d21a7c6e01bb2a4b1d445dbddc1fd22&language=en`)
        setMov(res.data)
    }

    useEffect(()=>{
        getAllMovies()
        console.log(mov)
    },[])


  return (
    <>
        <Row className='justify-content-center mt-5 pt-5'>
            <Col md="12" xs="12" sm="12" className='mt-4'>
                <div className='card-details d-flex align-items-center py-3'>
                    <img className='img-movie w-30 px-3' src={`https://image.tmdb.org/t/p/w500/` + mov.poster_path} alt='asd'/>
                    <div className='justify-content-center text-center mx-auto'>
                        <p className='card-text-details border-bottom'>
                            Movie Name: {mov.original_title} 
                        </p>
                        <p className='card-text-details border-bottom'>
                            Date Od Movie: {mov.release_date}
                        </p>
                        <p className='card-text-details border-bottom'>
                            Number Of Rates: {mov.vote_count}
                        </p>
                        <p className='card-text-details border-bottom'>
                            Rates: {mov.vote_average}
                        </p>
                    </div>
                </div>
            </Col>
        </Row>
        <Row className='justify-content-center'>
            <Col md="12" xs="12" sm="12" className="mt-2 d-flex justify-content-center">
                <div className='card-story d-flex flex-column align-item-start'>
                    <div className='text-start p-4'>
                        <p className='card-text-title border-bottom'>The Story: </p>
                    </div>

                    <div className='text-start px-2'>
                        <p className='card-text-title border-bottom'>{mov.overview}</p>
                    </div>
                </div>
            </Col>
        </Row>
        <Row className='justify-content-center'>
            <Col md="10" xs="10" sm="12" className="mt-12 d-flex justify-content-center">
                <Link to="/">
                    <button style={{ border: "none"}} className='btn btn-primary mx-2'>Return To Main Page</button>
                </Link>
                <a href={mov.homepage} target='_blank'>
                    <button style={{ border: "none"}} className='btn btn-primary mx-2'>Watch A Movie</button>
                </a>

            </Col>
        </Row>
    </>
  )
}

export default MovieDetails;
