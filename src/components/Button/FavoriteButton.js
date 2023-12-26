import { StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {ADD_FAVORITE_LIST, REMOVE_FAVORITE_LIST} from '../../store/reducers/listReducer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MyColors from '../../theme/MyColors';

const FavoriteButton = ({item}) => {
    const dispatch = useDispatch();
    const {listFavorite} = useSelector(state => state.list);
    const isFavorite = listFavorite?.find(favori => favori.id === item.id);
    const handleFavorite = item => {
        const isFavorite = listFavorite?.find(favori => favori.id === item.id);
        if (!isFavorite) {
          dispatch(ADD_FAVORITE_LIST(item));
        } else {
         dispatch(REMOVE_FAVORITE_LIST(item));
        }
      };

  return (
    <TouchableOpacity
    style={styles.favorite}
    onPress={() => handleFavorite(item)}>
    <Icon
      name={isFavorite ? 'heart-multiple' : 'heart-plus-outline'}
      size={30}
      color={isFavorite ? MyColors.pending : MyColors.white}
    />
  </TouchableOpacity>
  )
}

export default FavoriteButton
const styles = StyleSheet.create({})