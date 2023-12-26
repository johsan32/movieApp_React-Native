import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../utils/constans';
import MyColors from '../theme/MyColors';
import {MyFonts} from '../theme/MyFonts';
import {useRoute} from '@react-navigation/native';
import FavoriteButton from './Button/FavoriteButton';
import WatchingButton from './Button/WatchingButton';

const ListMovie = ({item}) => {
  const route = useRoute();

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Image
          className="rounded-xl"
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item?.poster_path}`,
          }}
          style={{
            width: windowWidth * 0.3,
            height: windowHeight * 0.2,
          }}
          resizeMode="stretch"
        />
        <View style={styles.content}>
          <Text style={styles.contentText}>{item.title}</Text>
          <Text style={styles.titleText}>"{item?.original_title}"</Text>
        </View>
        <View style={{position: 'absolute', bottom: 5, right: 5}}>
          {route.name === 'Favorites' && <FavoriteButton item={item} />}
        </View>
        <View style={{position: 'absolute', bottom: 5, right: 5}}>
          {route.name === 'Watching' && <WatchingButton item={item} />}
        </View>
      </View>
    </View>
  );
};

export default ListMovie;


const styles = StyleSheet.create({
  //içerikleri kaldrılmıştır...
 });
 
