import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import StudentsList from './components/StudentsList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="kimlik">
        <Scene key="loginScreen" component={LoginForm} title="Giris Ekrani" />
      
        <Scene 
        onRight={() => console.log('tıklandı')}
        rightTitle="Yeni"       
        key="studentsList" 
        component={StudentsList} 
        title="Öğrenci Liste" />
      </Scene>
      
    </Router>
  );
};
export default RouterComponent;