import {View} from 'react-native';
import React from 'react';
import { useSelector} from 'react-redux';
import Carousel from 'react-native-snap-carousel';
import MovieCard from './MovieCard';
import { windowWidth } from '../utils/constans';


const TrendingMovies = () => {
  const {trendingAll}= useSelector((state)=>state.movies);


  return (
    <View className="">
      <Carousel
        data={trendingAll}
        renderItem={({item}) => <MovieCard item={item} />}
        firstItem={3}
        inactiveSlideScale={0.8}
        sliderWidth={windowWidth}
        itemWidth={windowWidth * 0.60}
      />
    </View>
  );
};

export default TrendingMovies;
