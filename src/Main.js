import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class Main extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBXPPxbd-9qmPIbUbk88m2toiHk3BQ0low",
      authDomain: "ogrencikayit-fdece.firebaseapp.com",
      databaseURL: "https://ogrencikayit-fdece.firebaseio.com",
      projectId: "ogrencikayit-fdece",
      storageBucket: "ogrencikayit-fdece.appspot.com",
      messagingSenderId: "781326721257"
  });
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default Main;