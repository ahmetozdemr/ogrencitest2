import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import StudentsList from './components/StudentsList';
import studentCreate from './components/StudentCreate';
import studentUpdate from './components/StudentUpdate';

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
        title="Öğrenci Liste"       
        />
             
        <Scene
        key="studentCreate"
        component={studentCreate}
        title="Öğrenci Kaydet"       
        />
        <Scene
        key="studentUpdate"
        component={studentUpdate}
        title="Öğrenci Güncelle"       
        />
       
      </Scene>
    </Router>
  );
};
export default RouterComponent;
