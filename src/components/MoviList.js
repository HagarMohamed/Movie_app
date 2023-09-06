import React from 'react'
import { Row } from 'react-bootstrap';
import CardMovi from './CardMovi';
import PaginationComponent from './Pagination';

const MoviList = ({items, getAllpages, pageCount}) => {
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
