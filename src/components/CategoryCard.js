import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React, {useEffect} from 'react';
import {windowHeight, windowWidth} from '../utils/constans';
import MyColors from '../theme/MyColors';
import {useNavigation} from '@react-navigation/native';
import {DETAIL} from '../router/routes';
import {useDispatch, useSelector} from 'react-redux';


const CategoryCard = ({categoryId}) => {
  const {genreMovies} = useSelector(state => state.movies);
  const navigation = useNavigation();
  const dispatch = useDispatch();


  useEffect(() => {
   dispatch(getGenreMovies(categoryId));
}, [categoryId, dispatch]);

  return (
    <View>
      <Text className="text-white"> {genreMovies.original_title}</Text>

      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}
        data={genreMovies}
        keyExtractor={item => item.id.toString()}
        horizontal
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate(DETAIL, {item})}>
            <View className="mr-2 space-y-1">
              <Image
                className="rounded-3xl"
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item?.poster_path}`,
                }}
                style={{
                  width: windowWidth * 0.33,
                  height: windowHeight * 0.22,
                }}
              />
              <Text className="text-white ml-1">
                {item?.title.length > 15
                  ? item.title.slice(0, 15) + '...'
                  : item.title}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoryCard;


const styles = StyleSheet.create({
  //içerikleri kaldrılmıştır...
 });
 
