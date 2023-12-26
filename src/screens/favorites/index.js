import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import ListMovie from '../../components/ListMovie';
import MyColors from '../../theme/MyColors';
import {windowHeight, windowWidth} from '../../utils/constans';
import {MyFonts} from '../../theme/MyFonts';
import LottieView from 'lottie-react-native';

const Favorites = () => {
  const {listFavorite} = useSelector(state => state.list);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Favori Listesi</Text>
      </View>
      <View>
        {listFavorite?.length === 0 && (
          <View
            style={{
              height: windowHeight/2,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <LottieView
              source={require('../../assets/animations/favorite.json')}
              autoPlay
              loop
              style={{height: 400, width: 400}}
            />
            <Text style={styles.nameText}> Listeniz boş </Text>
          </View>
        )}
      </View>
        <FlatList
          data={listFavorite}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <ListMovie item={item} />}
        />
    </View>
  );
};

export default Favorites;


const styles = StyleSheet.create({
  //içerikleri kaldrılmıştır...
 });
 