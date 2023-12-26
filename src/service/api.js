import {requests} from './requests';

//home screen api istekleri
export const getTrendingMovies = () => requests.get('/trending/movie/day');
export const getNowPlayingMovies = () => requests.get('/movie/now_playing');
export const getPopularMovies = () => requests.get('/movie/popular');
export const getTopRatedMovies = () => requests.get('/movie/top_rated');
export const getUpcomingMovies = () => requests.get('/movie/upcoming');

//detail screen 
export const getDetailMovie = (id) => requests.get(`/movie/${id}`);
//detail smilar video
export const getDetailSmilarMovies= (id) => requests.get(`/movie/${id}/similar`);
//detail video cast
export const getCastMovies = (id) => requests.get(`/movie/${id}/credits`);
//detail movie poster
export const getPosterMovies = (id) => requests.get(`/movie/${id}/images`);
//reviews
export const getReviewMovies = (id) => requests.get(`/movie/${id}/reviews`);
//detail cast detail 
export const getCastDetail = (id) => requests.get(`/person/${id}`);
//person details
export const getPersonDetails = (id) => requests.get(`/person/${id}`);


export const getPersonDetailMovies = (id) => requests.get(`/person/${id}/combined_credits`);
// search datalar için data requesti
export const getSearchMovies = (query) => requests.get(`/search/movie?query=${query}`);
//fragman endpoint
export const getFragmanMovie = (id) => requests.get(`/movie/${id}/videos`);
//category leri listeleme
export const getGenresName = () => requests.get('/genre/movie/list');
