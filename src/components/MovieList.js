import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import { DETAIL } from '../router/routes';
import {useNavigation} from '@react-navigation/native';
import { windowHeight, windowWidth } from '../utils/constans';
import { MyFonts } from '../theme/MyFonts';
import MyColors from '../theme/MyColors';

const MovieList = ({title, item}) => {
  const navigation =useNavigation()
  return (
    <View className=" mt-2 space-y-3 border-b-[1px] pb-2">
      <View className="flex-row mx-4 justify-between items-center">
        <Text className="text-white text-lg" style={{fontFamily:MyFonts.fontPoppinsR}}>{title}</Text>
        <TouchableOpacity>
      {  title &&  <Text className="text-md" style={{fontFamily:MyFonts.fontPoppinsR, color:MyColors.warning}}>See All</Text>}
        </TouchableOpacity>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}
        horizontal
        keyExtractor={item => item.id.toString()}
        data={item}
        renderItem={({item}) => (
          <TouchableOpacity
          onPress={()=>navigation.navigate(DETAIL, {item})}
          >
            <View className="mr-2 space-y-1 ">
              <Image
                className="rounded-xl"
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item?.poster_path}`,
                }}
                style={{
                  width: windowWidth * 0.40,
                  height: windowHeight * 0.27,
                }}
              />
              <Text className="text-neutral-300 ml-2">
                {item?.title?.length > 20
                  ? item.title.slice(0, 20) + '...'
                  : item.title}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MovieList;
