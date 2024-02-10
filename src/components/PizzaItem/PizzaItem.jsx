import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function PizzaItem({ pizza }) {
    //const [PizzaLists, setPizzaLists] = useState([]);
    //Make Pizza List Global not local.
    //const pizzaList = useSelector((store) => store.pizzaList);
    const dispatch = useDispatch();

    const handleCartButton = (event) => {
        event.preventDefault();
        console.log(`Add Pizza item`, {pizza})

        dispatch({
            type: 'ADDINGTOCART',
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
                    <button onClick={handleCartButton}>Add to Cart</button>
                </ul>
            </div>
        </ul>

    );
}

export default PizzaItem;