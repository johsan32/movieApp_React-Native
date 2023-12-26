import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getGenres} from '../../store/actions/movieActions';
import CategoryCard from '../../components/CategoryCard';
import MyColors from '../../theme/MyColors';
import {MyFonts} from '../../theme/MyFonts';
import Header from '../../components/Header';

const Category = () => {
  const {genres} = useSelector(state => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Header />
      <Text
        className="text-2xl text-center my-2"
        style={{fontFamily: MyFonts.fontPoppinsR, color:MyColors.warning}}>
        Kategoriler
      </Text>
      <FlatList
        data={genres}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View>
            <Text style={styles.titleCat}>{item.name}</Text>
            <CategoryCard categoryId={item.id} />
          </View>
        )}
      />
    </View>
  );
};

export default Category;


const styles = StyleSheet.create({
  //içerikleri kaldrılmıştır...
 });
 
