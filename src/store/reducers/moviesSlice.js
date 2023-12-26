import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  trendingAll: [],
  nowPlaying: [],
  upComing: [],
  popular: [],
  topRated: [],
  genres: [],
  genreMovies: [],
  searchMovies: [],
  reviews:[],
  detail: {},
  similarMovies:[],
  castMovie:[],
  castDetail:{},
  personDetail:[],
  personDetailMovies:[],
  posterMovie:[],
  fragman: [],
  video: [],
  isLoading: true,
};
const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    FETCH_TRENDING_ALL: (state, action) => {
      state.trendingAll = action.payload;
    },
    FETCH_NOW_PLAYING: (state, action) => {
      state.nowPlaying = action.payload;
    },
    FETCH_POPULAR: (state, action) => {
      state.popular = action.payload;
    },
    FETCH_TOP_RATED: (state, action) => {
      state.topRated = action.payload;
    },
    FETCH_UPCOMING: (state, action) => {
      state.upComing = action.payload;
    },
    FETCH_GENRES: (state, action) => {
      state.genres = action.payload;
    },
    FETCH_GENRE_MOVIES: (state, action) => {
      state.genreMovies = action.payload;
    },
    FETCH_DETAIL_MOVIES: (state, action) => {
      state.detail = action.payload;
    },
    FETCH_SEARCH_MOVIES: (state, action) => {
      state.searchMovies = action.payload;
    },
    FETCH_FRAGMAN_MOVIE: (state, action) => {
      state.fragman = action.payload;
    },
    FETCH_SIMILAR_MOVIES: (state, action) => {
      state.similarMovies = action.payload;
    },
    FETCH_CAST_MOVIES: (state, action) => {
      state.castMovie = action.payload;
    },
    FETCH_POSTER_MOVIES:(state, action) => {
      state.posterMovie = action.payload;
    },
    FETCH_REVIEWS_MOVIES:(state, action) => {
      state.reviews = action.payload;
    },
    FETCH_PERSON_DETAIL:(state, action) => {
      state.personDetail = action.payload;
    },
    FETCH_PERSON_DETAIL_MOVIES:(state, action) => {
      state.personDetailMovies = action.payload;
    },
  },
});

export const {
  FETCH_TRENDING_ALL,
  FETCH_TOP_RATED,
  FETCH_GENRES,
  FETCH_UPCOMING,
  FETCH_NOW_PLAYING,
  FETCH_POPULAR,
  FETCH_GENRE_MOVIES,
  FETCH_DETAIL_MOVIES,
  FETCH_SEARCH_MOVIES,
  FETCH_FRAGMAN_MOVIE,
  FETCH_SIMILAR_MOVIES,
  FETCH_CAST_MOVIES,
  FETCH_POSTER_MOVIES,
  FETCH_REVIEWS_MOVIES,
  FETCH_PERSON_DETAIL,
  FETCH_PERSON_DETAIL_MOVIES,
} = moviesSlice.actions;

export default moviesSlice.reducer;
