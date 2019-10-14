import {combineReducers} from 'redux'
import Register from './register'
import LoginUser from './login'
import GetUserName from './getUserName'
import getBarberShop from './getBarberShop'


const allReducers = combineReducers({
  Register,
  LoginUser,
  GetUserName,
  getBarberShop
});

export default allReducers