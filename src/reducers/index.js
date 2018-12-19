import { combineReducers } from 'redux';
import kimlikdogrulamaReducers from './KimlikdogrulamaReducers';
import StudentsListReducer from './StudentsListReducer';

export default combineReducers({
  kimlikdogrulamaResponse: kimlikdogrulamaReducers,
  studentsListRespone: StudentsListReducer
});