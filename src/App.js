
import { Container } from 'react-bootstrap';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import MoviList from './components/MoviList';
import MoviDetails from './components/MoviDetails';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [items, setMoviItem] = useState([]);
  const [pageCount, setPageCount] = useState([]);


  const getAllMovies = async()=>{
  await  axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=7df033e4539b9505ea872b6154ce4ae6')
    .then((response) =>{
      setMoviItem(response.data.results);
      setPageCount(response.data.total_pages);
    }
    )}

    const getAllpages = async(page)=>{
      await  axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1
      &api_key=7df033e4539b9505ea872b6154ce4ae6&page=${page}`)
        .then((response) =>{
          setMoviItem(response.data.results);
          setPageCount(response.data.total_pages);
        }
        )}



  useEffect(() => {
    getAllMovies();
    },[])
  

  const searchFun = async(word) =>{
    if(word === ""){
      getAllMovies();
    }else{
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${word}&api_key=7df033e4539b9505ea872b6154ce4ae6`)
       setMoviItem(res.data.results);
       setPageCount(res.data.total_pages);
    }
  
  }

  return (
    <div className="color-body font">
      <NavBar searchFun={searchFun}/>
      <Container className=''>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<MoviList items={items} getAllpages={getAllpages} pageCount={pageCount}/>}/>
          <Route path='/movie/:id' element={<MoviDetails/>}/>
        </Routes>
        </BrowserRouter>
        
      </Container>
    </div>
  );
}

export default App;
