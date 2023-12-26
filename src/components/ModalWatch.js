import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import { windowHeight, windowWidth } from '../utils/constans';
import {useSelector} from 'react-redux';
import MyColors from '../theme/MyColors';
import { MyFonts } from '../theme/MyFonts';


const ModalWatch = ({ setModalVisible, modalVisible, video}) => {
  const {fragman} = useSelector(state => state.movies);
  const officialTrailer = video.find(item => item.name === 'Official Trailer');
  const keyToUse = officialTrailer && officialTrailer.key ? officialTrailer.key : video[0].key;
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('Video sona erdi!');
    }
  }, []);


  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);
console.log(video);
  return (
    <View style={styles.centeredView}>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.videoContainer}>
              <View>
                <YoutubePlayer
                  height={500}
                  play={true}
                  videoId={keyToUse || fragman.key}
                  onChangeState={onStateChange}
                />
                {/* <Button
                  title={playing ? 'pause' : 'play'}
                  onPress={togglePlaying}
                /> */}
              </View>
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.textStyle}>Kapat</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

export default ModalWatch;


const styles = StyleSheet.create({
  //içerikleri kaldrılmıştır...
 });
 
