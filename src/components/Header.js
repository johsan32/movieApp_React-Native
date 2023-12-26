import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MyColors from '../theme/MyColors';
import Icon from 'react-native-vector-icons/AntDesign';
import {HOME, SEARCH} from '../router/routes';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      className="my-2"
      style={{backgroundColor: MyColors.background}}>
      <View className="flex-row justify-between items-center py-1 mx-3">
        <TouchableOpacity>
          <Icon name="indent-right" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableNativeFeedback onPress={() => navigation.navigate(HOME)}>
          <Image
            source={require('../assets/images/logo.png')}
            style={{width: 150, height: 40}}
          />
        </TouchableNativeFeedback>
        <TouchableOpacity onPress={() => navigation.navigate(SEARCH)}>
          <Icon name="search1" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({});
