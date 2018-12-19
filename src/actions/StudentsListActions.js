import { STUDEN_CHANGED} from './types';

export const studentChange = ({ props, value }) => {
  return (dispatch) => {
    dispatch({
      type: STUDEN_CHANGED,
      payload: { props, value }
    });
  };
};