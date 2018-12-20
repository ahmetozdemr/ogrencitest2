import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import StudentsList from './components/StudentsList';
import studentCreate from './components/StudentCreate';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="kimlik">

      <Scene key="loginScreen" component={LoginForm} title="Giris Ekrani" />

      <Scene 
        onRight={() => Actions.studentCreate()}
        rightTitle="Yeni"
        key="studentsList" 
        component={StudentsList} 
        title="Öğrenci Liste" />
             
        <Scene
        key="studentCreate"
        component={studentCreate}
        title="Öğrenci Kaydet"
        />
       
      </Scene>
    </Router>
  );
};
export default RouterComponent;
