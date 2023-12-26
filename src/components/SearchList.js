import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../utils/constans';
import MyColors from '../theme/MyColors';
import {MyFonts} from '../theme/MyFonts';
import FavoriteButton from './Button/FavoriteButton';
import WatchingButton from './Button/WatchingButton';
import FragmanButton from './Button/FragmanButton';
import {useNavigation} from '@react-navigation/native';
import { DETAIL } from '../router/routes';
const SearchList = ({item}) => {
  const navigation =useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <TouchableOpacity
            onPress={()=>navigation.navigate(DETAIL, {item})}
        >
        <Image
          className="rounded-xl"
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item?.poster_path}`,
          }}
          style={{
            width: windowWidth * 0.37,
            height: windowHeight * 0.25,
          }}
          resizeMode="stretch"
        /></TouchableOpacity>
        <View style={styles.content}>
          <View>
            <Text style={styles.contentText}>{item.title}</Text>
            <Text style={styles.titleText}>{item?.original_title}</Text>
            <Text style={styles.descText} numberOfLines={4}>
              {item.overview.slice(0, 200)}{' '}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignSelf: 'stretch',
              marginHorizontal: 20,
            }}>
            <FragmanButton item={item} />
            <WatchingButton item={item} />
            <FavoriteButton item={item} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SearchList;


const styles = StyleSheet.create({
  //içerikleri kaldrılmıştır...
 });
 