import {
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  getGenres,
  getTopRated,
  getTrendingAll,
  getUpComing,
  getNowPlaying,
  getPopular,
} from '../../store/actions/movieActions';
import TrendingMovies from '../../components/TrendingMovies';
import MovieList from '../../components/MovieList';
import MyColors from '../../theme/MyColors';
import Header from '../../components/Header';

export default function Home() {
  const dispatch = useDispatch();
  const {upComing, popular, topRated, nowPlaying} = useSelector(state => state.movies);

  useEffect(() => {
    dispatch(getTrendingAll());
    dispatch(getNowPlaying());
    dispatch(getPopular());
    dispatch(getTopRated());
    dispatch(getGenres());
    dispatch(getUpComing());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={MyColors.background}
      />
      <Header />
      <ScrollView>
        <TrendingMovies />
        <MovieList title="Now Playing" item={nowPlaying} />
        <MovieList title="Popular" item={popular} />
        <MovieList title="Top Rated" item={topRated} />
        <MovieList title="Upcoming" item={upComing} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MyColors.background,
  },
});
