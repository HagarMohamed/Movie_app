import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import CardMovi from './CardMovi';
import PaginationComponent from './Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovie } from '../redux/actions/movieAction';

const MoviList = ({ getAllpages, pageCount}) => {

    const [items, setMoviItem] = useState([]);

    const dispatch = useDispatch();
    const moviesData = useSelector((state) => state.movies);


  useEffect(() => {
    dispatch(getAllMovie())
    },[])

    useEffect(() => {
      setMoviItem(moviesData);
      },[moviesData])

  return (
   <Row className='mt-3'>
    { items.length >= 1 ? (items.map((item) =>{
        return(

            <CardMovi key={item.id} item = {item}/>
            
        )

       
    })) 
    : <h3>لا يوجد بيانات </h3> 
        
}
<PaginationComponent getAllpages={getAllpages} pageCount={pageCount}/>
   </Row>
  )
}

export default MoviList
