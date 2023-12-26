import {StyleSheet,TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  ADD_WATCH_LIST,
  REMOVE_WATCH_LIST,
} from '../../store/reducers/listReducer';
import MyColors from '../../theme/MyColors';

import Icon from 'react-native-vector-icons/Entypo';
const WatchingButton = ({item}) => {
  const dispatch = useDispatch();
  const {listWatching} = useSelector(state => state.list);
  const isWatchList = listWatching?.find(watch => watch.id === item.id);

  const handleWatchList = item => {
    const isWatchList = listWatching?.find(watch => watch.id === item.id);
    if (!isWatchList) {
      dispatch(ADD_WATCH_LIST(item));
    } else {
      dispatch(REMOVE_WATCH_LIST(item));
    }
  };

  return (
    <TouchableOpacity
      style={styles.watch}
      onPress={() => handleWatchList(item)}>
      <Icon
        name={isWatchList ? 'folder-video' : 'video'}
        size={30}
        color={isWatchList ? MyColors.warning : MyColors.white}
      />
    </TouchableOpacity>
  );
};

export default WatchingButton;

const styles = StyleSheet.create({});
