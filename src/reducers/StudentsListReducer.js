import { STUDEN_CHANGED } from '../actions/types';

const INITIAL_STATE = {
  isim: '',
  soyisim: '',
  ogrencinumara: '',
  sube: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STUDEN_CHANGED:
      return { ...state, [action.payload.props]: action.payload.value };
    default:
      return state;
    }
};