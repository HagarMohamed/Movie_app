import axios from 'axios';
import { AllMOVIES } from '../types/moviesType';
import { movieApi } from '../types/moviesType';


export const getAllMovie = () =>{

    return  async(dispatch) =>{
        const res = await axios.get(movieApi);
        dispatch({type: AllMOVIES, data: res.data.results, pages: res.data.total_pages})

    }

   
}

export const searchOnMovie = (word) =>{

    return  async(dispatch) =>{
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${word}&api_key=7df033e4539b9505ea872b6154ce4ae6`)
        dispatch({type: AllMOVIES, data: res.data.results, pages: res.data.total_pages})

    }

   
}

export const getPage = (page) =>{

    return  async(dispatch) =>{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1
        &api_key=7df033e4539b9505ea872b6154ce4ae6&page=${page}`)
        dispatch({type: AllMOVIES, data: res.data.results, pages: res.data.total_pages})

    }

   
}