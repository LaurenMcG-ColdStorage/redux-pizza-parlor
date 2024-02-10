import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂        -- Changes made
const cart = (state = [], action) => {
  if(action.type === 'ADDINGTOCART') {
    return [...state, action.payload];
  }
  return state;
};

const customer = (state = {}, action) => {
  return state;
};

const store = createStore(
  combineReducers({
    cart, // 👈 Be sure to replace this, too! -- Replaced
    customer
  }),
  applyMiddleware(logger),
);


export default store;
