import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { EMAIL_CHANGED, 
  PASSWORD_CHANGED, 
  LOGIN_USER,
  LOGIN_USER_FAIL,LOGIN_USER_SUCCESS } from './types';

  export const emailChanged = (email) => {
    return (dispatch) => {
      dispatch({
        type: EMAIL_CHANGED,
        payload: email
      });
    };
  };

  export const passwordChanged = (password) => {
    return (dispatch) => {
      dispatch({
        type: PASSWORD_CHANGED,
        payload: password
      });
    };
  };

export const loginUser = ({ email, password }) => {
    console.log("1");
  return (dispatch) => {
    console.log("2");
    dispatch({ type: LOGIN_USER });
    console.log("3");
    if(email === '' || password === ''){
    console.log("4");
      Alert.alert(
      'Uyarı!','Email ve Şifre alanları dolu olmalıdır.',
      [
      {text:'Tamam',onPress:()=> dispatch({ type:LOGIN_USER_FAIL})}
      ]
      )
      } else {
        console.log("5");
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginSucces(dispatch, user))
        .catch(() => {
          firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => loginSucces(dispatch, user))
            .catch(() => loginFail(dispatch));
        });
     }
  };
};

const loginFail = (dispatch) => {
  console.log("6");
  Alert.alert(
    'Mesaj',
    'Kullanıcı bilgileri hatalı',
    [
      { text: 'Tamam', onPress: () => null }
    ]
  );
  console.log("7");
  dispatch({
    type: LOGIN_USER_FAIL
  });
};

const loginSucces = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  console.log("8");
  Actions.studentsList();
};