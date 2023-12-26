import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../../utils/constans';
import Icon from 'react-native-vector-icons/Ionicons';
import MyColors from '../../theme/MyColors';
import {useNavigation} from '@react-navigation/native';

const GoBackButton = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.leftIcon}
        onPress={() => navigation.goBack()}>
        <Icon name="caret-back-sharp" size={50} color={MyColors.warning} />
      </TouchableOpacity>
    </View>
  );
};

export default GoBackButton ;


const styles = StyleSheet.create({
  //içerikleri kaldrılmıştır...
 });
 