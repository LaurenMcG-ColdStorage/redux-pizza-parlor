import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

function PizzaList() {
    const [PizzaLists, setPizzaLists] = useState([]);
    const fetchPizzas = () => {
        //Axios GET Call
        return axios.get('/api/pizza');
    }

    const refreshPizza = () => {
      const pizzaPromise = fetchPizzas();
      pizzaPromise
        //success
        .then((response) => {
          console.log('DATA:', response);
          setPizzaLists(response.data);
        })
        //failure
        .catch((err) => {
          console.error('ERROR:', err);
        });
    };
      //initial load of the components
    useEffect(() => {
        //body of effect
    console.log('initial load');
        //api call
        refreshPizza();
    }, []);    
    return (
        <div>
            {PizzaLists.map((pizza) => {
                return <p key={pizza.id}>{pizza.name}</p>
            })}
        </div>
    )
}

export default PizzaList;