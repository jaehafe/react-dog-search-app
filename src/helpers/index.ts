import { Dispatch } from 'redux';
import {
  getError,
  getNumber,
  getSetBreed,
  getSetSubBreed,
} from '../reducers/app';
// import { ActionType } from '../types/reducer';

export const renderBreed = (value: string, dispatch: Dispatch<any>) => {
  dispatch(getSetBreed(value));
  dispatch(getSetSubBreed('all'));
  dispatch(getError(false));
};

// export const renderBreed = (value: string, dispatch: Dispatch<any>) => {
//   dispatch({
//     type: ActionType.BREED,
//     payload: value,
//   });
//   dispatch({
//     type: ActionType.SUB_BREED,
//     payload: 'all',
//   });
//   dispatch({
//     type: ActionType.ERROR,
//     payload: false,
//   });
// };

export const renderSubBreed = (value: string, dispatch: Dispatch<any>) => {
  dispatch(getSetSubBreed(value));
};

export const renderNumber = (value: string, dispatch: Dispatch<any>) => {
  dispatch(getNumber(value));
};
