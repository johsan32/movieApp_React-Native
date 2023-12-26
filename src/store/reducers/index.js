import { combineReducers } from '@reduxjs/toolkit';
import movieReducer from "./moviesSlice";
import listReducer from './listReducer';


export const rootReducer = combineReducers({
  movies: movieReducer,
 list: listReducer,
});