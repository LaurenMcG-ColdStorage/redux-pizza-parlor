import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

import PizzaItem from '../PizzaItem/PizzaItem';

function PizzaList() {
    const [PizzaLists, setPizzaLists] = useState([]);

    //Make Pizza List Global not local.
    //const pizzaList = useSelector((store) => store.pizzaList);

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
          <header>
            <h2>Prime Pizza</h2>
          </header>

          <h4>SELECT YOUR PIZZA:</h4>
          {PizzaLists.map((pizza) => {
              return <PizzaItem key={pizza.id} pizza={pizza}/>
            })
          }
        </div>
    )
}

export default PizzaList;