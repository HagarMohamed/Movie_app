import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useParams, } from 'react-router-dom'

const MoviDetails = () => {
    const param = useParams();
    console.log(param.id);

    const [movi, setMoviDetail] = useState([])

    const getMoviDetails = async()=>{
        await  axios.get(`https://api.themoviedb.org/3/movie/${param.id}?language=ar-US&
        page=1&api_key=7df033e4539b9505ea872b6154ce4ae6`)
          .then((response) =>{
            setMoviDetail(response.data);
          }
          )}

     useEffect(() => {
        getMoviDetails();
          },[])

  return (
    <div>
            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-4 ">
                    <div className="card-detalis  d-flex align-items-center ">
                        <img
                            className="img-movie w-30"
                            src={`https://image.tmdb.org/t/p/w500${movi.poster_path}`}
                            alt="ascad"
                        />
                        <div className="justify-content-center text-center  mx-auto">
                            <p className="card-text-details border-bottom">
                                اسم الفيلم: {movi.title}
                            </p>
                            <p className="card-text-details border-bottom">
                                تاريخ الفيلم : {movi.release_date}
                            </p>
                            <p className="card-text-details border-bottom">
                                عدد المقيمين : {movi.vote_count}
                            </p>
                            <p className="card-text-details border-bottom">
                                التقييم : {movi.vote_average}
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-1 ">
                    <div className="card-story  d-flex flex-column align-items-start">
                        <div className="text-end p-4 ">
                            <p className="card-text-title border-bottom">القصة:</p>
                        </div>
                        <div className="text-end px-2">
                            <p className="card-text-story">{movi.overview}</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col
                    md="10"
                    xs="12"
                    sm="12"
                    className="mt-2 d-flex justify-content-center ">
                    <Link to="/">
                        <button
                            style={{ backgroundColor: "#b45b35", border: "none" }}
                            className="btn btn-primary mx-2">
                            عوده للرئيسيه
                        </button>
                    </Link>
                    <a href={movi.backdrop_path02133} >
                        <button
                            style={{ backgroundColor: "#b45b35", border: "none" }}
                            className="btn btn-primary">
                            مشاهده الفيلم
                        </button>
                    </a>
                </Col>
            </Row>
        </div>
  )
}

export default MoviDetails
