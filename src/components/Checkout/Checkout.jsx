import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function checkout() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [total, setTotal] = useState(0);
  const customerDetails = useSelector((state) => state.customer);
  const orderDetails = useSelector((state) => state.cart);
  //const itemName = useSelector((state) => state.cart.name);
  //const orderTotal = useSelector((state) => state.cart.cost);

  //for reference
  //app.use('/api/order', orderRouter);
  // const orderInsertResults = await client.query(`INSERT INTO "orders" ("customer_name", "street_address", "city", "zip", "type", "total")
  // VALUES ($1, $2, $3, $4, $5, $6)

  useEffect(() => {
    const sum = orderDetails.reduce(
      (prev, current) => prev + parseFloat(current.price),
      0
    );
    setTotal(sum.toFixed(2));
  }, [orderDetails]);

  console.log('ORDER DETAILS', orderDetails);

  const checkoutSubmit = () => {
    //Do some stuff here then put on checkout button
    const pizzas = orderDetails.map((item, i) => {
      return {
        id: i + 1,
        quantity: 1,
      };
    });

    const newOrder = {
      customer_name: customerDetails.name,
      street_address: customerDetails.address,
      city: customerDetails.city,
      zip: customerDetails.zip,
      type: customerDetails.type,
      total: total,
      pizzas,
    };

    console.log('THIS IS THE NEW ORDER OBJECT', newOrder);

    axios
      .post('/api/order', newOrder)
      .then((response) => {
        dispatch({ type: 'ORDER_PLACED' });
      })
      .catch((error) => {
        console.log('ERROR IN POST:', error);
      });

    history.push('/selectpizza');
  };

  return (
    <div>
      <div>
        <p>
          {customerDetails.name} <br />
          {customerDetails.address} <br />
          {customerDetails.city} <br />
          {customerDetails.zip}
        </p>
      </div>
      <div>
        <p>Type: {customerDetails.type}</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {orderDetails.map((item, i) => {
            return (
              <>
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      <div>
        <p>Total: {total}</p> <hr />
        <button onClick={checkoutSubmit}>CHECKOUT</button>
      </div>
    </div>
  );
}

export default checkout;
