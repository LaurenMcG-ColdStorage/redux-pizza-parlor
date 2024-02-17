import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂        -- Changes made
const cart = (state = [], action) => {
  if (action.type === 'ADDINGTOCART') {
    return [...state, action.payload];
  }
  if (action.type === 'REMOVEFROMCART') {
    return [state.filter((state) => !action.payload)];
  }
  return state;
};

const customer = (state = [], action) => {
  if (action.type === 'ADD_CUSTOMER') {
    return action.payload;
  }
  return state;
};

const store = createStore(
  combineReducers({
    cart, // 👈 Be sure to replace this, too! -- Replaced
    customer,
  }),
  applyMiddleware(logger)
);

export default store;
