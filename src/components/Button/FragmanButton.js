import { StyleSheet,  TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {getFragman} from '../../store/actions/movieActions';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ModalWatch from '../ModalWatch';
import MyColors from '../../theme/MyColors';

const FragmanButton = ({item}) => {
  
  const dispatch = useDispatch();
  const {fragman} = useSelector(state => state.movies);
  const [modalVisible, setModalVisible] = useState(false);


  const handleFragman = () => {
    dispatch(getFragman(item.id));
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.icon}
        onPress={handleFragman}>
        <Icon name="movie-open-play" size={30} color={MyColors.error} />
      </TouchableOpacity>
      {modalVisible && (
        <ModalWatch
          video={fragman}
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />
      )}
    </>
  );
};

export default FragmanButton;

const styles = StyleSheet.create({});
