import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  listFavorite: [], 
  listWatching: [], 
  isLoading: true,
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    ADD_FAVORITE_LIST: (state, action) => {
      state.listFavorite.push(action.payload);
      AsyncStorage.setItem('favorite', JSON.stringify(state.listFavorite)); 
    },
    REMOVE_FAVORITE_LIST: (state, action) => {
      state.listFavorite = state.listFavorite.filter(item => item.id !== action.payload.id); 
      AsyncStorage.setItem('favorite', JSON.stringify(state.listFavorite)); 
    },
    ADD_WATCH_LIST: (state, action) => {
      state.listWatching.push(action.payload);
      AsyncStorage.setItem('favorite', JSON.stringify(state.listWatching));
    },
    REMOVE_WATCH_LIST: (state, action) => {
      state.listWatching = state.listWatching.filter(item => item.id !== action.payload.id); 
      AsyncStorage.setItem('favorite', JSON.stringify(state.listWatching)); 
    },
  },
});

export const {
  ADD_FAVORITE_LIST,
  REMOVE_FAVORITE_LIST,
  REWOVE_ALL_FAVORITE,
  ADD_WATCH_LIST,
  REMOVE_WATCH_LIST,
  REWOVE_ALL_WATCH,
} = listSlice.actions;

export default listSlice.reducer;
