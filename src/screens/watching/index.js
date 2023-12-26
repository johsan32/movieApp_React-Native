import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import ListMovie from '../../components/ListMovie';
import MyColors from '../../theme/MyColors';
import {windowHeight, windowWidth} from '../../utils/constans';
import {MyFonts} from '../../theme/MyFonts';
import LottieView from 'lottie-react-native';

const Watching = () => {
  const {listWatching} = useSelector(state => state.list);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>İzleme Listesi</Text>
      </View>
      <View>
        {listWatching?.length === 0 && 
        <View
        style={{
          height:windowHeight/1.3,
          alignItems: 'center',
          justifyContent: 'center',
        }}>        
        <LottieView
          source={require('../../assets/animations/watching.json')}
          autoPlay
          loop
          style={{height: 300, width: 300}}
        />
         <Text style={styles.nameText}> Listeniz boş </Text>
      </View>        
        }
      </View>
        <FlatList
          data={listWatching}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <ListMovie item={item} />}
        />  
    </View>
  );
};

export default Watching;

const styles = StyleSheet.create({
 //içerikleri kaldrılmıştır...
});
