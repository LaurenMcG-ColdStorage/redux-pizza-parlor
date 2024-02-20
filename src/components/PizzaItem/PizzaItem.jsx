import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@mui/material/Grid';

function PizzaItem({ pizza }) {
    //const [PizzaLists, setPizzaLists] = useState([]);
    //Make Pizza List Global not local.
    //const pizzaList = useSelector((store) => store.pizzaList);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    const [togglepizza, settogglepizza] = useState(false)

    const handleCartButton = (event) => {
        event.preventDefault();
        console.log(`Add Pizza item`, {pizza})

        dispatch({
            type: 'ADDINGTOCART',
            payload: {
                name: pizza.name,
                price: pizza.price
            }});
        settogglepizza(true)
    }

    const handleRemoveButton = (event) => {
        event.preventDefault();
        console.log(`Pizza Item to Remove`, {pizza})

        dispatch({
            type: 'REMOVEFROMCART',
            payload: {
                name: pizza.name,
                price: pizza.price
            }});
    }
    
    return (
        <div>
            <div id="pizzacartbutton" onClick={() => settogglepizza(!togglepizza)}>
                <p>{pizza.name}</p>
                <p>{pizza.description}</p>
                <p>{pizza.price} </p>
                {togglepizza ? (
                <button onClick={handleRemoveButton}>Remove from Cart</button>
                ) : (
                <button onClick={handleCartButton}>Add to Cart</button>
                )} 
            </div>

        </div>
    );
}

export default PizzaItem;

{/* <Grid container spacing={2}>
<Grid item onClick={() => settogglepizza(!togglepizza)}>
    <p>{pizza.name}</p>
    <p>{pizza.price} </p>
        {togglepizza ? (
        <button onClick={handleRemoveButton}>Remove from Cart</button>
        ) : (
        <button onClick={handleCartButton}>Add to Cart</button>
        )}
</Grid>
</Grid> */}