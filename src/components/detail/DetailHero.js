import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MyFonts} from '../../theme/MyFonts';
import {windowHeight, windowWidth} from '../../utils/constans';
import MyColors from '../../theme/MyColors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderButton from '../Button/HeaderButton';
import {useSelector} from 'react-redux';

const DetailHero = ({item}) => {
  const {detail} = useSelector(state => state.movies);

  return (
    <View style={styles.container}>
      <HeaderButton item={item} />
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/w500${item?.backdrop_path}`,
        }}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.infoView}>
          <View style={{justifyContent: 'flex-start', flex: 1, marginTop: 70}}>
            {detail?.tagline && (
              <Text style={styles.tagline}>
                {'< '}
                {detail?.tagline}
                {' >'}
              </Text>
            )}
          </View>
          <Text style={styles.headText}>{item?.title}</Text>
          <Text style={styles.titleText}>{item?.original_title}</Text>
          <View style={{flexDirection: 'row'}}>
            {detail?.genres?.map((genre, index) => (
              <>
                <Text key={genre.id} style={styles.genreText}>
                  {genre.name}
                </Text>
                {index !== detail.genres.length - 1 && (
                  <Text style={styles.lineStyle}>{' | '}</Text>
                )}
              </>
            ))}
          </View>
          <Text style={styles.descText}>{item?.overview}</Text>

          <View style={styles.section}>
            <View style={styles.sectionItem}>
              <Image
                source={require('../../assets/images/imdb.png')}
                style={styles.imageLeft}
                resizeMode="stretch"
              />
              <Text style={styles.infoText}>
                {item?.vote_average.toFixed(1)}
              </Text>
            </View>
            <View style={styles.sectionItem}>
              <Icon name="movie-open-play" size={30} color="#fff" />
              <Text style={styles.infoText}>{item?.popularity}</Text>
            </View>
            <View style={styles.sectionItem}>
              <Image
                source={require('../../assets/images/language.png')}
                style={styles.imageRight}
                resizeMode="stretch"
              />
              <Text style={styles.infoText}>
                {item?.original_language?.toUpperCase()}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default DetailHero;


const styles = StyleSheet.create({
  //içerikleri kaldrılmıştır...
 });
 
