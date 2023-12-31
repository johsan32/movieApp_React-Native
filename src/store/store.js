import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from '../store/reducers';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
      thunk: true,
    }),
  devTools: true,
});
