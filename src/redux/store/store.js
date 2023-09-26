// import { createStore } from 'redux'
//import { createStoreHook } from 'react-redux';
import { moviesReducer } from '../reducer/movieReducer';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
//import { composeWithDevTools } from 'redux-devtools-extension';

//1-create store

export const store = configureStore({ reducer: moviesReducer}, applyMiddleware(thunk));