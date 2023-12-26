import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {MyFonts} from '../../theme/MyFonts';
import MyColors from '../../theme/MyColors';
import {useNavigation} from '@react-navigation/native';
import {PERSON} from '../../router/routes';


const MovieCast = ({item}) => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, marginVertical: 10, marginHorizontal: 1}}>
      <Text
        className="text-lg mt-5 text-white ml-3 mb-1 "
        style={{fontFamily: MyFonts.fontPoppinsR}}>
        Oyuncular
      </Text>
      <View>
        <FlatList
          data={item}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 20}}
          horizontal
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.content}
              onPress={() => navigation.navigate(PERSON, {item: item})}>
              <View style={styles.imageView}>
                <Image
                  source={{
                    uri: item?.profile_path
                      ? `https://image.tmdb.org/t/p/original${item?.profile_path}`
                      : 'https://i.pravatar.cc/300',
                  }}
                  style={styles.image}
                  resizeMode="stretch"
                />
              </View>
              <Text style={styles.textName}>"{item?.character}"</Text>
              <Text style={styles.descText}>{item?.original_name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default MovieCast;

const styles = StyleSheet.create({
  //içerikleri kaldrılmıştır...
 });
 