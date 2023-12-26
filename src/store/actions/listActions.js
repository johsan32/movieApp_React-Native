import { ADD_FAVORITE_LIST } from "../reducers/listReducer";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk} from '@reduxjs/toolkit';


export const addFavorite = (data) => async (dispatch) => {
    try {
        await AsyncStorage.setItem('favorite', JSON.stringify(data));
     dispatch(ADD_FAVORITE_LIST(data))
    } catch (error) {
      console.warn('err', error);
    }
}

export const addFavori = createAsyncThunk(
    'movies/ADD_FAVORITE_LIST',
    async (_, {dispatch}) =>{
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('my-key', jsonValue);
        dispatch(ADD_FAVORITE_LIST(data))
    }
)
const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('my-key', value);
    } catch (e) {
      console.log(e);
    }
  };
  