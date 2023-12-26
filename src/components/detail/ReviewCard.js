import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MyColors from '../../theme/MyColors';
import {MyFonts} from '../../theme/MyFonts';
import {windowWidth} from '../../utils/constans';

const ReviewCard = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View style={styles.imageView}>
          {item?.author_details.avatar_path ? (
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/original${item?.author_details.avatar_path}`,
              }}
              style={styles.image}
            />
          ) : (
            <Image
              source={require('../../assets/images/unknown.jpg')}
              style={styles.image}
            />
          )}
          <View className="ml-2">
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.nameText}> {item?.author}</Text>
              <Text style={styles.userNameText}>
                ({item?.author_details.username})
              </Text>
            </View>
            <Text style={styles.dateText}>
              {' '}
              {item?.created_at.substring(0, 10)}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>{item?.content}</Text>
      </View>
    </View>
  );
};

export default ReviewCard;


const styles = StyleSheet.create({
  //içerikleri kaldrılmıştır...
 });
 
