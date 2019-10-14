import {combineReducers} from 'redux'
import Register from './register'
import LoginUser from './login'


const allReducers = combineReducers({
  Register,
  LoginUser
});

export default allReducers