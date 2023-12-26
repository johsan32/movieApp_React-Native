import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MyColors from '../../theme/MyColors';
import Icon from 'react-native-vector-icons/Ionicons';
import {MyFonts} from '../../theme/MyFonts';
import {windowWidth} from '../../utils/constans';
import SearchList from '../../components/SearchList';
import {getSearchMovie} from '../../store/actions/movieActions';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {HOME} from '../../router/routes';
import LottieView from 'lottie-react-native';

const Search = () => {
  const [query, setQuery] = useState('');
  const {searchMovies} = useSelector(state => state.movies);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getSearchMovie(query));
  }, [query, dispatch]);

  return (
    <View style={{backgroundColor: MyColors.background, flex: 1}}>
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={() => navigation.navigate(HOME)}>
          <Icon name="caret-back-outline" size={50} color={MyColors.warning} />
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          placeholder="Film ara..."
          placeholderTextColor={MyColors.white}
          value={query}
          onChangeText={query => setQuery(query)}
        />
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => setQuery('')}>
            <Icon name="backspace-outline" size={50} color={MyColors.error} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section}>
        {searchData?.length > 0 ? (
          <View style={{flexDirection: 'row', paddingLeft: 15}}>
            <Text style={styles.textHead}>Arama sonuçları </Text>
            <Text style={[styles.textHead, {color: MyColors.active}]}>
              {' '}
              ({searchData?.length})
            </Text>
          </View>
        ) : (
          <TouchableOpacity onPress={() => navigation.navigate(HOME)}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,
              }}>
              <LottieView
                source={require('../../assets/animations/loading.json')}
                autoPlay
                loop
                style={{height: 500, width: 400}}
              />
            </View>
          </TouchableOpacity>
        )}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.searchList}>
          <FlatList
            data={searchMovies}
            key={item => item.id.toString()}
            renderItem={({item}) => <SearchList item={item} />}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Search;


const styles = StyleSheet.create({
  //içerikleri kaldrılmıştır...
 });
 
