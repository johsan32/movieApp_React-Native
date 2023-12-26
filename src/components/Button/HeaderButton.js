import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import {windowHeight, windowWidth} from '../../utils/constans';
import Icon from 'react-native-vector-icons/Ionicons';
import MyColors from '../../theme/MyColors';
import {useNavigation} from '@react-navigation/native';
import { options } from '../../service/axios';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
import FragmanButton from './FragmanButton';
import WatchingButton from './WatchingButton';
import FavoriteButton from './FavoriteButton';

const HeaderButton = ({item}) => {

  
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [fragman, setFragman] = useState(null);


  useEffect(() => {
    axios
      .get(`/movie/${item.id}/videos?language=en-US`, options)
      .then(res => setFragman(res.data.results))
      .catch(err => console.log(err));
  }, [item.id]);

  const watchFragman = () => {
    setModalVisible(!modalVisible);
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.leftIcon}
        onPress={() => navigation.goBack()}
      >
        <Icon name="caret-back-sharp" size={50} color={MyColors.warning} />
      </TouchableOpacity>
      <View style={styles.section}>
        <FragmanButton item={item} />
        <WatchingButton item={item}  />
        <FavoriteButton  item={item} />
      </View>
    </View>
  );
};

export default HeaderButton;


const styles = StyleSheet.create({
  //içerikleri kaldrılmıştır...
 });
 
