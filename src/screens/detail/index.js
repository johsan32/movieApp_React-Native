import {ScrollView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import MovieCast from '../../components/detail/MovieCast';
import DetailHero from '../../components/detail/DetailHero';
import Reviews from '../../components/detail/Reviews';
import MoviePoster from '../../components/detail/MoviePoster';
import MyColors from '../../theme/MyColors';
import {useDispatch, useSelector} from 'react-redux';
import {getCastMovie, getDetailMovies, getPosterMovie, getSimilarVideo} from '../../store/actions/movieActions';
import MovieList from '../../components/MovieList';


const Detail = ({route}) => {
  const dispatch = useDispatch();
  const {item} = route.params;
  const movie_id = item?.id;
  const {castMovie, similarMovies, posterMovie}= useSelector((state)=>state.movies)

  useEffect(() => {
    dispatch(getSimilarVideo(movie_id));
    dispatch(getCastMovie(movie_id))
    dispatch(getPosterMovie(movie_id))
    dispatch(getDetailMovies(movie_id))
  }, [movie_id, dispatch]);

console.log("imm", posterMovie);
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <DetailHero item={item} />
      <MovieCast item={castMovie} />
      <MovieList item ={similarMovies} title={"Önerilen Filmler"}/>
      <MoviePoster movie={posterMovie} />
      <Reviews item={item} />
    </ScrollView>
  );
};

export default Detail;


const styles = StyleSheet.create({
  //içerikleri kaldrılmıştır...
 });
 
