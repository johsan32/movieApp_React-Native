import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import {MyFonts} from '../../theme/MyFonts';
import {windowHeight} from '../../utils/constans';
import MyColors from '../../theme/MyColors';
import {
  getPersonDetail,
  getPersonDetailMovie,
} from '../../store/actions/movieActions';
import GoBackButton from '../../components/Button/GoBackButton';

const Person = () => {
  const {item} = useRoute().params;
  const dispatch = useDispatch();
  const {personDetail, personDetailMovies} = useSelector(state => state.movies);

  useEffect(() => {
    dispatch(getPersonDetail(item.id));
    dispatch(getPersonDetailMovie(item.id));
  }, [item.id, dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.goBack}>
        <GoBackButton />
      </View>
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/w500${personDetail?.profile_path}`,
        }}
        resizeMode="stretch"
        style={styles.image}>
        <View style={styles.infoView}>
          <View style={{flex: 3, justifyContent: 'flex-end'}}>
            <Text style={styles.headText}>{personDetail?.name}</Text>
            {personDetail?.biography && (
              <Text style={styles.titleText}>{personDetail?.biography}</Text>
            )}
            <Text style={styles.descText}>{personDetail?.birthday}</Text>
            <Text style={styles.descText}>{personDetail?.place_of_birth}</Text>
          </View>

          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <FlatList
              data={personDetailMovies}
              horizontal
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <View>
                  <Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500${item?.poster_path}`,
                    }}
                    style={{
                      width: 120,
                      height: 180,
                      marginRight: 7,
                      borderRadius: 8,
                    }}
                  />
                  {item?.poster_path && (
                    <Text style={styles.text}>
                      {item?.original_title?.length > 12
                        ? item.original_title.slice(0, 12) + '...'
                        : item.original_title}
                    </Text>
                  )}
                </View>
              )}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Person;

const styles = StyleSheet.create({
  //içerikleri kaldrılmıştır...
 });
 
