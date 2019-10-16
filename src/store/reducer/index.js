import {combineReducers} from 'redux'
import Register from './register'
import LoginUser from './login'
import GetUserName from './getUserName'
import getBarberShop from './getBarberShop'
import getAllBarberShops from './getAllBarberShop'


const allReducers = combineReducers({
  Register,
  LoginUser,
  GetUserName,
  barbershop: getBarberShop,
  shops: getAllBarberShops

});

export default allReducers