import axios from 'axios';

export const fetchPizzas = () => {
    //Axios GET Call
    return axios.get('/api/pizza');
}

export const fetchOrders = () => {
    //Axios GET Call
    return axios.get('/api/order');
}

export const postPizza = (pizzaData) => {
    //Axios POST Call
    return axios.post('/api/pizza', pizzaData);
}

export const postOrders = (orderData) => {
    //Axios POST Call
    return axios.post('/api/order', orderData);
}

export const deletePizza = (pizzaId) => {
    // axios DELETE call
    return axios.delete(`/api/pizza/${pizzaId}`);
  };
  
  export const updatePizza = (pizzaId) => {
    // axios PUT call
    return axios.put(`/api/pizza/${pizzaId}`);
  };