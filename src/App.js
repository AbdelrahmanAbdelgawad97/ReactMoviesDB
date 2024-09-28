import './App.css';
import NavBar from './Components/NavBar'
import MovieList from './Components/MovieList'
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieDetails from './Components/MovieDetails'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const getAllMovies = async ()=>{
    const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=1d21a7c6e01bb2a4b1d445dbddc1fd22&language=en-US&page=1')
    setMovies(res.data.results)
    setPageCount(res.data.total_pages)
  }

  const getPageOfMovies = async (numOfPage)=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1d21a7c6e01bb2a4b1d445dbddc1fd22&language=en-US&page=${numOfPage}`)
    setMovies(res.data.results)
    setPageCount(res.data.total_pages)
  }

  useEffect(()=>{
    getAllMovies();
  },[])


  const searchMovies = async (results) => {
    if (results === "") {
      getAllMovies()
    } else  {
      const searchResult = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1d21a7c6e01bb2a4b1d445dbddc1fd22&query=${results}&language=en`)
      setMovies(searchResult.data.results)
      setPageCount(searchResult.data.total_pages)
    }
  }
  
  return (
    <div className="">
      <NavBar searchMovies={searchMovies}/>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MovieList movies={movies} getPageOfMovies={getPageOfMovies} pageCount={pageCount} />}/>
            <Route path='/movie/:id' element={<MovieDetails />}/>
            
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
