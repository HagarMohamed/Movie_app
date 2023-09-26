
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../images/logo.png'
import { useDispatch } from 'react-redux';
import { getAllMovie, searchOnMovie } from '../redux/actions/movieAction';
const NavBar = () => {
    
   const dispatch = useDispatch();
  
    function handleChange(word) {
        searchFun(word);
    }

    const searchFun = async(word) =>{
      if(word === ""){
      
        dispatch(getAllMovie())
      }else{
        
        dispatch(searchOnMovie(word))
        // setPageCount(res.data.total_pages);
      }
    
    }
  
   
  return (
    <div className='nav-style w-100'>
        <Container>
        <Row className="pt-2 ">
          <Col xs="2" lg="1">
            <a href="/">
              <img className="logo" src={logo} alt="dfs" />
            </a>
          </Col>
          <Col xs="10" lg="11" className=" d-flex align-items-center">
            <div className="search  w-100">
              <i className="fa fa-search"></i>
              <input onChange={(e)=>handleChange(e.target.value)}
               type="text" className="form-control" placeholder="ابحث" />
            </div>
          </Col>
        </Row>
    </Container>
    </div>
  )
}

export default NavBar
