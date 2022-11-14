import { configureStore } from '@reduxjs/toolkit';
import breedReducer from '../reducers/app';

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }

const store = configureStore({
  reducer: {
    breedSet: breedReducer,
  },
});
/* eslint no-underscore-dangle: 0 */
export default store;

export type RootState = ReturnType<typeof store.getState>;
