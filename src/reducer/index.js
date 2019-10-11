import {combineReducers} from 'redux'
import Register from './register'
import LoginUser from './login'
import GetUserName from './getUserName'


const allReducers = combineReducers({
  Register,
  LoginUser,
  GetUserName
});

export default allReducers