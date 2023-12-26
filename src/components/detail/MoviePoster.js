import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {MyFonts} from '../../theme/MyFonts';
import {windowHeight, windowWidth} from '../../utils/constans';

const MoviePoster = ({movie}) => {

  return (
    <View className="my-3 w-full">
      <Text
        className="text-lg mt-5 text-white ml-3 "
        style={{fontFamily: MyFonts.fontPoppinsR}}>
        Posterler
      </Text>
      <Carousel
        data={movie}
        renderItem={({item}) => (
          <View
            style={{
              borderRadius: 10,
              width: windowWidth*0.9,
              height: windowHeight * 0.35,
              marginTop: 10,
              alignSelf: 'center',
            }}>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/original${item?.file_path}`,
              }}
              style={{
                width: '100%',
                height: '100%',
                alignSelf: 'center',
                borderRadius: 20,
              }}
              resizeMode="stretch"
            />
          </View>
        )}
        firstItem={1}
        inactiveSlideScale={1}
        sliderWidth={windowWidth}
        itemWidth={windowWidth}
      />
    </View>
  );
};

export default MoviePoster;

const styles = StyleSheet.create({});
