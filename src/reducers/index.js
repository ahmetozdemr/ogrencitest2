import { combineReducers } from 'redux';
import kimlikdogrulamaReducers from './KimlikdogrulamaReducers';
import StudentsListReducers from './StudentsListReducer';

export default combineReducers({
  kimlikdogrulamaResponse: kimlikdogrulamaReducers,
  studentsListResponse: StudentsListReducers
});