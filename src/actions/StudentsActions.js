import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { STUDEN_CHANGED,
  CREATE_REQUEST_SUCCESS,
  CREATE_REQUEST,
  STUDENT_LIST_DATA_SUCCESS } from './types';

export const studentChange = ({ props, value }) => {
  return (dispatch) => {
    dispatch({
      type: STUDEN_CHANGED,
      payload: { props, value }
    });
  };
};

export const studentCreate = ({ isim, soyisim, ogrencinumara, sube }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    dispatch({ type: CREATE_REQUEST });
    firebase.database().ref(`/kullanicilar/${currentUser.uid}/ogrenciler`)
      .push({ isim, soyisim, ogrencinumara, sube })
        .then(() => {
         dispatch({ type: CREATE_REQUEST_SUCCESS });    
         Actions.pop();  
        });
    };
};

export const studentsListData = () => {
  const { currentUser } = firebase.auth();
    return (dispatch) => {
      firebase.database().ref(`/kullanicilar/${currentUser.uid}/ogrenciler`)
      .on('value', snapshot => {
        dispatch({type: STUDENT_LIST_DATA_SUCCESS, payload: snapshot.val()})
      });
    };
};