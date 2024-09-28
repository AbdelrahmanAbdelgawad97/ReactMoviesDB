
import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import logo from '../images/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const NavBar = ({searchMovies}) => {

  const searchMovie = (result) => {
    searchMovies(result)
  }

  return (
    <div className='nav-style w-100 fixed-top mb-5'>
      <Container>
        <Row className='pt-2'>
            <Col xs="2" lg="1">
            <a href="/">

                <img className='logo' src={logo} alt=""/>
            </a>
            </Col>
            <Col xs="10" lg="11" className='d-flex align-items-center'>
                <div className='search w-100'>
                    <div className="text-end ">
                        <FontAwesomeIcon className='position-absolute top-50 end-0 translate-middle-y px-4' icon={faSearch} />
                    </div>

                    <input type='text' className='form-control' placeholder='Search' onChange={(e)=>searchMovie(e.target.value)}></input>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default NavBar;
