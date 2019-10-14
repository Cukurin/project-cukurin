import {combineReducers} from 'redux'
import Register from './register'
import LoginUser from './login'
import GetUserName from './getUserName'
import GetBarberShop from './getBarberShop'


const allReducers = combineReducers({
  Register,
  LoginUser,
  GetUserName,
   GetBarberShop
});

export default allReducers