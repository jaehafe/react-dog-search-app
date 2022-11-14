import { Action, ActionType, ReducerState } from '../types/reducer';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ReducerState = {
  breed: 'all',
  subBreed: 'all',
  number: '1',
  imageResults: 0,
  error: false,
};

const breedSlice = createSlice({
  name: 'breed',
  initialState,
  reducers: {
    getSetBreed: (state, action) => {
      state.breed = action.payload;
    },
    getSetSubBreed: (state, action) => {
      state.subBreed = action.payload;
    },
    getNumber: (state, action) => {
      state.number = action.payload;
    },
    getImageResults: (state, action) => {
      state.imageResults = action.payload;
    },
    getError: (state, action) => {
      state.error = action.payload;
    },
    getReset: (state, action) => {
      state = {
        breed: 'all',
        subBreed: 'all',
        number: '1',
        imageResults: 0,
        error: false,
      };
    },
  },
});

export const {
  getSetBreed,
  getSetSubBreed,
  getNumber,
  getImageResults,
  getError,
  getReset,
} = breedSlice.actions;

export default breedSlice.reducer;

// const app = (state = initState, action: Action): ReducerState => {
//   switch (action.type) {
//     case ActionType.BREED:
//       return Object.assign({}, state, {
//         breed: action.payload,
//       });
//     case ActionType.SUB_BREED:
//       return Object.assign({}, state, {
//         subBreed: action.payload,
//       });
//     case ActionType.NUMBER:
//       return Object.assign({}, state, {
//         number: action.payload,
//       });
//     case ActionType.IMAGE_RESULTS:
//       return Object.assign({}, state, {
//         imageResults: action.payload,
//       });
//     case ActionType.ERROR:
//       return Object.assign({}, state, {
//         error: action.payload,
//       });
//     case ActionType.RESET:
//       return Object.assign({}, state, {
//         breed: 'all',
//         subBreed: 'all',
//         number: '1',
//         imageResults: 0,
//         error: false,
//       });
//     default:
//       return state;
//   }
// };

// export default app;
