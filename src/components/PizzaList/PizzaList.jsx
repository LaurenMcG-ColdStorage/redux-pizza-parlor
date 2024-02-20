import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

import PizzaItem from '../PizzaItem/PizzaItem';

function PizzaList() {
    const [PizzaLists, setPizzaLists] = useState([]);
    const history = useHistory();

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

    function nextPage(){
      history.push('/custinfo');
    }
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
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {PizzaLists.map((pizza) => {
                  return <Grid item xs={3}> <PizzaItem key={pizza.id} pizza={pizza}/> </Grid>
                })
              }
            </Grid>
          </Box>
          <div>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" endIcon={<SendIcon/>} onClick={nextPage}>Next Step</Button>
            </Stack>
          </div>
        </div>
    )
}

export default PizzaList;