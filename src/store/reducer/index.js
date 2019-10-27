import {combineReducers} from 'redux'
import Register from './register'
import LoginUser from './login'
import GetUserName from './getUserName'
import getBarberShop from './getBarberShop'
import getAllBarberShops from './getAllBarberShop'
import addBarberShop from './addBarberShop'
import addComment from './comment'

const allReducers = combineReducers({
  Register,
  LoginUser,
  GetUserName,
  barbershop: getBarberShop,
  shops: getAllBarberShops,
  addBarberShop,
  addComment

});

export default allReducers