import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  FETCH_GENRES,
  FETCH_NOW_PLAYING,
  FETCH_POPULAR,
  FETCH_TOP_RATED,
  FETCH_UPCOMING,
  FETCH_TRENDING_ALL,
  FETCH_GENRE_MOVIES,
  FETCH_DETAIL_MOVIES,
  FETCH_SEARCH_MOVIES,
  FETCH_FRAGMAN_MOVIE,
  FETCH_SIMILAR_MOVIES,
  FETCH_CAST_MOVIES,
  FETCH_POSTER_MOVIES,
  FETCH_PERSON_DETAIL,
  FETCH_PERSON_DETAIL_MOVIES,
  FETCH_REVIEWS_MOVIES,
} from '../reducers/moviesSlice';
import {
  getTrendingMovies,
  getUpcomingMovies,
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getGenresName,
  getGenresMovies,
  getDetailMovie,
  getSearchMovies,
  getFragmanMovie,
  getCastMovies,
  getPosterMovies,
  getDetailSmilarMovies,
  getPersonDetails,
  getPersonDetailMovies,
  getReviewMovies,
} from '../../service/api';

export const getTrendingAll = createAsyncThunk(
  'movies/FETCH_TRENDING_ALL',
  async (_, {dispatch}) => {
    const response = await getTrendingMovies();
    dispatch(FETCH_TRENDING_ALL(response.results));
  },
);
export const getNowPlaying = createAsyncThunk(
  'movies/FETCH_NOW_PLAYING',
  async (_, {dispatch}) => {
    const response = await getNowPlayingMovies();
    dispatch(FETCH_NOW_PLAYING(response.results));
  },
);
export const getPopular = createAsyncThunk(
  'movies/FETCH_POPULAR',
  async (_, {dispatch}) => {
    const response = await getPopularMovies();
    dispatch(FETCH_POPULAR(response.results));
  },
);
export const getTopRated = createAsyncThunk(
  'movies/FETCH_TOP_RATED',
  async (_, {dispatch}) => {
    const response = await getTopRatedMovies();
    dispatch(FETCH_TOP_RATED(response.results));
  },
);
export const getUpComing = createAsyncThunk(
  'movies/FETCH_UPCOMING',
  async (_, {dispatch}) => {
    const response = await getUpcomingMovies();
    dispatch(FETCH_UPCOMING(response.results));
  },
);
//categoriler
export const getGenres = createAsyncThunk(
  'movies/FETCH_GENRES',
  async (_, {dispatch}) => {
    const response = await getGenresName();
    dispatch(FETCH_GENRES(response.genres));
  },
);
// category movies
export const getGenreMovies = createAsyncThunk(
  'movies/FETCH_GENRE_MOVIES',
  async (id, {dispatch}) => {
    const response = await getGenresMovies(id);
    dispatch(FETCH_GENRE_MOVIES(response.results));
  },
);
export const getDetailMovies = createAsyncThunk(
  'movies/FETCH_DETAIL_MOVIES',
  async (id, {dispatch}) => {
    const response = await getDetailMovie(id);
    dispatch(FETCH_DETAIL_MOVIES(response));
  },
);
export const getSearchMovie = createAsyncThunk(
  'movies/FETCH_SEARCH_MOVIES',
  async (query, {dispatch}) => {
    const response = await getSearchMovies(query);
    dispatch(FETCH_SEARCH_MOVIES(response.results.slice(0, 75)));
  },
);

export const getFragman = createAsyncThunk(
  'movies/FETCH_FRAGMAN_MOVIE',
  async (id, {dispatch}) => {
    const response = await getFragmanMovie(id);
    dispatch(FETCH_FRAGMAN_MOVIE(response.results));
  },
);
//detail similar videos
export const getSimilarVideo = createAsyncThunk(
  'movies/FETCH_SIMILAR_MOVIES',
  async (id, {dispatch}) => {
    const response = await getDetailSmilarMovies(id);
    dispatch(FETCH_SIMILAR_MOVIES(response.results));
  },
);
//detail CAST videos
export const getCastMovie = createAsyncThunk(
  'movies/FETCH_CAST_MOVIE',
  async (id, {dispatch}) => {
    const response = await  getCastMovies(id);
    dispatch(FETCH_CAST_MOVIES(response.cast));
  },
);
//detail poster videos
export const getPosterMovie = createAsyncThunk(
  'movies/FETCH_POSTER_MOVIES',
  async (id, {dispatch}) => {
    const response = await  getPosterMovies(id);
    dispatch(FETCH_POSTER_MOVIES(response.backdrops));
  },
);
export const getReviewMovie = createAsyncThunk(
  'movies/FETCH_REVIEWS_MOVIES',
  async (id, {dispatch}) => {
    const response = await  getReviewMovies(id);
    dispatch(FETCH_REVIEWS_MOVIES(response.results));
  },
);
//person detail
export const getPersonDetail = createAsyncThunk(
  'movies/FETCH_PERSON_DETAIL',
  async (id, {dispatch}) => {
    const response = await  getPersonDetails(id);
    dispatch(FETCH_PERSON_DETAIL(response));
  },
); 

export const getPersonDetailMovie = createAsyncThunk(
  'movies/FETCH_PERSON_DETAIL_MOVIES',
  async (id, {dispatch}) => {
   console.log("person action");
    const response = await  getPersonDetailMovies(id);
    dispatch(FETCH_PERSON_DETAIL_MOVIES(response.cast));
  },
);