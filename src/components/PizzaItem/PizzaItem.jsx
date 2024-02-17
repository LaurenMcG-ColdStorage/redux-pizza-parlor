import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

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
        <ul>
            {/* MAP */}
            <div>
                <ul>
                    <li>
                        {pizza.name}
                    </li>
                    <li>
                        {pizza.description}
                    </li>
                    <li>
                        {pizza.price}
                    </li>
                    <div id="pizzacartbutton" onClick={() => settogglepizza(!togglepizza)}>
                        {togglepizza ? (
                        <button onClick={handleRemoveButton}>Remove from Cart</button>
                        ) : (
                        <button onClick={handleCartButton}>Add to Cart</button>
                        )}
                    </div>
                </ul>
            </div>
        </ul>

    );
}

export default PizzaItem;