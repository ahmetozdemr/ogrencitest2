import { combineReducers } from 'redux';
import kimlikdogrulamaReducers from './KimlikdogrulamaReducers';
import StudentsListReducers from './StudentsCreateReducers';
import StudentDataReducers from './StudentDataReducers';

export default combineReducers({
  kimlikdogrulamaResponse: kimlikdogrulamaReducers,
  studentsListRespone: StudentsListReducers,
  studentDataResponse: StudentDataReducers
});   