import {
  FlatList,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useEffect,} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import MyColors from '../../theme/MyColors';
import { MyFonts } from '../../theme/MyFonts';
import ReviewCard from './ReviewCard';
import { getReviewMovie } from '../../store/actions/movieActions';

const Reviews = ({item}) => {
  const dispatch = useDispatch();
  const {reviews} = useSelector(state => state.movies);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    dispatch(getReviewMovie(item.id))

  }, [item.id, dispatch]);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View className="my-5 w-[95%] self-center">
      <View className="flex-1 justify-between items-center flex-row  px-5">
        <Text style={styles.headText}>
         Yorumlar <Text className="text-gray-400">({reviews?.length})</Text>
        </Text>
        <Switch
          trackColor={{false: `${MyColors.warning}` , true: `${MyColors.white}`}}
          thumbColor={isEnabled ? `${MyColors.active}` : `${MyColors.active}`}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      <FlatList
        data={reviews}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => isEnabled &&
        
        <ReviewCard item={item} />
        
       
        }
      />
      {!isEnabled && 
            <Text style={styles.warningText}>Yorumları okumak için butona tıklayınız...</Text>
      }

    </View>
  );
};

export default Reviews;


const styles = StyleSheet.create({
  //içerikleri kaldrılmıştır...
 });
 