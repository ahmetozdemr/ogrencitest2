import { combineReducers } from 'redux';
import kimlikdogrulamaReducers from './KimlikdogrulamaReducers';
import StudentsListReducers from './StudentsListReducers';

export default combineReducers({
  kimlikdogrulamaResponse: kimlikdogrulamaReducers,
  studentsListRespone: StudentsListReducers
});   