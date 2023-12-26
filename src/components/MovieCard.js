import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { DETAIL } from '../router/routes';
import { windowHeight, windowWidth } from '../utils/constans';
import { MyFonts } from '../theme/MyFonts';

const MovieCard = ({item}) => {
  const navigation =useNavigation()

  return (
    <TouchableOpacity className="rounded-lg mb-2"
    onPress={()=>navigation.navigate(DETAIL, {item})}
    >
      <View
        style={{
          borderRadius: 10,
          width: windowWidth * 0.6,
          height: windowHeight * 0.4,
          marginTop: 10,
        }}>
        <Image
          className="rounded-xl"
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item?.poster_path}`,
          }}
          style={{
            width: '100%',
            height: '100%',
          }}
          resizeMode="stretch"
        />
      </View>
      <Text className="w-full right-0 left-0 text-center text-white " style={{fontFamily:MyFonts.fontPoppinsR}}>
        {item?.title?.length > 30
          ? item.original_title.slice(0, 30) + '...'
          : item.original_title}
      </Text>
    </TouchableOpacity>
  );
};

export default MovieCard;
