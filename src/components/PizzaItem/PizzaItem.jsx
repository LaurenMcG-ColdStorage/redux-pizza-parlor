import axios from 'axios';
import React from 'react';

function PizzaItem() {
    const fetchPizzas = () => {
        //Axios GET Call
        return axios.get('/api/pizza');
    }


    
    return (
        <ul>
            {/* MAP */}

        </ul>

    );
}